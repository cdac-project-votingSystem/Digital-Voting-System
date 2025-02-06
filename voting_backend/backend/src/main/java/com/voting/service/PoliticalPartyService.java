package com.voting.service;

import java.util.List;

import com.voting.dtos.PoliticalPartyResponseDTO;

public interface PoliticalPartyService {

	List<PoliticalPartyResponseDTO> getAlLToValidate();

	List<PoliticalPartyResponseDTO> getAllValidParty();
}
