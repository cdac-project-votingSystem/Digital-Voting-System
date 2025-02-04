package com.voting.pojos;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@MappedSuperclass
public class Person {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long personId;

    private String name;
    private int age;
    private String email;
    private String password;
    private String address;
    private String contactNumber;
}
