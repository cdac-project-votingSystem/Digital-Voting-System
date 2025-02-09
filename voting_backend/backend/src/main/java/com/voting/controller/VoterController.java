package com.voting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.HasVotedResponseDTO;
import com.voting.dtos.VoterRequestDTO;
import com.voting.dtos.VoterResponseDTO;
import com.voting.dtos.VoterSignupDTO;
import com.voting.service.VoterService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import jakarta.validation.Valid;

//@CrossOrigin("*")
@RestController
@RequestMapping("/voters")
public class VoterController {
	@Autowired
	VoterService voterService;
	
	@GetMapping("/{voterId}")
	public ResponseEntity<VoterResponseDTO> getVoterById(@PathVariable Long voterId) {
	    VoterResponseDTO voter = voterService.getVoterById(voterId);
	    if (voter == null) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
	    }
	    return ResponseEntity.ok(voter);
	}
	
	@PutMapping("/{voterId}")
	public ResponseEntity<ApiResponse> updateVoter(
	        @PathVariable Long voterId,
	        @RequestBody VoterRequestDTO voterRequestDTO) {
	    boolean updated = voterService.updateVoter(voterId, voterRequestDTO);
	    if (!updated) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND)
	                             .body(new ApiResponse("Voter not found"));
	    }
	    return ResponseEntity.ok(new ApiResponse("Voter details updated successfully"));
	}

	
	@PostMapping("/resetPassword")
	public ResponseEntity<ApiResponse> resetPassword(
	        @RequestParam String email,
	        @RequestParam String newPassword) {
	    boolean reset = voterService.resetPassword(email, newPassword);
	    if (!reset) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
	                             .body(new ApiResponse("Password reset failed"));
	    }
	    return ResponseEntity.ok(new ApiResponse("Password reset successfully"));
	}
	
	
	// write an api for hasVoted which returns wheater voter has voted and implment cast to voter
	
	@GetMapping("/{voterId}/hasVoted")
    public ResponseEntity<HasVotedResponseDTO> hasVoted(@PathVariable Long voterId) {
        boolean hasVoted = voterService.hasVoted(voterId);
        return ResponseEntity.ok(new HasVotedResponseDTO(hasVoted));
    }
	
	@PatchMapping("/{voterId}/vote")
    public ResponseEntity<ApiResponse> castVote(
            @PathVariable Long voterId,
            @RequestParam Long candidateId) {

        boolean success = voterService.castVote(voterId, candidateId);
        if (!success) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse("Voting failed. Voter has already voted or invalid details."));
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ApiResponse("Vote cast successfully"));
    }
	
}
