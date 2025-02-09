package com.voting.service;

import org.springframework.stereotype.Service;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.VoterRequestDTO;
import com.voting.dtos.VoterResponseDTO;
import com.voting.dtos.VoterSignupDTO;

import jakarta.transaction.Transactional;

@Service
@Transactional
public interface VoterService {

  ApiResponse signup(VoterSignupDTO entity);

  VoterResponseDTO getVoterById(Long voterId);

 ApiResponse login(String email, String password);

boolean resetPassword(String email, String newPassword);

boolean updateVoter(Long voterId, VoterRequestDTO voterRequestDTO);

boolean hasVoted(Long voterId);

boolean castVote(Long voterId, Long candidateId);
  
	
}
