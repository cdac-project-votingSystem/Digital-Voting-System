package com.voting.dtos;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;

import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CandidateRequestDTO {
    @NotBlank(message = "AadharCard Number cannot be null")
    private String adhaarNumber;

    @NotNull(message = "Political Party ID cannot be null")
    private int politicalPartyId;

    @NotNull(message = "Constituency ID cannot be null")
    private int constituencyId;
    
    private MultipartFile image;
    
}


