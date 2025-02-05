package com.voting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.ConstituencyAddNew;
import com.voting.service.AdminService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {
		@Autowired
		private AdminService adminService;
	
		@PostMapping("/addconstituency")  
		public ResponseEntity<?> addConstituency( @RequestBody @Valid ConstituencyAddNew a){
			return ResponseEntity.ok(adminService.addNewConstituency(a));
		}
		
		@PatchMapping("/validatePoliticalParty/valid/{id}")
		public ResponseEntity<?> validatePoliticalParty(@RequestParam Long id){
			return null;
		}
		
		@PatchMapping("/validatePoliticalParty/invalid/{id}")
		public ResponseEntity<?> InvalidatePoliticalParty(@RequestParam Long id){
				return null;
		}
		
}
