package com.voting.service;

import java.io.IOException;
import java.util.List;

import com.voting.dtos.AdvanceSearchResponseDTO;
import com.voting.dtos.ApiResponse;
import com.voting.dtos.CandidateRequestDTO;
import com.voting.dtos.CandidateResDTO;
import com.voting.dtos.VotingDTO;

public interface CandidateService {
	ApiResponse addCandidateToParty(CandidateRequestDTO candidateRequest) throws IOException;
	
	List<CandidateResDTO> viewAllToValidate() ;

	List<VotingDTO> getAllValid();
}
