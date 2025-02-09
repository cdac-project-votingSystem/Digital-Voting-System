package com.voting.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.voting.dtos.CandidateRequestDTO;
import com.voting.dtos.CandidateResDTO;
import com.voting.dtos.ApiResponse;
import com.voting.service.CandidateService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/candidates")
public class CandidateController {

	 @Autowired
	 private CandidateService candidateService;

    @PostMapping( value =  "/add",consumes = "multipart/form-data")
    public ResponseEntity<ApiResponse> addCandidateToParty(@Valid @ModelAttribute CandidateRequestDTO candidateRequestDTO) throws IOException {
        ApiResponse response = candidateService.addCandidateToParty(candidateRequestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/toValidate")
    public List<CandidateResDTO> candidateToValidate() {
        return candidateService.viewAllToValidate();
       }
    
}

