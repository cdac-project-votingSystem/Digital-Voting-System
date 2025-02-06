package com.voting.dtos;

import com.voting.pojos.Constituency;

import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class VoterSignupDTO {
	    private String email;
	    private String password;
	    private String firstName;
	    private String lastName;
	    private String contactNumber;
	    private int constituencyId;
	    private boolean hasVoted = false;
	    private String adhaarNumber;
		public VoterSignupDTO(String email, String password, String firstName, String lastName, String contactNumber,
				int constituencyId, boolean hasVoted, String adhaarNumber) {
			super();
			this.email = email;
			this.password = password;
			this.firstName = firstName;
			this.lastName = lastName;
			this.contactNumber = contactNumber;
			this.constituencyId = constituencyId;
			this.hasVoted = hasVoted;
			this.adhaarNumber = adhaarNumber;
		}
		
    
}
