package com.voting.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.voting.dtos.ApiResponse;



public interface ImageHandlingService {
	ApiResponse uploadCandidateImage(Long candidateId, MultipartFile image) throws IOException;
	ApiResponse uploadPoliticalPartyImage(Long partyId, MultipartFile image) throws IOException;
	String retrieveImage( Object entity, String type) throws IOException;
	
	
}
