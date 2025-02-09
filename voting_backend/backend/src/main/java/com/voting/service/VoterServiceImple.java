package com.voting.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.voting.dao.ConstituencyDao;
import com.voting.dao.VoterDao;
import com.voting.dtos.ApiResponse;
import com.voting.dtos.VoterRequestDTO;
import com.voting.dtos.VoterResponseDTO;
import com.voting.dtos.VoterSignupDTO;
import com.voting.pojos.Constituency;
import com.voting.pojos.Voter;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class VoterServiceImple implements VoterService {

    @Autowired
    private VoterDao voterDao;

    @Autowired
    private ConstituencyDao constituencyDao;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder; // Ensure password encoding



    @Override
    public VoterResponseDTO getVoterById(Long voterId) {
        Optional<Voter> optionalVoter = voterDao.findById(voterId);

        if (optionalVoter.isEmpty()) {
            throw new RuntimeException("Voter not found");
        }

        Voter voter = optionalVoter.get();
        VoterResponseDTO voterResponseDTO = modelMapper.map(voter, VoterResponseDTO.class);
        voterResponseDTO.setConstituencyName(voter.getConstituency().getName());

        return voterResponseDTO;
    }

    @Override
    public boolean resetPassword(String email, String newPassword) {
        Optional<Voter> voterOptional = voterDao.findByEmail(email);

        if (voterOptional.isPresent()) {
            Voter voter = voterOptional.get();

            // ✅ Encrypt the new password before storing
            voter.setPassword(passwordEncoder.encode(newPassword));

            voterDao.save(voter);
            return true;
        }

        return false; // Voter not found
    }

    @Override
    public boolean updateVoter(Long voterId, VoterRequestDTO voterRequestDTO) {
        Optional<Voter> voterOptional = voterDao.findById(voterId);

        if (voterOptional.isPresent()) {
            Voter voter = voterOptional.get();

            modelMapper.map(voterRequestDTO, voter);

            Optional<Constituency> constituencyOptional = constituencyDao.findById((long) voterRequestDTO.getConstituencyId());
            if (constituencyOptional.isPresent()) {
                voter.setConstituency(constituencyOptional.get());
            } else {
                return false; // Constituency not found
            }

            voterDao.save(voter);
            return true;
        }
        return false;
    }

    @Override
    public ApiResponse login(String email, String password) {
        Optional<Voter> voterOptional = voterDao.findByEmail(email);

        if (voterOptional.isEmpty()) {
            return new ApiResponse("Voter not found!");
        }

        Voter voter = voterOptional.get();

        // ✅ Compare hashed passwords
        if (passwordEncoder.matches(password, voter.getPassword())) {
            return new ApiResponse("Login Successful!");
        } else {
            return new ApiResponse("Invalid credentials!");
        }
    }

    @Override
    public ApiResponse signup(VoterSignupDTO entity) {
        // ✅ Check if voter already exists
        if (voterDao.findByEmail(entity.getEmail()).isPresent()) {
            return new ApiResponse("Email already registered!");
        }

        // Map DTO to Entity
        Voter voter = modelMapper.map(entity, Voter.class);

        // Fetch Constituency
        Constituency constituency = constituencyDao.findById((long) entity.getConstituencyId())
                .orElseThrow(() -> new RuntimeException("Constituency not found"));

        // Assign Constituency to Voter
        voter.setConstituency(constituency);
        int prev = constituency.getTotalVoters();
        constituency.setTotalVoters(prev+1);
        constituencyDao.save(constituency);

        // ✅ Encrypt password before saving
        voter.setPassword(passwordEncoder.encode(entity.getPassword()));

        voterDao.save(voter);

        // Return success message
        return new ApiResponse("Voter registered successfully!");
    }
}

