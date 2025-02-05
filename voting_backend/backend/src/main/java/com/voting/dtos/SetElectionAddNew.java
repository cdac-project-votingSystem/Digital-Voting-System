package com.voting.dtos;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SetElectionAddNew {
    private int constituencyId;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime electionStartTime;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime electionEndTime;

    public SetElectionAddNew(int constituencyId, LocalDateTime electionStartTime, LocalDateTime electionEndTime) {
        this.constituencyId = constituencyId;
        this.electionStartTime = electionStartTime;
        this.electionEndTime = electionEndTime;
    }
}
