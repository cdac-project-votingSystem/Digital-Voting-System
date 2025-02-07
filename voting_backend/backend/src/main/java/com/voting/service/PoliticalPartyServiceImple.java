package com.voting.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voting.dao.PoliticalPartyDao;
import com.voting.dtos.PoliticalPartyRequestRegister;
import com.voting.dtos.PoliticalPartyRequestUpdate;
import com.voting.dtos.PoliticalPartyResponseDTO;
import com.voting.pojos.PoliticalParty;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PoliticalPartyServiceImple implements PoliticalPartyService {

	@Autowired
	PoliticalPartyDao politicalPartyDao;
	
	@Autowired
	ModelMapper modelMapper;
	
	@Override
	public List<PoliticalPartyResponseDTO> getAlLToValidate() {
		 List<PoliticalParty> listP= politicalPartyDao.findByIsValid(0);
		 List<PoliticalPartyResponseDTO> res = new ArrayList<>();
		 for(PoliticalParty p : listP) {
			PoliticalPartyResponseDTO temp =  modelMapper.map(p, PoliticalPartyResponseDTO.class);
			res.add(temp);
		 }
		 return res;
	}

	@Override
	public List<PoliticalPartyResponseDTO> getAllValidParty() {
		 List<PoliticalParty> listP= politicalPartyDao.findByIsValid(1);
		 List<PoliticalPartyResponseDTO> res = new ArrayList<>();
		 for(PoliticalParty p : listP) {
			PoliticalPartyResponseDTO temp =  modelMapper.map(p, PoliticalPartyResponseDTO.class);
			res.add(temp);
		 }
		 return res;
	}

	@Override
	public Long registerParty(PoliticalPartyRequestRegister entity ) {
		 PoliticalParty party= modelMapper.map(entity, PoliticalParty.class);
		 politicalPartyDao.save(party);
		 return party.getPartyId();
	}

	@Override
		public boolean updatePoliticalParty(Long partyId, PoliticalPartyRequestUpdate entity) {
		Optional<PoliticalParty> optionalParty = politicalPartyDao.findById(partyId);

        if (optionalParty.isPresent()) {
            PoliticalParty existingParty = optionalParty.get();
            
            if (entity.getPartyName() != null) {
                existingParty.setPartyName(entity.getPartyName());
            }
            if (entity.getAbbreviation() != null) {
                existingParty.setAbbreviation(entity.getAbbreviation());
            }
            if (entity.getPartyDescription() != null) {
                existingParty.setPartyDescription(entity.getPartyDescription());
            }
            

            // Save updated entity in DB
            politicalPartyDao.save(existingParty);
            return true;
        }
        return false; 
		}
	
}
