package com.voting.dtos;

import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PoliticalPartyResponseDTO {
	    private Long partyId;

	    private String partyName;
	    
	    private String abbreviation;
	    
	    private String partyDescription;
	    
	    private String partyLogo;

	    
}
