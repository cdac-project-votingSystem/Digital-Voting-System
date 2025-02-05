package com.voting.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voting.dao.ConstituencyDao;
import com.voting.dtos.ApiResponse;
import com.voting.dtos.ConstituencyAddNew;
import com.voting.pojos.Constituency;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AdminServiceImple implements AdminService {

	
	@Autowired
	ModelMapper modelMapper;
	@Autowired
	ConstituencyDao constituencyDao;
	
	@Override
	public ApiResponse addNewConstituency(ConstituencyAddNew dto) {
		
		try {
		    Constituency constituency = modelMapper.map(dto, Constituency.class);
		    Constituency persistConstituency = constituencyDao.save(constituency);
		    return new ApiResponse("Added new constituency with name " + persistConstituency.getName() + 
		                           " and id " + persistConstituency.getId());
		} catch (Exception e) {
		    return new ApiResponse("Error: Unable to add constituency. " + e.getMessage());
		}


	}

}
