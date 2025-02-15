package com.voting.controller;

import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.AuthenticationManager;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.FeedbackRequestDTO;
import com.voting.dtos.LoginDTO;
import com.voting.dtos.VoterRequestDTO;
import com.voting.dtos.VoterSignupDTO;
import com.voting.security.JwtUtils;
import com.voting.service.FeebackService;
import com.voting.service.VoterService;

import jakarta.validation.Valid;

//@CrossOrigin(origins = { 
//	    "http://localhost:3000", 
//	    "http://localhost:3001", 
//	    "http://localhost:3002", 
//	    "http://localhost:3003", 
//	    "http://localhost:3004", 
//	    "http://localhost:3005"
//	})
@RestController
public class HomeController {	
	@Autowired
	VoterService voterService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	FeebackService feedbackService;
	
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody @Valid VoterSignupDTO voterSignupDTO) {
        ApiResponse apiResponse = voterService.signup(voterSignupDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(apiResponse);
    }
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginDTO entity) {
		String email = entity.getEmail();
		String password = entity.getPassword();
		UsernamePasswordAuthenticationToken 
		authenticationToken = new UsernamePasswordAuthenticationToken(email, password);
		
		Authentication authToken = authenticationManager.authenticate(authenticationToken);
		
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(new ApiResponse("Successful Auth !" ,jwtUtils.generateJwtToken(authToken)));	
    }
	
	@PostMapping("/feedback")
	public ResponseEntity<ApiResponse> feedback(@RequestBody FeedbackRequestDTO feedbackRequest) {
        ApiResponse response = feedbackService.saveFeedback(feedbackRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
	
}
