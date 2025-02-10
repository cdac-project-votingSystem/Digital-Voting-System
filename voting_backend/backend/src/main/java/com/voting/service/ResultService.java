package com.voting.service;

import java.util.List;

import com.voting.pojos.ResultDTO;

public interface ResultService {
	List<ResultDTO> getElectionResultsByConstituency(Long constituencyId);
}
