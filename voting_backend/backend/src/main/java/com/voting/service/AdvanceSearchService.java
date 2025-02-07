package com.voting.service;

import java.util.List;

import com.voting.dtos.AdvanceSearchResponseDTO;

public interface AdvanceSearchService {

	List<AdvanceSearchResponseDTO> getCandidate(Long pid, Long cid);

}
