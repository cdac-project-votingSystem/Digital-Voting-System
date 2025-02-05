package com.voting.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.voting.pojos.Election;

public interface ElectionDao extends JpaRepository<Election, Long> {

}
