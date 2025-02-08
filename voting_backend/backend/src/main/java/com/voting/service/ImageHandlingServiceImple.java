package com.voting.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;

import static org.apache.commons.io.FileUtils.readFileToByteArray;
import static org.apache.commons.io.FileUtils.writeByteArrayToFile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.voting.custom_exceptions.ResourceNotFoundException;
import com.voting.dao.CandidateDao;
import com.voting.dao.PoliticalPartyDao;
import com.voting.dtos.ApiResponse;
import com.voting.pojos.Candidate;
import com.voting.pojos.PoliticalParty;

import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;
import java.util.Base64;
import org.apache.commons.io.FileUtils;

@Service
@Transactional
public class ImageHandlingServiceImple implements ImageHandlingService {

    @Autowired
    private CandidateDao candidateDao;

    @Autowired
    private PoliticalPartyDao politicalPartyDao;

    @Value("${file.upload.location}")
    private String uploadFolder;

    @PostConstruct
    public void init() {
        File folder = new File(uploadFolder);
        if (!folder.exists()) {
            if (folder.mkdirs()) {
                System.out.println("Created folder: " + uploadFolder);
            } else {
                System.err.println("Failed to create folder: " + uploadFolder);
            }
        } else {
            System.out.println("Folder already exists: " + uploadFolder);
        }
    }

    public ApiResponse uploadCandidateImage(Long candidateId, MultipartFile image) throws IOException {
        Candidate candidate = candidateDao.findById(candidateId)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid Candidate ID"));

        String path = Paths.get(uploadFolder, image.getOriginalFilename()).toString();
        writeByteArrayToFile(new File(path), image.getBytes());

        candidate.setImagePath(path);
        candidateDao.save(candidate);

        return new ApiResponse("Image uploaded successfully for candidate ID " + candidateId);
    }

    public ApiResponse uploadPoliticalPartyImage(Long partyId, MultipartFile image) throws IOException {
        PoliticalParty party = politicalPartyDao.findById(partyId)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid Political Party ID"));

        String path = Paths.get(uploadFolder, image.getOriginalFilename()).toString();
        writeByteArrayToFile(new File(path), image.getBytes());

        party.setLogoPath(path);
        politicalPartyDao.save(party);

        return new ApiResponse("Image uploaded successfully for political party ID " + partyId);
    }


public String retrieveImage(Object entity, String type) throws IOException {
    String path = null;

    if ("candidate".equals(type) && entity instanceof Candidate) {
        Candidate candidate = (Candidate) entity;
        path = candidate.getImagePath();
    } else if ("party".equals(type) && entity instanceof PoliticalParty) {
        PoliticalParty party = (PoliticalParty) entity;
        path = party.getLogoPath();
    } else {
        throw new IllegalArgumentException("Invalid type: " + type);
    }

    if (path == null || path.isEmpty()) {
        throw new ResourceNotFoundException("Image not yet assigned!");
    }

    File imageFile = new File(path);
    if (!imageFile.exists()) {
        throw new ResourceNotFoundException("Image file not found at: " + path);
    }

    // Convert to Base64 String
    byte[] imageBytes = FileUtils.readFileToByteArray(imageFile);
    return Base64.getEncoder().encodeToString(imageBytes);
}
}

