package com.voting.service;

import java.io.IOException;
import java.util.List;

import com.voting.dtos.PoliticalPartyRequestRegister;
import com.voting.dtos.PoliticalPartyRequestUpdate;
import com.voting.dtos.PoliticalPartyResponseDTO;

public interface PoliticalPartyService {

	List<PoliticalPartyResponseDTO> getAlLToValidate();

	List<PoliticalPartyResponseDTO> getAllValidParty() throws IOException;

	Long registerParty(PoliticalPartyRequestRegister entity) throws IOException;

	boolean updatePoliticalParty(Long partyId, PoliticalPartyRequestUpdate entity);
}
