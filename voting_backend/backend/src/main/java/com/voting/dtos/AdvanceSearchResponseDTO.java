package com.voting.dtos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.voting.pojos.Constituency;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AdvanceSearchResponseDTO {
	
	private String partyName;
    private String abbreviation;
    private byte[] partyLogo;
    
//    @Column(name = "constituency_name", nullable = false, unique = true, length = 255) //oroginally name in pojo
    private String constituencyName;
    
    private String firstName;
	private String lastName;
	private byte[] candidateImage;
}
