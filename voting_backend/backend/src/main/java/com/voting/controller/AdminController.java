package com.voting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.voting.dtos.ApiResponse;
import com.voting.dtos.ConstituencyAddNew;
import com.voting.service.AdminService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/admin")
public class AdminController {
		@Autowired
		private AdminService adminService;
	
		@PostMapping("/addconstituency")  
		public ResponseEntity<?> addConstituency( @RequestBody @Valid ConstituencyAddNew a){
			return ResponseEntity.ok(adminService.addNewConstituency(a));
	}
}
