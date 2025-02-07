package com.voting.dtos;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
public class PoliticalPartyRequestUpdate {

    @NotBlank(message = "Party name cannot be empty")
    @Size(min = 2, max = 100, message = "Party name must be between 2 and 100 characters")
    private String partyName;

    @NotBlank(message = "Abbreviation cannot be empty")
    @Size(min = 1, max = 10, message = "Abbreviation must be between 1 and 10 characters")
    private String abbreviation;

    @Size(max = 500, message = "Party description should not exceed 500 characters")
    private String partyDescription;

    
    public PoliticalPartyRequestUpdate(String partyName, String abbreviation, String partyDescription, byte[] partyLogo) {
        this.partyName = partyName;
        this.abbreviation = abbreviation;
        this.partyDescription = partyDescription;
    }
}
