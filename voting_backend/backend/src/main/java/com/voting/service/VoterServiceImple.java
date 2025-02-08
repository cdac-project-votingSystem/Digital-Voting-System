package com.voting.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import com.voting.custom_exceptions.ResourceNotFoundException;
import com.voting.dao.ConstituencyDao;
import com.voting.dao.VoterDao;
import com.voting.dtos.ApiResponse;
import com.voting.dtos.VoterRequestDTO;
import com.voting.dtos.VoterResponseDTO;
import com.voting.dtos.VoterSignupDTO;
import com.voting.pojos.Constituency;
import com.voting.pojos.Voter;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class VoterServiceImple implements VoterService {

	@Autowired
	VoterDao voterDao;
	@Autowired
	ConstituencyDao constituencyDao;
	@Autowired
	ModelMapper modelMapper;
	
//	@Override
//	public Boolean signup(VoterSignupDTO entity) {
//	    Voter voter = modelMapper.map(entity, Voter.class);
//
//	    Constituency area = constituencyDao.findById((long)entity.getConstituencyId())
//	                                       .orElseThrow(() -> new RuntimeException("Constituency not found"));
//
//	    voter.setConstituency(area);
//	    voterDao.save(voter);
//	    
//	    return true;
//	}

	@Override
	public VoterResponseDTO getVoterById(Long voterId) {
		Optional<Voter> optionalVoter = voterDao.findById(voterId);
		
		if (optionalVoter.isEmpty()) {
            return null; // Or you can throw a custom exception here
        }
		
		Voter voter = optionalVoter.get();
        VoterResponseDTO voterResponseDTO = modelMapper.map(voter, VoterResponseDTO.class);
        voterResponseDTO.setConstituencyName(voter.getConstituency().getName());
        
        return voterResponseDTO;

	}

//	@Override
//	public boolean authenticateVoter(String email, String password) {
//		Optional<Voter> voter = voterDao.findByEmail(email);
//		if (voter.isPresent()) {
//            // Check if the password matches
//            return voter.get().getPassword().equals(password);
//        }
//		return false;
//	}
	
	

	@Override
	public boolean resetPassword(String email, String newPassword) {
		Optional<Voter> voterOptional = voterDao.findByEmail(email);
        
        if (voterOptional.isPresent()) {
            Voter voter = voterOptional.get();
            
            // Encrypt the new password before storing
            voter.setPassword(newPassword);
            
            // Save the updated voter
            voterDao.save(voter);
            return true;
        }
        
        return false; // Voter not found
	}

	@Override
	public boolean updateVoter(Long voterId, VoterRequestDTO voterRequestDTO) {
		Optional<Voter> voterOptional = voterDao.findById(voterId);
		
		if(voterOptional.isPresent()) {
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
	        
	        // Compare passwords (Consider hashing for security)
	        if (voter.getPassword().equals(password)) {
	            return new ApiResponse("Login Successful!");
	        } else {
	            return new ApiResponse("Invalid credentials!");
	        }
		
	}

	public ApiResponse signup(VoterSignupDTO entity) {
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
        voterDao.save(voter);

        // Return success message
        return new ApiResponse("Voter registered successfully!");
    }
	
}
