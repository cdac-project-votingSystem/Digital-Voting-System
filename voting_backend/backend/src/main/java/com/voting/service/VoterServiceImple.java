package com.voting.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voting.custom_exceptions.ResourceNotFoundException;
import com.voting.dao.ConstituencyDao;
import com.voting.dao.VoterDao;
import com.voting.dtos.ApiResponse;
import com.voting.dtos.VoterSignupDTO;
import com.voting.pojos.Constituency;
import com.voting.pojos.Voter;


import jakarta.transaction.Transactional;

@Service
@Transactional
public class VoterServiceImple implements VoterService {

	@Autowired
	VoterDao voterDao;
	@Autowired
	ConstituencyDao constituencyDao;
	@Autowired
	ModelMapper  modelMapper;
	
	@Override
	public ApiResponse signup(VoterSignupDTO entity) {
		  Voter voter= modelMapper.map(entity, Voter.class);
		 Constituency area = constituencyDao.findById(  (long) entity.getConstituencyId())
				 .orElseThrow(() -> new ResourceNotFoundException("Invalid constituency during signup"));
		  voter.setConstituency(area);
		  voterDao.save(voter);
		  return new ApiResponse("voter added in the database with name" + voter.getFirstName() + " "+ voter.getLastName() +" id" + voter.getId());
	}
	
}
