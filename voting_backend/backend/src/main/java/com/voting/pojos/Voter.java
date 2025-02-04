package com.voting.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@Table(name = "voters")
@NoArgsConstructor
@ToString
public class Voter extends BaseEntity {
	
	@Column(name="first_name",length = 255)
    private String firstName;
	
	@Column(name = "last_name",length = 255)
	private String lastName;
 
	
    @Column(name = "contact_number",length = 10)
    private String contactNumber;

    @ManyToOne
    @JoinColumn(name = "constituency_id", nullable = false)
    private Constituency constituency;
    
    @Column(nullable = false)
    private boolean hasVoted = false;
    
    
    @Column(name = "adhaar_number", unique = true, nullable = false, length = 12)
    private String adhaarNumber;
    
	@CreationTimestamp
	@Column(name="created_on")
	private LocalDate createdOn;
	
	@UpdateTimestamp
	@Column(name="updated_on")
	private LocalDateTime updatedOn;
    
}
