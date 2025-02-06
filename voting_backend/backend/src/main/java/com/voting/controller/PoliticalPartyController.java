package com.voting.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.PoliticalPartyRequestRegister;
import com.voting.dtos.PoliticalPartyResponseDTO;
import com.voting.service.ImageHandlingService;
import com.voting.service.PoliticalPartyService;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/politicalParty")
public class PoliticalPartyController {

	@Autowired
	PoliticalPartyService politicalPartyService;
	@Autowired
	ImageHandlingService imageHandlingService;
	
	@PostMapping("/register")
	public ResponseEntity<?> postMethodName(@RequestPart PoliticalPartyRequestRegister entity , @RequestPart MultipartFile image) {
				Long partyId  = politicalPartyService.registerParty(entity);
				try {
					imageHandlingService.uploadPoliticalPartyImage(partyId, image);
				} catch (IOException e) {
					System.out.println("from political party"+e.getMessage());
					return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body( new ApiResponse("Not able to Add image in the database"));
				}
		return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("added political party in the database"));
	}
	
	@GetMapping("/tovalidate")
	public ResponseEntity<List<PoliticalPartyResponseDTO>> listAllPoliticalPartyToValidate() {
	    List<PoliticalPartyResponseDTO> parties = politicalPartyService.getAlLToValidate();
	    if (parties.isEmpty()) {
	        return ResponseEntity.noContent().build();  // Returns HTTP 204 if empty
	    }
	    return ResponseEntity.ok(parties);  // Returns HTTP 200 with the list
	}

	@GetMapping("/viewAllValid")
	public ResponseEntity<List<PoliticalPartyResponseDTO>>  listAllPoliticalParty() {
		List<PoliticalPartyResponseDTO> parties = politicalPartyService.getAllValidParty();
	    if (parties.isEmpty()) {
	        return ResponseEntity.noContent().build();  // Returns HTTP 204 if empty
	    }
	    return ResponseEntity.ok(parties);  // Returns HTTP 200 with the list
	}
	
	@GetMapping("/{pid}/{constid}")
	public ResponseEntity<List<PoliticalPartyResponseDTO>> getMethodName(@PathVariable Long pid, @PathVariable Long constid) {
		if(constid == -1) {
			
		}
		else {
			
		}
	}
	
	
}
