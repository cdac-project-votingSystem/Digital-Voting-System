package com.voting.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.voting.pojos.Constituency;
import com.voting.service.ConstituencyService;

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
