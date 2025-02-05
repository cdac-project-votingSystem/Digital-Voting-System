package com.voting.dtos;

import java.time.LocalDateTime;

import com.voting.pojos.Constituency;

import jakarta.persistence.Column;

public class SetElectionAddNew {
	 	private int contituency_id;

	    private LocalDateTime electionStartTime;

	    private LocalDateTime electionEndTime;

		public SetElectionAddNew(int contituency_id, LocalDateTime electionStartTime, LocalDateTime electionEndTime) {
			super();
			this.contituency_id = contituency_id;
			this.electionStartTime = electionStartTime;
			this.electionEndTime = electionEndTime;
		}
	    
	    
	    
}
