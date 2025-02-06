package com.voting.service;

import com.voting.dtos.PublishElectionResponseDTO;

public interface ElectionService {
	PublishElectionResponseDTO publishResult(Long constituencyId);
}
