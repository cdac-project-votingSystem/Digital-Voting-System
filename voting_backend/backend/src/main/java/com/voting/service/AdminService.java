package com.voting.service;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.ConstituencyAddNew;

public interface AdminService {
	
	ApiResponse addNewConstituency(ConstituencyAddNew dto);
	ApiResponse validPoliticalParty(Long id);
	ApiResponse invalidPoliticalParty(Long id);
}
