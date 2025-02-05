package com.voting.dtos;


import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class ConstituencyAddNew {
	@NotBlank(message = "constituency name must be not null and not blank!!!!")
    private String name;

	public ConstituencyAddNew(String name) {
		super();
		this.name = name;
	}
	
	
}
