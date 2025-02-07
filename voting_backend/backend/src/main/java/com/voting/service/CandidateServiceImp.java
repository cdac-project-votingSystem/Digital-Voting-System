package com.voting.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voting.dao.CandidateDao;
import com.voting.dao.ConstituencyDao;
import com.voting.dao.PoliticalPartyDao;
import com.voting.dao.VoterDao;
import com.voting.dtos.ApiResponse;
import com.voting.dtos.CandidateRequestDTO;
import com.voting.pojos.Candidate;
import com.voting.pojos.Constituency;
import com.voting.pojos.PoliticalParty;
import com.voting.pojos.Voter;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;


@Service
@Transactional
public class CandidateServiceImp implements CandidateService{
	@Autowired
    private PoliticalPartyDao politicalPartyDao;

    @Autowired
    private CandidateDao candidateDao;
    
    @Autowired
    private VoterDao voterDao;
    
    @Autowired
    private ConstituencyDao constituencyDao;

    @Autowired
    private ModelMapper modelMapper;

	@Override
	public ApiResponse addCandidateToParty(CandidateRequestDTO candidateRequest) {
			
//		System.out.println(candidateRequest);
		
		Voter voter = voterDao.findByAdhaarNumber(candidateRequest.getAdhaarNumber())
		        .orElseThrow(() -> new EntityNotFoundException("Voter not found with Aadhar Number: " + candidateRequest.getAdhaarNumber()));
		
		
	        PoliticalParty politicalParty = politicalPartyDao.findById( (long) candidateRequest.getPoliticalPartyId())
	            .orElseThrow(() -> new EntityNotFoundException("Political Party not found with ID: " + candidateRequest.getPoliticalPartyId()));

	        Constituency constituency = constituencyDao.findById((long) candidateRequest.getConstituencyId())
	            .orElseThrow(() -> new EntityNotFoundException("Constituency not found with ID: " + candidateRequest.getConstituencyId()));

	        // Convert DTO to Entity using ModelMapper
	        Candidate candidate = new Candidate();
	        candidate.setVoter(voter);
	        candidate.setPoliticalParty(politicalParty);
	        candidate.setConstituency(constituency);
	        candidate.setIsValid(0); // Mark as valid candidate

	        // Save candidate to DB
	        candidateDao.save(candidate);

	        return new ApiResponse("Candidate successfully added to party!");
	}
  
	
}
