package com.voting.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voting.dao.PoliticalPartyDao;
import com.voting.dtos.PoliticalPartyRequestRegister;
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
	
	
	

	
}
