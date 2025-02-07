package com.voting.pojos;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "voters")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Voter extends BaseEntity {
    
    @Column(name = "first_name", length = 255, nullable = false)
    private String firstName;
<<<<<<< HEAD
	
	@Column(name = "last_name",length = 255)
	private String lastName;
 
	private LocalDate dob;
	
    @Column(name = "contact_number",length = 10)
=======

    @Column(name = "last_name", length = 255, nullable = false)
    private String lastName;

    @Column(name = "contact_number", length = 10, nullable = false, unique = true)
>>>>>>> v2
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
}
