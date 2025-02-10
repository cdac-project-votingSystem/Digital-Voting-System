package com.voting.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.voting.pojos.ResultDTO;
import com.voting.service.ResultService;

@RestController
@RequestMapping("/result")
public class ResultContoller {
	ResultService resultService;
	
	// name, party, image, votegain, constintrnecy_toal_votes, total_voteCast
	@GetMapping("/{cid}") // constinuency_id
	public List<ResultDTO> result(@PathVariable Long cid){
		return resultService.getElectionResultsByConstituency(cid);
	}
}
