package com.voting.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CandidateVoteDTO {
	 private Long id;
	 private String name;
	 private String partyName;
	 private String image;
	 private String logo;
}
