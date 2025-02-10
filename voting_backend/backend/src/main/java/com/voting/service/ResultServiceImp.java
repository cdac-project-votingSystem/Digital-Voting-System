package com.voting.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import com.voting.custom_exceptions.ResourceNotFoundException;
import com.voting.dao.CandidateDao;
import com.voting.dao.ConstituencyDao;
import com.voting.pojos.Candidate;
import com.voting.pojos.Constituency;
import com.voting.pojos.ResultDTO;

import java.io.IOException;

public class ResultServiceImp implements ResultService{
	
	@Autowired
    private CandidateDao candidateDao;

    @Autowired
    private ConstituencyDao constituencyDao;

    @Autowired
    private ImageHandlingService imageService;
    
	@Override
	public List<ResultDTO> getElectionResultsByConstituency(Long constituencyId) {
		Constituency constituency = constituencyDao.findById(constituencyId)
                .orElseThrow(() -> new ResourceNotFoundException("Constituency not found with ID: " + constituencyId));
		
		List<Candidate> candidates = candidateDao.findByConstituencyId(constituencyId);
		
		return candidates.stream()
                .map(candidate -> {
                    try {
                        return new ResultDTO(
                                candidate.getVoter().getFirstName() + " " + candidate.getVoter().getLastName(),  // Candidate Name
                                candidate.getPoliticalParty().getPartyName(),  // Party Name
                                imageService.retrieveImage(candidate, "candidate"), // Base64 Image
                                candidate.getVotes(),  // Votes gained
                                constituency.getTotalVoters(),  // Total voters in the constituency
                                constituency.getVotesCast()  // Total votes cast
                        );
                    } catch (IOException e) {
                        throw new RuntimeException("Error retrieving image for candidate: " + candidate.getCandidateId(), e);
                    } 
                })
                .sorted((r1, r2) -> Integer.compare(r2.getVoteGain(), r1.getVoteGain())) // Sort in descending order
                .collect(Collectors.toList());
	}
	
}
