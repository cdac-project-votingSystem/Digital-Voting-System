package com.voting.service;

import org.springframework.stereotype.Service;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.VoterSignupDTO;

import jakarta.transaction.Transactional;

@Service
@Transactional
public interface VoterService {

  ApiResponse signup(VoterSignupDTO entity);
  
		
	
}
