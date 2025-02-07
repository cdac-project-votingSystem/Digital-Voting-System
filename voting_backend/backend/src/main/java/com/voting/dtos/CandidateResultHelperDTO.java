package com.voting.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CandidateResultHelperDTO {

	private String candidateName;
	private String politicalParty;
	private int votes;
	public CandidateResultHelperDTO(String candidateName, String politicalParty, int votes) {
		super();
		this.candidateName = candidateName;
		this.politicalParty = politicalParty;
		this.votes = votes;
	}
}
