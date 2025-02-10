package com.voting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.PublishElectionResponseDTO;
import com.voting.dtos.SendElectionDetailsDTO;
import com.voting.service.ElectionService;

//@CrossOrigin(origins = { 
//	    "http://localhost:3000", 
//	    "http://localhost:3001", 
//	    "http://localhost:3002", 
//	    "http://localhost:3003", 
//	    "http://localhost:3004", 
//	    "http://localhost:3005"
//	})
@RestController
@RequestMapping("/election")
public class ElectionController {
	
	@Autowired
	ElectionService electionService;
	
	// For Publish Election Result (Success)
			@GetMapping("/result/{id}")
			public ResponseEntity<PublishElectionResponseDTO> publishElectionResult(@RequestParam Long id) {
			    PublishElectionResponseDTO response = electionService.publishResult(id);
			    return ResponseEntity.ok(response);
			}
			  
		@GetMapping("/election/{cid}")
		public SendElectionDetailsDTO getMethodName(@PathVariable Long cid) {
			return electionService.getDetails(cid);
		}
		
}
