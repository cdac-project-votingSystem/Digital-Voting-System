package com.voting.dao;
import com.voting.pojos.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackDao extends JpaRepository<Feedback, Long>{

}
