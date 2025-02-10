package com.voting.service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.voting.custom_exceptions.ResourceNotFoundException;
import com.voting.dao.CandidateDao;
import com.voting.dao.ConstituencyDao;
import com.voting.dao.ElectionDao;
import com.voting.dao.VoterDao;
import com.voting.dtos.ApiResponse;
import com.voting.dtos.CandidateVoteDTO;
import com.voting.dtos.VoterRequestDTO;
import com.voting.dtos.VoterResponseDTO;
import com.voting.dtos.VoterSignupDTO;
import com.voting.pojos.Candidate;
import com.voting.pojos.Constituency;
import com.voting.pojos.Election;
import com.voting.pojos.Voter;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class VoterServiceImple implements VoterService {

    @Autowired
    private VoterDao voterDao;
    
    @Autowired
    private CandidateDao candidateDao;

    @Autowired
    private ConstituencyDao constituencyDao;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ElectionDao electionDao;
    
    @Autowired
    private PasswordEncoder passwordEncoder; 
    
    @Autowired
    ImageHandlingService imageHandlingService;
    


    @Override
    public VoterResponseDTO getVoterById(Long voterId) {
        Optional<Voter> optionalVoter = voterDao.findById(voterId);

        if (optionalVoter.isEmpty()) {
            throw new RuntimeException("Voter not found");
        }

        Voter voter = optionalVoter.get();
        VoterResponseDTO voterResponseDTO = modelMapper.map(voter, VoterResponseDTO.class);
        voterResponseDTO.setConstituencyId(voter.getConstituency().getId());

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

//    private String firstName;
//    private String lastName;
//    private String contactNumber;
//    private LocalDate dob;
//    private int constituencyId;
//    private String adhaarNumber;
    @Transactional



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
    public boolean updateVoter(Long voterId, VoterRequestDTO voterRequestDTO) {
    	Optional<Voter> optionalVoter = voterDao.findById(voterId);
        if (!optionalVoter.isPresent()) {
            return false; // Voter not found
        }

        Voter voter = optionalVoter.get();

        // Step 2: Update the voter entity with new details
        voter.setFirstName(voterRequestDTO.getFirstName());
        voter.setLastName(voterRequestDTO.getLastName());
        voter.setContactNumber(voterRequestDTO.getContactNumber());
        voter.setDob(voterRequestDTO.getDob());
        voter.setAdhaarNumber(voterRequestDTO.getAdhaarNumber());

        // Fetch and set the constituency
        Constituency constituency = constituencyDao.findById(voterRequestDTO.getConstituencyId())
                .orElseThrow(() -> new RuntimeException("Constituency not found"));
        voter.setConstituency(constituency);

        // Step 3: Save the updated voter entity
        voterDao.save(voter);

        return true;
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

	@Override
	public boolean hasVoted(Long voterId) {
		// TODO Auto-generated method stub
		Voter voter =  voterDao.findById(voterId).get();
        
		return voter.isHasVoted();
	}

	@Override
	public ApiResponse castVote(Long voterId, Long candidateId) {
		// TODO Auto-generated method stub
		Voter voter = voterDao.findById(voterId).orElseThrow(()-> new ResourceNotFoundException("voter id not valid"));
        Candidate candidate = candidateDao.findById(candidateId).orElseThrow(()-> new ResourceNotFoundException("candidate id not valid"));

            candidate.setVotes(candidate.getVotes() + 1);
            candidateDao.save(candidate);

            Constituency constituency = voter.getConstituency();
            constituency.setVotesCast(constituency.getVotesCast() + 1);
            constituencyDao.save(constituency);

            voter.setHasVoted(true);
            voterDao.save(voter);

            return new ApiResponse("Congrats voted");
 
	}

//	 private Long id;
//	 private String name;
//	 private String partyName;
//	 private String image;
//	 private String logo;
	
	@Override
	public List<CandidateVoteDTO> getAllCandidate(Long uid){
		Voter v = voterDao.findById(uid).orElseThrow(()-> new ResourceNotFoundException("voter not found"));
		Constituency c = v.getConstituency();
		List<Candidate> list = candidateDao.findAllByConstituency_Id(c.getId());
		List<CandidateVoteDTO> res  =new ArrayList<>();
		for(Candidate can : list) {
			if(can.getIsValid() == 1) {
				CandidateVoteDTO temp = new CandidateVoteDTO();
				temp.setId(can.getCandidateId());
				temp.setName(can.getVoter().getFirstName()+ " "+can.getVoter().getLastName());
				temp.setPartyName(can.getPoliticalParty().getPartyName() + " ("+ can.getPoliticalParty().getAbbreviation()+")");
				try {
					temp.setImage("data:image/jpeg;base64,"+imageHandlingService.retrieveImage(can, "candidate"));
					temp.setLogo("data:image/jpeg;base64,"+imageHandlingService.retrieveImage(can.getPoliticalParty(),"party"));
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				res.add(temp);
			}
		}
		return res;
	}
}

