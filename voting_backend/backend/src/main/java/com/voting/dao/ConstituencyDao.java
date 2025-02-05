package com.voting.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.voting.pojos.Constituency;

@Repository
public interface ConstituencyDao extends JpaRepository<Constituency,Long> {

}
