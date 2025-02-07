package com.voting.dtos;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VoterResponseDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String contactNumber;
    private LocalDate dob;
    private String adhaarNumber;
    private String constituencyName;
    private boolean hasVoted;
}

