package com.voting.service;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.CandidateRequestDTO;

public interface CandidateService {
	ApiResponse addCandidateToParty(CandidateRequestDTO candidateRequest);
}
