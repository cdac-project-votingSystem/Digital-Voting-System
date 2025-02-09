package com.voting.dtos;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ApiResponse {
	private LocalDateTime timeStamp;
	private String message;
	private String token;
	public ApiResponse(String message) {
		this.message = message;
		this.timeStamp=LocalDateTime.now();
	}
	public ApiResponse(String message, String token) {
        this.message = message;
        this.token = token;
    }
	
}