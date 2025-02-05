package com.voting.service;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.ConstituencyAddNew;
import com.voting.dtos.SetElectionAddNew;

public interface AdminService {
	
	ApiResponse addNewConstituency(ConstituencyAddNew dto);
	ApiResponse validPoliticalParty(Long id);
	ApiResponse invalidPoliticalParty(Long id);
	ApiResponse validCandidate(Long id);
	ApiResponse invalidCandidate(Long id);
	ApiResponse setElectionDate(SetElectionAddNew entity);
}
