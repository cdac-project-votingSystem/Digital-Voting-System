package com.voting.dtos;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PoliticalPartyResponseDTO {
	    private Long partyId;

	    private String partyName;
	    
	    private String abbreviation;
	    
	    private String partyDescription;
	    
	    private byte[] partyLogo;

		public PoliticalPartyResponseDTO(Long partyId, String partyName, String abbreviation,
				String partyDescription, byte[] partyLogo) {
			super();
			this.partyId = partyId;
			this.partyName = partyName;
			this.abbreviation = abbreviation;
			this.partyDescription = partyDescription;
			this.partyLogo = partyLogo;
		}

	    
}
