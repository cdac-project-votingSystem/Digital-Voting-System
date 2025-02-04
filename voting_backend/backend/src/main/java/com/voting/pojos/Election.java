package com.voting.pojos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "elections")
public class Election {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long electionId; 

    @Column(nullable = false)
    private String electionName; 

    private int year; 

    private String state; 

    private String status; // Status: Upcoming, Ongoing, Completed

    @OneToMany(mappedBy = "election", cascade = CascadeType.ALL)
    private List<Vote> votes; // One-to-Many: Election has multiple votes
}

