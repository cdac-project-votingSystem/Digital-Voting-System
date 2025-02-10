package com.voting.service;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.PublishElectionResponseDTO;
import com.voting.dtos.SendElectionDetailsDTO;

public interface ElectionService {
	PublishElectionResponseDTO publishResult(Long constituencyId);

	SendElectionDetailsDTO getDetails(Long cid);
}
