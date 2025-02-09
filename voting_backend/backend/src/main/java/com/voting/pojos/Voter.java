package com.voting.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "voters")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Voter extends BaseEntity {
    
    @Column(name = "first_name", length = 255, nullable = false)
    private String firstName;

    @Column(name = "last_name", length = 255, nullable = false)
    private String lastName;

    @Column(name = "contact_number", length = 10, nullable = false, unique = true)
    private String contactNumber;

    @Column(name = "dob", nullable = false)
    private LocalDate dob;  

    @ManyToOne
    @JoinColumn(name = "constituency_id", nullable = false)
    private Constituency constituency;

    @Column(name = "has_voted", nullable = false)
    private boolean hasVoted = false;

    @Column(name = "adhaar_number", unique = true, nullable = false, length = 12)
    private String adhaarNumber;

    @CreationTimestamp
    @Column(name = "created_on", updatable = false)
    private LocalDate createdOn;

    @UpdateTimestamp
    @Column(name = "updated_on")
    private LocalDateTime updatedOn;
    
    @Enumerated(EnumType.STRING) // create column of type
	// varchar to store the name of constant
	@Column(length = 30) // varchar(30)
	private UserRole role = UserRole.ROLE_VOTER;
}
