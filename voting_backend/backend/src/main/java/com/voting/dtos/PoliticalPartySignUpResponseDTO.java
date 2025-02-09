package com.voting.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PoliticalPartySignUpResponseDTO {
	private Long partyId;
    private String partyName;
    private String abbreviation;
}
