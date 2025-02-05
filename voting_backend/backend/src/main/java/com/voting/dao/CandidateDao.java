package com.voting.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.voting.pojos.Candidate;
import com.voting.pojos.Constituency;

@Repository
public interface CandidateDao extends JpaRepository<Candidate, Long> {
	List<Candidate> findAllByConstituency_Id(Long constituencyId);
}
