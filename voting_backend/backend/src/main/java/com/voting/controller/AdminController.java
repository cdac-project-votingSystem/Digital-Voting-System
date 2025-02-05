package com.voting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.ConstituencyAddNew;
import com.voting.dtos.PublishElectionResponseDTO;
import com.voting.dtos.SetElectionAddNew;
import com.voting.service.AdminService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {
		@Autowired
		private AdminService adminService;
	
		// For Add Constituency (Success)
		@PostMapping("/addConstituency")  
		public ResponseEntity<?> addConstituency(@RequestBody @Valid ConstituencyAddNew a){
		    return ResponseEntity.status(HttpStatus.CREATED).body(adminService.addNewConstituency(a));
		}

		// For Validate Political Party (Success)
		@PatchMapping("/validatePoliticalParty/valid/{id}")
		public ResponseEntity<?> validatePoliticalParty(@RequestParam Long id){
		    return ResponseEntity.status(HttpStatus.NO_CONTENT).body(adminService.validPoliticalParty(id));
		}

		// For Invalidate Political Party (Success)
		@PatchMapping("/validatePoliticalParty/invalid/{id}")
		public ResponseEntity<?> InvalidatePoliticalParty(@RequestParam Long id){
		    return ResponseEntity.status(HttpStatus.NO_CONTENT).body(adminService.invalidPoliticalParty(id));
		}

		// For Validate Candidate (Success)
		@PatchMapping("/validateCandidate/valid/{id}")
		public ResponseEntity<?> validateCandidate(@RequestParam Long id){
		    return ResponseEntity.status(HttpStatus.NO_CONTENT).body(adminService.validCandidate(id));
		}

		// For Invalidate Candidate (Success)
		@PatchMapping("/invalidateCandidate/valid/{id}")
		public ResponseEntity<?> invalidateCandidate(@RequestParam Long id){
		    return ResponseEntity.status(HttpStatus.NO_CONTENT).body(adminService.invalidCandidate(id));
		}

		// For Set Election (Success)
		@PostMapping("/setElection")
		public ResponseEntity<?> setElection(@RequestBody SetElectionAddNew entity) {
		    return ResponseEntity.status(HttpStatus.CREATED).body(adminService.setElectionDate(entity));
		}

		// For Publish Election Result (Success)
		@GetMapping("/publishResult/{id}")
		public ResponseEntity<PublishElectionResponseDTO> publishElectionResult(@RequestParam Long id) {
		    PublishElectionResponseDTO response = adminService.publishResult(id);
		    return ResponseEntity.ok(response);
		}


		
		
}
