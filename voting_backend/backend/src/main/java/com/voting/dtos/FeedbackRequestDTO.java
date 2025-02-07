package com.voting.dtos;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackRequestDTO {
    private String email;
    private String fullName;
    private String title;
    private String description;
}
