package com.voting.service;

import java.io.IOException;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.CandidateRequestDTO;

public interface CandidateService {
	ApiResponse addCandidateToParty(CandidateRequestDTO candidateRequest) throws IOException;
}
