package com.voting.pojos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResultDTO {
    private String candidateName;
    private String partyName;
    private String image; //Base64 String
    private int voteGain;
    private int constituencyTotalVotes;
    private int totalVoteCast;
}

