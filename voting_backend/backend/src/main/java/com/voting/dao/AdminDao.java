package com.voting.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.voting.pojos.Admin;

@Repository
public interface AdminDao extends JpaRepository<Admin, Long> {

}
