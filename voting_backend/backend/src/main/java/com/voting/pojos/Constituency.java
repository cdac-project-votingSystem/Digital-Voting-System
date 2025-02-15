package com.voting.pojos;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "constituencies")
@NoArgsConstructor
	public class Constituency {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	
	    @Column(name = "constituency_name", nullable = false, unique = true, length = 255)
	    private String name;
	
	    @Column
	    private int totalVoters=0;  
	
	    @Column(name = "votes_casted")
	    private int votesCast = 0;  
	}
