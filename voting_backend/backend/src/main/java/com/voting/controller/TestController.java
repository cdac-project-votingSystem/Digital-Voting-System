package com.voting.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class TestController {
	@GetMapping("/test")
	public List<Integer> test() {
		return List.of(1, 2, 3,4);
	}
}
