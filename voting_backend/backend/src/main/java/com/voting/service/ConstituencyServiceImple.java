package com.voting.service; 

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voting.dao.ConstituencyDao;
import com.voting.pojos.Constituency;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ConstituencyServiceImple implements ConstituencyService {

	@Autowired
	ConstituencyDao constituencyDao;
	
	@Override
	public List<Constituency> getAllConstituency(){ 
		return constituencyDao.findAll();
		
	}
}
