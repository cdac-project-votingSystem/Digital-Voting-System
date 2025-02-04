package com.voting.pojos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "voters")
public class Voter extends Person {
    @Column(nullable = false)
    private boolean hasVoted = false;
}
