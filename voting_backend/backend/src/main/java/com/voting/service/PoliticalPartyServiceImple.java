package com.voting.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.voting.dao.PoliticalPartyDao;
import com.voting.dtos.PoliticalPartyRequestRegister;
import com.voting.dtos.PoliticalPartyRequestUpdate;
import com.voting.dtos.PoliticalPartyResponseDTO;
import com.voting.dtos.PoliticalPartySignUpResponseDTO;
import com.voting.pojos.PoliticalParty;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PoliticalPartyServiceImple implements PoliticalPartyService {

	@Autowired
	PoliticalPartyDao politicalPartyDao;
	
	@Autowired
	ModelMapper modelMapper;
	
	@Autowired
	ImageHandlingService imageHandlingService;
	
	@Override
	public List<PoliticalPartyResponseDTO> getAlLToValidate() {
		  return politicalPartyDao.findByIsValid(0)
		            .stream()
		            .map(p -> {
		                PoliticalPartyResponseDTO temp = modelMapper.map(p, PoliticalPartyResponseDTO.class);

		                // Use service to retrieve image in Base64
		                if (p.getLogoPath() != null && !p.getLogoPath().isEmpty()) {
		                    try {
		                        String base64Image = imageHandlingService.retrieveImage(p, "party");
		                        temp.setPartyLogo("data:image/png;base64," + base64Image);
		                    } catch (IOException e) {
		                        System.err.println("Error retrieving party image: " + e.getMessage());
		                        temp.setPartyLogo(null);
		                    }
		                }
		                
		                return temp;
		            })
		            .collect(Collectors.toList());
		}


	@Override
	public List<PoliticalPartyResponseDTO> getAllValidParty() {
	    return politicalPartyDao.findByIsValid(1)
	            .stream()
	            .map(p -> {
	                PoliticalPartyResponseDTO temp = modelMapper.map(p, PoliticalPartyResponseDTO.class);

	                // Use service to retrieve image in Base64
	                if (p.getLogoPath() != null && !p.getLogoPath().isEmpty()) {
	                    try {
	                        String base64Image = imageHandlingService.retrieveImage(p, "party");
	                        temp.setPartyLogo("data:image/png;base64," + base64Image);
	                    } catch (IOException e) {
	                        System.err.println("Error retrieving party image: " + e.getMessage());
	                        temp.setPartyLogo(null);
	                    }
	                }
	                
	                return temp;
	            })
	            .collect(Collectors.toList());
	}



	@Override
	public Long registerParty(PoliticalPartyRequestRegister entity) throws IOException {
	    PoliticalParty party = new PoliticalParty();
	    party.setPartyName(entity.getPartyName());
	    party.setAbbreviation(entity.getAbbreviation());
	    party.setPartyDescription(entity.getPartyDescription());
	    
	    politicalPartyDao.save(party);

	    if (entity.getPartyLogo() != null && !entity.getPartyLogo().isEmpty()) {
	        imageHandlingService.uploadPoliticalPartyImage(party.getPartyId(), entity.getPartyLogo());
	    }


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

	@Override
	public List<PoliticalPartySignUpResponseDTO> getAllParties() {
		return politicalPartyDao.findAll()
                .stream()
                .map(party -> new PoliticalPartySignUpResponseDTO(party.getPartyId(), party.getPartyName(), party.getAbbreviation()))
                .collect(Collectors.toList());
	}
	
}
