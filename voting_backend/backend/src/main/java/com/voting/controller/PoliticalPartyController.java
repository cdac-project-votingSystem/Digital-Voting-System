package com.voting.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.voting.dtos.PoliticalPartyRequestRegister;
import com.voting.dtos.PoliticalPartyResponseDTO;
import com.voting.service.PoliticalPartyService;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/politicalParty")
public class PoliticalPartyController {

	@Autowired
	PoliticalPartyService politicalPartyService;
	
	@PostMapping("/register")
	public String postMethodName(@RequestPart PoliticalPartyRequestRegister entity , @RequestPart MultipartFile image) {
		//TODO: process POST request
		
		return null;
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
