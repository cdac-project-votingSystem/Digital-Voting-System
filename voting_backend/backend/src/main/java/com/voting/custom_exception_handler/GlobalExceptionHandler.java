package com.voting.custom_exception_handler;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.voting.custom_exceptions.ResourceNotFoundException;
import com.voting.dtos.ApiResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

	// handle MethodArgumentNotValidException
		
	@ExceptionHandler(MethodArgumentNotValidException.class)
		public ResponseEntity<?> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
			System.out.println("in method arg invalid " + e);
			List<FieldError> fieldErrors = e.getFieldErrors();// list of fields having validation errs
			Map<String, String> map = fieldErrors.stream()
					.collect(Collectors.toMap
							(FieldError::getField, FieldError::getDefaultMessage));
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(map);
		}

		
		// handle : ResourceNotFoundException
	@ExceptionHandler(ResourceNotFoundException.class)
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	public ApiResponse handleResourceNotFoundException(ResourceNotFoundException e) {
	    return new ApiResponse(e.getMessage());
	}


		
		// handle any other remaining exc => catch all
		@ExceptionHandler(RuntimeException.class)
		@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
		public ApiResponse handleAnyException(RuntimeException e) {
			System.out.println("in catch-all " + e);
			return new ApiResponse(e.getMessage());
		}
}
