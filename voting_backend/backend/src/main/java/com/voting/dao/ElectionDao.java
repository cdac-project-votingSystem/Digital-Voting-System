package com.voting.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.voting.pojos.Election;

public interface ElectionDao extends JpaRepository<Election, Long> {
	
	Optional<Election> findByConstituency_Id(Long id);
}
