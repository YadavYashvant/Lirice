package com.yashvant.lirice.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
//@Table(name = "roles")
public class Role {

	@Id
	private int id;
	
	private String name;
	
}
