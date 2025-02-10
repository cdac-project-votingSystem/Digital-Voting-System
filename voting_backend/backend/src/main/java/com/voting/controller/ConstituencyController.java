package com.voting.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.voting.pojos.Constituency;
import com.voting.service.ConstituencyService;
//
//@CrossOrigin(origins = { 
//	    "http://localhost:3000", 
//	    "http://localhost:3001", 
//	    "http://localhost:3002", 
//	    "http://localhost:3003", 
//	    "http://localhost:3004", 
//	    "http://localhost:3005"
//	})
@RestController
@RequestMapping("/constituency")
public class ConstituencyController {
	
	@Autowired
	ConstituencyService constituencyService;
	
	@GetMapping("/viewAll")
	public List<Constituency> getMethodName() {
		return constituencyService.getAllConstituency();
	}
	
}
