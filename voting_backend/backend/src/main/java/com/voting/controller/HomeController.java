package com.voting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.VoterSignupDTO;
import com.voting.service.VoterService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HomeController {	
	@Autowired
	VoterService voterService;
	
	@PostMapping("/signup")
	public ResponseEntity<?> postMethodName(@RequestBody @Valid VoterSignupDTO entity) {
		
		ApiResponse res =  voterService.signup(entity);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(res); 
	}
	
}
