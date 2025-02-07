package com.voting.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voting.dao.CandidateDao;

import com.voting.dtos.AdvanceSearchResponseDTO;
import com.voting.pojos.Candidate;
import com.voting.pojos.Constituency;
import com.voting.pojos.PoliticalParty;
import com.voting.pojos.Voter;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AdvanceSearchServiceImple implements AdvanceSearchService {

	@Autowired
	ModelMapper modelMapper;
	@Autowired
	CandidateDao candidateDao;

	
	
	@Override
	public List<AdvanceSearchResponseDTO> getCandidate(Long pid , Long cid) {
		
		List<AdvanceSearchResponseDTO> res  = new ArrayList<>();
		List<Candidate> listAllCandidate = new ArrayList<>();
		if(pid == 0 && cid == 0) {
			listAllCandidate =  candidateDao.findAll();
		}
		else if(pid == 0) {
			 listAllCandidate = candidateDao.findAllByConstituency_Id(cid);
		}
		else if(cid == 0) {
			listAllCandidate = candidateDao.findByPoliticalParty_PartyId(pid);
		}else {
			 listAllCandidate = candidateDao.findByPoliticalParty_PartyIdAndConstituency_Id(pid,cid);
		}
		for(Candidate candidate : listAllCandidate) {
			PoliticalParty party =  candidate.getPoliticalParty();
			Voter voter = candidate.getVoter();
			Constituency constituency = candidate.getConstituency();
			
//			private String partyName;
//		    private String abbreviation;
//		    private byte[] partyLogo;
//		    private String constituencyName;
//		    private String firstName;
//			private String lastName;
//			private byte[] candidateImage;
			
			AdvanceSearchResponseDTO temp =  new AdvanceSearchResponseDTO();
			temp.setPartyName(party.getPartyName());
			temp.setPartyLogo(party.getPartyLogo());
			temp.setAbbreviation(party.getAbbreviation());
			temp.setFirstName(voter.getFirstName());
			temp.setLastName(voter.getLastName());
			temp.setConstituencyName(constituency.getName());
			temp.setCandidateImage(candidate.getCandidateImage());
			res.add(temp);
			
		}
		
		return res;
		
	}
	
	
}
