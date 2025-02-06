package com.voting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.voting.dtos.PublishElectionResponseDTO;
import com.voting.service.ElectionService;

@CrossOrigin(origins = "http://localhost:3000")
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
			  
}
