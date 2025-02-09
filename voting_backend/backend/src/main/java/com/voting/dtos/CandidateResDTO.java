package com.voting.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CandidateResDTO {
	private Long id;
	private String name;
	private String partyName ; 
	private String constituencyName;
	private String partyAbb;
	private String image;
}
