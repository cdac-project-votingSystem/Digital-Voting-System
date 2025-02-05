package com.voting.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.voting.pojos.Candidate;

@Repository
public interface CandidateDao extends JpaRepository<Candidate, Long> {
	
}
