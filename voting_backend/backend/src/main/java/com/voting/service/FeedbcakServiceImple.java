package com.voting.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voting.custom_exceptions.ResourceNotFoundException;
import com.voting.dao.FeedbackDao;
import com.voting.dtos.ApiResponse;
import com.voting.pojos.Feedback;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class FeedbcakServiceImple implements FeedbackService {

	@Autowired
	FeedbackDao feedbackDao;
	@Override
	public List<Feedback> getAll() {
		List<Feedback> list = feedbackDao.findByIsReviewedAndDeleted(false,false);
		return list;
	}
	@Override
	public ApiResponse markForReview(Long id) {
		Feedback f = feedbackDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("not able to find feedback id"));
		f.setReviewed(true);
		feedbackDao.save(f);
		return new ApiResponse("feedback marked for review ");
	}
	@Override
	public ApiResponse markFordelete(Long id) {
		Feedback f = feedbackDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("not able to find feedback id"));
		f.setDeleted(true);
		feedbackDao.save(f);
		return new ApiResponse("feedback deleted ");
	}
	
	
}
