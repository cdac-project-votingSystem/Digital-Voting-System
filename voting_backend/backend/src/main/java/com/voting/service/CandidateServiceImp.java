package com.voting.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voting.dao.CandidateDao;
import com.voting.dao.ConstituencyDao;
import com.voting.dao.PoliticalPartyDao;
import com.voting.dao.VoterDao;
import com.voting.dtos.AdvanceSearchResponseDTO;
import com.voting.dtos.ApiResponse;
import com.voting.dtos.CandidateRequestDTO;
import com.voting.dtos.CandidateResDTO;
import com.voting.dtos.VotingDTO;
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
    
    @Autowired
    private ImageHandlingService imageHandlingService;

	@Override
	public ApiResponse addCandidateToParty(CandidateRequestDTO candidateRequest) throws IOException {
			
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
	        candidateDao.save(candidate);
	        
	        ApiResponse res = imageHandlingService.uploadCandidateImage(candidate.getCandidateId(),candidateRequest.getImage());

	        // Save candidate to DB
	        candidateDao.save(candidate);

	        return new ApiResponse("Candidate successfully added to party!");
	}

	@Override
	public List<CandidateResDTO> viewAllToValidate()  {
		List<Candidate> candidateList = candidateDao.findByIsValid(0);
			List<CandidateResDTO>  res = new ArrayList<>();
		for(Candidate c : candidateList) {
			CandidateResDTO temp = new CandidateResDTO();
			temp.setName( c.getVoter().getFirstName() + " "+c.getVoter().getLastName());
			temp.setConstituencyName(c.getConstituency().getName());
			temp.setPartyName(c.getPoliticalParty().getPartyName());
			temp.setPartyAbb(c.getPoliticalParty().getAbbreviation());
			temp.setId( c.getCandidateId());
			try {
				temp.setImage(imageHandlingService.retrieveImage(c, "candidate"));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			res.add(temp);
		}
		return res;
	}

//    private String partyLogo;
//    
////    @Column(name = "constituency_name", nullable = false, unique = true, length = 255) //oroginally name in pojo
//    private String constituencyName;
//   
//	private String candidateImage;
	@Override
	public List<VotingDTO> getAllValid() {
		List<Candidate> candidateList = candidateDao.findByIsValid(1);
		List<VotingDTO>  res = new ArrayList<>();
	for(Candidate c : candidateList) {
		VotingDTO temp = new VotingDTO();
		temp.setFirstName( c.getVoter().getFirstName());
		temp.setLastName(c.getVoter().getLastName());
		temp.setPartyName(c.getPoliticalParty().getPartyName());
		temp.setAbbreviation(c.getPoliticalParty().getAbbreviation());
		temp.setId( c.getCandidateId());
		try {
			temp.setCandidateImage( "data:image/png;base64,"+ imageHandlingService.retrieveImage(c, "candidate"));
			temp.setPartyLogo( "data:image/png;base64,"+imageHandlingService.retrieveImage(c.getPoliticalParty(), "party"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		res.add(temp);
	}
	return res;
	}

	@Override
	public int isValid(Long voterId) {
		Candidate candidate = candidateDao.findByVoterId(voterId);
        if (candidate != null) {
            return candidate.getIsValid(); // Return the isValid status
        }
        return -1; 
	}

}
