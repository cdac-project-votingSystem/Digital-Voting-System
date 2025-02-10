package com.voting.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VotingDTO {
	private String partyName;
    private String abbreviation;
    private String partyLogo;
    private Long id;
    private String firstName;
	private String lastName;
	private String candidateImage;
}
