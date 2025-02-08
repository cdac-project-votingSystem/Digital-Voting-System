package com.voting.dtos;

import org.springframework.web.multipart.MultipartFile;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
public class PoliticalPartyRequestRegister {
	
    private String partyName;
    private String abbreviation;	    
    private String partyDescription;
    private MultipartFile partyLogo; // Image as MultipartFile

    public PoliticalPartyRequestRegister(String partyName, String abbreviation, String partyDescription, MultipartFile partyLogo) {
        this.partyName = partyName;
        this.abbreviation = abbreviation;
        this.partyDescription = partyDescription;
        this.partyLogo = partyLogo;
    }
}