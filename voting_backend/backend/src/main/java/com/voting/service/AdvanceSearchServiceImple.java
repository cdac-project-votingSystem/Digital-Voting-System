package com.voting.service;

import java.io.IOException;
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

    @Autowired
    ImageHandlingService imageHandlingService;

    @Override
    public List<AdvanceSearchResponseDTO> getCandidate(Long pid, Long cid) {
        List<AdvanceSearchResponseDTO> res = new ArrayList<>();
        List<Candidate> listAllCandidate;

        // Fetching candidates based on party ID and constituency ID
        if (pid == 0 && cid == 0) {
            listAllCandidate = candidateDao.findAll();
        } else if (pid == 0) {
            listAllCandidate = candidateDao.findAllByConstituency_Id(cid);
        } else if (cid == 0) {
            listAllCandidate = candidateDao.findByPoliticalParty_PartyId(pid);
        } else {
            listAllCandidate = candidateDao.findByPoliticalParty_PartyIdAndConstituency_Id(pid, cid);
        }

        for (Candidate candidate : listAllCandidate) {
        	if(candidate.getIsValid() == 1) {
        		
            PoliticalParty party = candidate.getPoliticalParty();
            Voter voter = candidate.getVoter();
            Constituency constituency = candidate.getConstituency();

            AdvanceSearchResponseDTO temp = new AdvanceSearchResponseDTO();
            temp.setPartyName(party.getPartyName());
            temp.setAbbreviation(party.getAbbreviation());
            temp.setFirstName(voter.getFirstName());
            temp.setLastName(voter.getLastName());
            temp.setConstituencyName(constituency.getName());

            // Fetching images (handling errors properly)
            try {
                String path = imageHandlingService.retrieveImage(candidate.getPoliticalParty(), "party");
                temp.setPartyLogo(path != null ? "data:image/png;base64," + path : null);
            } catch (Exception e) {
                e.printStackTrace();
                temp.setPartyLogo(null);
            }

            try {
                String path = imageHandlingService.retrieveImage(candidate, "candidate");
                temp.setCandidateImage(path != null ? "data:image/png;base64," + path : null);
            } catch (Exception e) {
                e.printStackTrace();
                temp.setCandidateImage(null);
            }
            res.add(temp);
        	}
        }

        return res;
    }
}

