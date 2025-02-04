package com.voting.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@Table(name = "admins")
@NoArgsConstructor
@ToString
public class Admin extends BaseEntity{
	@Column(length = 255)
	private String name;
}
