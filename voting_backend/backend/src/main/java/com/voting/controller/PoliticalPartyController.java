package com.voting.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.PoliticalPartyRequestRegister;
import com.voting.dtos.PoliticalPartyRequestUpdate;
import com.voting.dtos.PoliticalPartyResponseDTO;
import com.voting.dtos.PoliticalPartySignUpResponseDTO;
import com.voting.service.ImageHandlingService;
import com.voting.service.PoliticalPartyService;

//@CrossOrigin("*")
@RestController
@RequestMapping("/politicalParty")
public class PoliticalPartyController {

	@Autowired
	PoliticalPartyService politicalPartyService;
	@Autowired
	ImageHandlingService imageHandlingService;
	
	@PostMapping(value = "/register", consumes = "multipart/form-data")
	public ResponseEntity<?> registerPoliticalParty(@ModelAttribute PoliticalPartyRequestRegister entity) throws IOException {

		System.out.println("Received Party Name: " + entity.getPartyName());
	    System.out.println("Received Abbreviation: " + entity.getAbbreviation());
	    System.out.println("Received Description: " + entity.getPartyDescription());
	    System.out.println("Received Image: " + (entity.getPartyLogo() != null ? entity.getPartyLogo().getOriginalFilename() : "No image"));
		
	    Long partyId = politicalPartyService.registerParty(entity);

	    if (entity.getPartyLogo() != null && !entity.getPartyLogo().isEmpty()) {
	        imageHandlingService.uploadPoliticalPartyImage(partyId, entity.getPartyLogo());  
	    }

	    return ResponseEntity.status(HttpStatus.CREATED)
	            .body(new ApiResponse("Political party registered successfully"));
	}

	@GetMapping("/tovalidate")
	public ResponseEntity<List<PoliticalPartyResponseDTO>> listAllPoliticalPartyToValidate( )  throws IOException {
	    List<PoliticalPartyResponseDTO> parties = politicalPartyService.getAlLToValidate();
	    if (parties.isEmpty()) {
	        return ResponseEntity.noContent().build();  // Returns HTTP 204 if empty
	    }
	    return ResponseEntity.ok(parties);  // Returns HTTP 200 with the list
	}

	@GetMapping("/viewAllValid")
	public ResponseEntity<List<PoliticalPartyResponseDTO>>  listAllPoliticalParty()  throws IOException {
		List<PoliticalPartyResponseDTO> parties = politicalPartyService.getAllValidParty();
	    if (parties.isEmpty()) {
	        return ResponseEntity.noContent().build();  // Returns HTTP 204 if empty
	    }
	    return ResponseEntity.ok(parties);  // Returns HTTP 200 with the list
	}
	
	
	// show all candidate for a  pp for a consti 
//	@GetMapping("/{pid}/{constid}")
//	public ResponseEntity<List<PoliticalPartyResponseDTO>> getMethodName(@PathVariable Long pid, @PathVariable Long constid) {
//		if(constid == -1) {
//			
//		}
//		else {
//				
//		}
//	}
	
	@PutMapping("/{partyId}")
	public ResponseEntity<ApiResponse> updatePoliticalParty(
	        @PathVariable Long partyId, 
	        @RequestBody PoliticalPartyRequestUpdate entity) {
	    
	    boolean updated = politicalPartyService.updatePoliticalParty(partyId, entity);
	    if (!updated) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND)
	                             .body(new ApiResponse("Political Party not found"));
	    }
	    return ResponseEntity.ok(new ApiResponse("Political Party updated successfully"));
	}
	
	
	@GetMapping("viewAll")
	 public List<PoliticalPartySignUpResponseDTO> getAllParties() {
        return politicalPartyService.getAllParties();
    }

}
