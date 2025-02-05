package com.voting.dtos;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PublishElectionResponseDTO {
	
	private String constituencyName;
	private int totalVoter;
	private int votesCasted;
	private List<CandidateResultHelperDTO> res;
	public PublishElectionResponseDTO(String constituencyName, int totalVoter, int votesCasted,
			List<CandidateResultHelperDTO> res) {
		super();
		this.constituencyName = constituencyName;
		this.totalVoter = totalVoter;
		this.votesCasted = votesCasted;
		this.res = res;
	}
	
	
}
