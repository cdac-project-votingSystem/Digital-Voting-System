package com.voting.dtos;

public class HasVotedResponseDTO {
    private boolean hasVoted;

    public HasVotedResponseDTO(boolean hasVoted) {
        this.hasVoted = hasVoted;
    }

    public boolean isHasVoted() {
        return hasVoted;
    }

    public void setHasVoted(boolean hasVoted) {
        this.hasVoted = hasVoted;
    }
}
