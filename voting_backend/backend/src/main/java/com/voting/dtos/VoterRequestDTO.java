package com.voting.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class VoterRequestDTO {

    @NotBlank(message = "First name is required")
    @Size(max = 255, message = "First name must be less than 255 characters")
    private String firstName;

    @NotBlank(message = "Last name is required")
    @Size(max = 255, message = "Last name must be less than 255 characters")
    private String lastName;

    @NotBlank(message = "Contact number is required")
    @Size(min = 10, max = 10, message = "Contact number must be 10 digits")
    private String contactNumber;

    @NotNull(message = "Date of birth is required")
    @Past(message = "Date of birth must be in the past")
    private LocalDate dob;

    @NotNull(message = "Constituency ID is required")
    private Long constituencyId;

    @NotBlank(message = "Aadhaar number is required")
    @Size(min = 12, max = 12, message = "Aadhaar number must be 12 digits")
    private String adhaarNumber;
}

