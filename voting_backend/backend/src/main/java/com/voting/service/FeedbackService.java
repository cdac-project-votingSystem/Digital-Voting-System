package com.voting.service;

import java.util.List;

import com.voting.dtos.ApiResponse;
import com.voting.pojos.Feedback;

public interface FeedbackService {

	List<Feedback> getAll();

	ApiResponse markForReview(Long id);

	ApiResponse markFordelete(Long id);
	
	
}
