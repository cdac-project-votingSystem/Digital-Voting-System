package com.voting.dtos;

import java.time.LocalDateTime;

import com.voting.pojos.Constituency;

import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SendElectionDetailsDTO {

	    private String Cname;

	    private LocalDateTime electionStartTime;

	    private LocalDateTime electionEndTime;
	
}
