package com.voting.service;

import java.util.List;

import com.voting.dtos.PoliticalPartyRequestRegister;
import com.voting.dtos.PoliticalPartyRequestUpdate;
import com.voting.dtos.PoliticalPartyResponseDTO;

public interface PoliticalPartyService {

	List<PoliticalPartyResponseDTO> getAlLToValidate();

	List<PoliticalPartyResponseDTO> getAllValidParty();

	Long registerParty(PoliticalPartyRequestRegister entity);

	boolean updatePoliticalParty(Long partyId, PoliticalPartyRequestUpdate entity);
}
