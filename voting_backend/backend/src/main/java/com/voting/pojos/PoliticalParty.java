package com.voting.pojos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "political_parties")
public class PoliticalParty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long politicalPartyId;

    @Column(nullable = false, unique = true)
    private String partyName;

    private String leaderName;
    private String foundedDate;
    @Column(name = "symbol", columnDefinition = "LONGBLOB")
    private byte[] symbol;
    

    @OneToMany(mappedBy = "politicalParty", cascade = CascadeType.ALL)
    private List<Candidate> candidates;
}

