package com.voting.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voting.dao.FeedbackDao;
import com.voting.dtos.ApiResponse;
import com.voting.dtos.FeedbackRequestDTO;
import com.voting.pojos.Feedback;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class FeebackService {
	@Autowired
    private FeedbackDao feedbackDao;  // Using FeedbackDao instead of Repository

    @Autowired
    private ModelMapper modelMapper;  
    
    public ApiResponse saveFeedback(FeedbackRequestDTO feedbackRequest) {
        Feedback feedback = modelMapper.map(feedbackRequest, Feedback.class);
        feedback.setDeleted(false); 
        feedbackDao.save(feedback);
        
        return new ApiResponse("Feedback submitted successfully!");
    }
}
