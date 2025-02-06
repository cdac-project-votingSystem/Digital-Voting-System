package com.voting.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.voting.pojos.PoliticalParty;

@Repository
public interface PoliticalPartyDao extends JpaRepository<PoliticalParty, Long> {
	
	List<PoliticalParty> findByIsValid(int number);
	
}
