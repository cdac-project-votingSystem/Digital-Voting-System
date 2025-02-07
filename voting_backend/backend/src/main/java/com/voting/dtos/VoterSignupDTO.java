package com.voting.dtos;

import java.sql.Date;
import java.time.LocalDate;

import com.voting.pojos.Constituency;

import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VoterSignupDTO {
    
    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;
    
    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;
    
    @NotBlank(message = "First name is required")
    private String firstName;
    
    @NotBlank(message = "Last name is required")
    private String lastName;
    
    @Past(message = "Date of Birth must be in the past")
    private LocalDate dob;
    
    @Pattern(regexp = "^[0-9]{10}$", message = "Invalid contact number")
    private String contactNumber;
    
    @Min(value = 1, message = "Invalid constituency ID")
    private int constituencyId;
    
    @Pattern(regexp = "^[0-9]{12}$", message = "Adhaar number must be 12 digits")
    private String adhaarNumber;
}
