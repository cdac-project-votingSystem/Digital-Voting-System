package com.voting.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voting.custom_exceptions.ResourceNotFoundException;
import com.voting.dao.CandidateDao;
import com.voting.dao.ConstituencyDao;
import com.voting.dao.ElectionDao;
import com.voting.dao.PoliticalPartyDao;
import com.voting.dtos.ApiResponse;
import com.voting.dtos.CandidateResultHelperDTO;
import com.voting.dtos.ConstituencyAddNew;
import com.voting.dtos.PublishElectionResponseDTO;
import com.voting.dtos.SetElectionAddNew;
import com.voting.pojos.Candidate;
import com.voting.pojos.Constituency;
import com.voting.pojos.Election;
import com.voting.pojos.PoliticalParty;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AdminServiceImple implements AdminService {

	
	@Autowired
	ModelMapper modelMapper;
	@Autowired
	ConstituencyDao constituencyDao;
	@Autowired
	PoliticalPartyDao politicalPartyDao;
	@Autowired
	CandidateDao candidateDao;
	@Autowired
	ElectionDao	 electionDao;
	
	@Override
	public ApiResponse addNewConstituency(ConstituencyAddNew dto) {
		
		try {
		    Constituency constituency = modelMapper.map(dto, Constituency.class);
		    Constituency persistConstituency = constituencyDao.save(constituency);
		    return new ApiResponse("Added new constituency with name " + persistConstituency.getName() + 
		                           " and id " + persistConstituency.getId());
		} catch (Exception e) {
		    return new ApiResponse("Error: Unable to add constituency. " + e.getMessage());
		}


	}

	@Override
	public ApiResponse validPoliticalParty(Long id) {
		PoliticalParty p = politicalPartyDao.findById(id)
								.orElseThrow(()-> new ResourceNotFoundException("invalid political party id for validation"));
		p.setIsValid(1);
		politicalPartyDao.save(p);
		return new ApiResponse("validated political party with name- \"+p.getPartyName()+\" id-\"+p.getPartyId()");
		
	}
	@Override
	public ApiResponse invalidPoliticalParty(Long id) {
		PoliticalParty p = politicalPartyDao.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("invalid political party id"));
		p.setIsValid(-1);
		politicalPartyDao.save(p);
		return new ApiResponse("invalidated political party with name- "+p.getPartyName()+" id-"+p.getPartyId());
	}

	@Override
	public ApiResponse validCandidate(Long id) {
		Candidate c = candidateDao.findById(id).orElseThrow(()->new ResourceNotFoundException("invalid candidate id for validation"));
		c.setIsValid(1);
		return new ApiResponse("validated candidate with id " + c.getCandidateId());
	}

	@Override
	public ApiResponse invalidCandidate(Long id) {
		Candidate c = candidateDao.findById(id).orElseThrow(()->new ResourceNotFoundException("invalid candidate id for validation"));
		c.setIsValid(-1);
		return new ApiResponse("invalidated candidate with id " + c.getCandidateId());
		
	}

	@Override
	public ApiResponse setElectionDate(SetElectionAddNew entity) {
    
        Constituency constituency = constituencyDao.findById((long) entity.getConstituencyId())
                .orElseThrow(() -> new RuntimeException("Constituency not found"));

        
        Election e = modelMapper.map(entity, Election.class);
        e.setConstituency(constituency);

        electionDao.save(e);

        return new ApiResponse("Election set successfully for constituency: " + constituency.getName());
    }

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
		return candidateHelperList;
	}
	


}
