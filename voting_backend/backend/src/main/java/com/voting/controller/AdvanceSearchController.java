package com.voting.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.voting.dtos.AdvanceSearchResponseDTO;
import com.voting.service.AdvanceSearchService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/advanceSearch")
public class AdvanceSearchController {
	
	
	//pid - political party id   cid - constituency id 
	@Autowired
	AdvanceSearchService advanceSearchService;
	
	
	@GetMapping("/{pid}/{cid}")
	public ResponseEntity<?> getMethodName(@PathVariable Long pid, Long cid ) {
		
		List<AdvanceSearchResponseDTO> res= advanceSearchService.getCandidate(pid,cid);
		return ResponseEntity.ok(res);
	}	
	
}
