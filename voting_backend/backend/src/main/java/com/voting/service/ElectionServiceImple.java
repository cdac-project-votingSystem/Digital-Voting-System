package com.voting.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voting.custom_exceptions.ResourceNotFoundException;
import com.voting.dao.CandidateDao;
import com.voting.dao.ConstituencyDao;
import com.voting.dao.ElectionDao;
import com.voting.dao.VoterDao;
import com.voting.dtos.ApiResponse;
import com.voting.dtos.CandidateResultHelperDTO;
import com.voting.dtos.PublishElectionResponseDTO;
import com.voting.dtos.SendElectionDetailsDTO;
import com.voting.pojos.Candidate;
import com.voting.pojos.Constituency;
import com.voting.pojos.Election;
import com.voting.pojos.Voter;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ElectionServiceImple implements ElectionService {

	@Autowired
	CandidateDao candidateDao;
	@Autowired
	ConstituencyDao constituencyDao;
	@Autowired
	ElectionDao electionDao;
	@Autowired
	VoterDao voterDao;
	
	@Override
	public PublishElectionResponseDTO publishResult(Long constituencyId) {
		  Constituency constituency = constituencyDao.findById(constituencyId)
		            .orElseThrow(() -> new ResourceNotFoundException("Constituency not found"));
		  List<CandidateResultHelperDTO> candidateResults = getCandidateResultsForConstituency(constituencyId);
		  int totalVoters = constituency.getTotalVoters();
		  int votesCasted = constituency.getVotesCast();
		  
		  return new PublishElectionResponseDTO(
		            constituency.getName(),
		            totalVoters,
		            votesCasted,
		            candidateResults
		    );
		  
	}

	private List<CandidateResultHelperDTO> getCandidateResultsForConstituency(Long constituencyId) {
		List<Candidate> candidateList = candidateDao.findAllByConstituency_Id(constituencyId);
		List<CandidateResultHelperDTO> candidateHelperList = new ArrayList<>();
		for(Candidate c : candidateList) {
			CandidateResultHelperDTO dto = new CandidateResultHelperDTO(
	                c.getVoter().getFirstName()+ " "+ c.getVoter().getLastName(),
	                c.getPoliticalParty().getAbbreviation(),
	                c.getVotes());
			candidateHelperList.add(dto);
		}
		 candidateHelperList.sort((dto1, dto2) -> Integer.compare(dto2.getVotes(), dto1.getVotes()));
		return candidateHelperList;
	}

	@Override
	public SendElectionDetailsDTO getDetails(Long cid) {
			Voter v = voterDao.findById(cid)
					.orElseThrow(() -> new ResourceNotFoundException("Voter not found"));
		
		  Constituency constituency = constituencyDao.findById(v.getConstituency().getId())
		            .orElseThrow(() -> new ResourceNotFoundException("Constituency not found"));
		  Election e = electionDao.findByConstituency_Id(constituency.getId())
				  .orElseThrow(() -> new ResourceNotFoundException("Election not found"));
		  SendElectionDetailsDTO res = new SendElectionDetailsDTO();
		  
		  res.setCname(constituency.getName());
		  res.setElectionEndTime(e.getElectionEndTime());
		  res.setElectionStartTime(e.getElectionStartTime());
		  return res;
		  
		
	}
}
