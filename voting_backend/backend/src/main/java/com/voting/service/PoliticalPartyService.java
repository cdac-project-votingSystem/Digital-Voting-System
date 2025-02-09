package com.voting.service;

import java.io.IOException;
import java.util.List;

import com.voting.dtos.PoliticalPartyRequestRegister;
import com.voting.dtos.PoliticalPartyRequestUpdate;
import com.voting.dtos.PoliticalPartyResponseDTO;
import com.voting.dtos.PoliticalPartySignUpResponseDTO;

public interface PoliticalPartyService {

	List<PoliticalPartyResponseDTO> getAlLToValidate();

	List<PoliticalPartyResponseDTO> getAllValidParty() throws IOException;

<<<<<<< HEAD
	Long registerParty(PoliticalPartyRequestRegister entity) throws IOException;
=======
	
	Long registerParty(PoliticalPartyRequestRegister entity);
>>>>>>> v3

	boolean updatePoliticalParty(Long partyId, PoliticalPartyRequestUpdate entity);

	List<PoliticalPartySignUpResponseDTO> getAllParties();
}
