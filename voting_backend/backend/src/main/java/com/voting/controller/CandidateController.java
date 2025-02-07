package com.voting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.voting.dtos.CandidateRequestDTO;
import com.voting.dtos.ApiResponse;
import com.voting.service.CandidateService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/candidates")
public class CandidateController {

	 @Autowired
	 private CandidateService candidateService;

    // ✅ Add Candidate to Party (Using Aadhar Number)
    @PostMapping("/add")
    public ResponseEntity<ApiResponse> addCandidateToParty(@Valid @RequestBody CandidateRequestDTO candidateRequestDTO) {
        ApiResponse response = candidateService.addCandidateToParty(candidateRequestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}

