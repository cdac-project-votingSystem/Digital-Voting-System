package com.voting.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.voting.custom_exceptions.ResourceNotFoundException;
import com.voting.dao.CandidateDao;
import com.voting.dao.PoliticalPartyDao;
import com.voting.dtos.ApiResponse;
import com.voting.pojos.Candidate;
import com.voting.pojos.PoliticalParty;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ImageHandlingServiceImple implements ImageHandlingService {

	@Autowired
    private CandidateDao candidateDao;
    
    @Autowired
    private PoliticalPartyDao politicalPartyDao;

    // Method to upload candidate image
    public ApiResponse uploadCandidateImage(Long candidateId, MultipartFile image) throws IOException {
        Candidate candidate = candidateDao.findById(candidateId)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid Candidate ID"));
        
        // Save image as byte array
        byte[] imageBytes = image.getBytes();
        candidate.setCandidateImage(imageBytes);

        candidateDao.save(candidate);
        return new ApiResponse("Image uploaded successfully for candidate ID " + candidateId);
    }

    // Method to upload political party image
    public ApiResponse uploadPoliticalPartyImage(Long partyId, MultipartFile image) throws IOException {
        PoliticalParty party = politicalPartyDao.findById(partyId)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid Political Party ID"));
        
        // Save image as byte array
        byte[] imageBytes = image.getBytes();
        party.setPartyLogo(imageBytes);

        politicalPartyDao.save(party);
        return new ApiResponse("Image uploaded successfully for political party ID " + partyId);
    }

    // Common method to retrieve image
    public byte[] retrieveImage(Object entity, String type) throws IOException {
        byte[] imageBytes = null;

        if (type.equals("candidate")) {
            Candidate candidate = (Candidate) entity;
            imageBytes = candidate.getCandidateImage();
        } else if (type.equals("party")) {
            PoliticalParty party = (PoliticalParty) entity;
            imageBytes = party.getPartyLogo();
        }

        if (imageBytes != null) {
            return imageBytes;
        } else {
            throw new ResourceNotFoundException("Image not found for the given entity");
        }
    }

}
