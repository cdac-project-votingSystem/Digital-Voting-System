package com.voting.pojos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "votes")
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    @ManyToOne
    @JoinColumn(name = "voter_id", nullable = false)
    private Voter voter; 

    @ManyToOne
    @JoinColumn(name = "candidate_id", nullable = false)
    private Candidate candidate; 

    @ManyToOne
    @JoinColumn(name = "election_id", nullable = false)
    private Election election; 

    private LocalDateTime timestamp = LocalDateTime.now(); 
}




