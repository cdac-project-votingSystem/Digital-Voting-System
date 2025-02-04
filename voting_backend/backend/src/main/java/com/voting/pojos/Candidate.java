package com.voting.pojos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "candidates")
public class Candidate extends Person {
    @ManyToOne
    @JoinColumn(name = "political_party_id", nullable = false)
    private PoliticalParty politicalParty;

    @Column(nullable = false)
    private int voteCount = 0; 
}
