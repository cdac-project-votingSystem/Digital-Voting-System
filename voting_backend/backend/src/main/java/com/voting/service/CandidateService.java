package com.voting.service;

<<<<<<< HEAD
public interface CandidateService {

=======
import com.voting.dtos.ApiResponse;
import com.voting.dtos.CandidateRequestDTO;

public interface CandidateService {
	ApiResponse addCandidateToParty(CandidateRequestDTO candidateRequest);
>>>>>>> v2
}
