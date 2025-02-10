package com.voting.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.voting.pojos.Candidate;
import com.voting.pojos.Constituency;
import com.voting.pojos.PoliticalParty;

@Repository
public interface CandidateDao extends JpaRepository<Candidate, Long> {
	List<Candidate> findAllByConstituency_Id(Long constituencyId);
	List<Candidate> findByConstituencyAndPoliticalParty(Constituency constituency, PoliticalParty politicalParty);
	List<Candidate> findByPoliticalParty_PartyId(Long id);
	List<Candidate> findByPoliticalParty_PartyIdAndConstituency_Id(Long pid, Long cid);
	List<Candidate> findByIsValid(int i);
	List<Candidate> findByConstituencyId(Long constituencyId);

}