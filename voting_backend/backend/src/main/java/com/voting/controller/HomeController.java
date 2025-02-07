package com.voting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.FeedbackRequestDTO;
import com.voting.dtos.VoterSignupDTO;
import com.voting.service.FeebackService;
import com.voting.service.VoterService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HomeController {	
	@Autowired
	VoterService voterService;
	
	@Autowired
	FeebackService feedbackService;
	
	@PostMapping("/signup")
<<<<<<< HEAD
	public ResponseEntity<?> postMethodName(@RequestBody @Valid VoterSignupDTO entity) {
=======
	public ResponseEntity<ApiResponse> signup(@RequestBody VoterSignupDTO voterSignupDTO) {
        ApiResponse apiResponse = voterService.signup(voterSignupDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(apiResponse);
    }
	
	@PostMapping("/login")
	public ResponseEntity<ApiResponse> login(
	        @RequestParam String email,
	        @RequestParam String password) {
>>>>>>> v2
		
		ApiResponse apiResponse = voterService.login(email, password);

        HttpStatus status = apiResponse.getMessage().equals("Login Successful!") ?
                            HttpStatus.OK : HttpStatus.UNAUTHORIZED;

        return ResponseEntity.status(status).body(apiResponse);
		
	}
	
	@PostMapping("/feedback")
	public ResponseEntity<ApiResponse> feedback(@RequestBody FeedbackRequestDTO feedbackRequest) {
        ApiResponse response = feedbackService.saveFeedback(feedbackRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
	
}
