package com.voting.dao;
import com.voting.pojos.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FeedbackDao extends JpaRepository<Feedback, Long> {
    List<Feedback> findByIsReviewedAndDeleted(boolean reviewed, boolean deleted);
}
