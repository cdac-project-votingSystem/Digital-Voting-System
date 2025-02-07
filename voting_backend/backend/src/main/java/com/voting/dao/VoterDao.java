package com.voting.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.voting.pojos.Voter;

@Repository
public interface VoterDao extends JpaRepository<Voter, Long> {

	Optional<Voter> findByEmail(String email);
	Optional<Voter> findByAdhaarNumber(String adhaarNumber);
	
}
