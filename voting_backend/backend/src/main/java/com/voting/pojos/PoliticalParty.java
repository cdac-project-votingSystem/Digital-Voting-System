package com.voting.pojos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "political_parties")
@NoArgsConstructor
@ToString
public class PoliticalParty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "party_id")
    private Long partyId;

    @Column(name = "party_name",nullable = false, unique = true,length = 255)
    private String partyName;

    @Column(name = "abbreviation",nullable = false,unique = true,length = 6)
    private String abbreviation;
    
    @Column(name = "party_description",length = 500)
    private String partyDescription;
    
    
    @Column(name ="is_valid")
    private int isValid = 0;
    
    @Lob
    @Column(name = "party_logo")
    private byte[] partyLogo;
  
}

