package com.voting.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.voting.pojos.Feedback;
import com.voting.service.FeedbackService;

<<<<<<< HEAD
//@CrossOrigin(origins = { 
//	    "http://localhost:3000", 
//	    "http://localhost:3001", 
//	    "http://localhost:3002", 
//	    "http://localhost:3003", 
//	    "http://localhost:3004", 
//	    "http://localhost:3005"
//	})
=======

>>>>>>> v4
@RestController
@RequestMapping("/feedback")
public class FeedBackController {

	@Autowired
	FeedbackService feedbackService;
	
	@GetMapping("/allUnread")
	public List<Feedback> getAllUnread(){
		return feedbackService.getAll();
		
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<?> markAsReview(@PathVariable Long id){
		return ResponseEntity.ok(feedbackService.markForReview(id));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> markForDelete(@PathVariable Long id){
		return ResponseEntity.ok(feedbackService.markFordelete(id));
	}
}
