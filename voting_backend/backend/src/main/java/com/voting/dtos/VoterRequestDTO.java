package com.voting.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class VoterRequestDTO {
    private String firstName;
    private String lastName;
    private String contactNumber;
    private LocalDate dob;
    private int constituencyId;
    private String adhaarNumber;
}

