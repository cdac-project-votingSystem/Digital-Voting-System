package com.voting.dtos;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

public class PoliticalPartyRequestRegister {
	
	  	private String partyName;
	    private String abbreviation;	    
	    private String partyDescription;
		public PoliticalPartyRequestRegister(String partyName, String abbreviation, String partyDescription) {
			super();
			this.partyName = partyName;
			this.abbreviation = abbreviation;
			this.partyDescription = partyDescription;
		}
}
