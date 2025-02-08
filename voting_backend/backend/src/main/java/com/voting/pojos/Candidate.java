package com.voting.pojos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "candidates")
public class Candidate {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "candidate_id")
	private Long candidateId;

	@OneToOne
	@JoinColumn(name = "voter_id", nullable = false)
	private Voter voter;

	@ManyToOne
	@JoinColumn(name = "political_party_id", nullable = false)
	private PoliticalParty politicalParty;
	
	@ManyToOne
	@JoinColumn(name = "constituency_id", nullable = false)
	private Constituency constituency;
	
	@Column(name = "is_valid")
	private int isValid =  0;
	
	@Column
	private int votes= 0;
	
	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private byte[] candidateImage;

	@Column(length = 1024)
	private String imagePath; 
	
}
