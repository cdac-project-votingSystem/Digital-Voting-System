package com.voting.pojos;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@MappedSuperclass
@ToString
public class BaseEntity {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
    @Column( unique = true ,length = 255,nullable = false)
    private String email;
    
    @Column(length = 255,nullable = false)
    private String password;
   
}
