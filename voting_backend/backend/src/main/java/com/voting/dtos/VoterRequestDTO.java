package com.voting.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VoterRequestDTO {
    private String firstName;
    private String lastName;
    private String contactNumber;
    private LocalDate dob;
    private int constituencyId;
    private String adhaarNumber;
}

