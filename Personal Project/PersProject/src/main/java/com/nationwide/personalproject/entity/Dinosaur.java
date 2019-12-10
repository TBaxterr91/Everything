package com.nationwide.personalproject.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;


@Entity
public class Dinosaur {
	
	@Id
	@GeneratedValue
	private Integer id;


	public String nickname;
	private String species;
	private String diet;
	private String strength;
	private int lifespan;
	private String picture;

	public Dinosaur() {

	}
	
	public Dinosaur(String nickname, String species, String diet, String strength, int lifespan, String picture) {
		super();
		this.nickname = nickname;
		this.species = species;
		this.diet = diet;
		this.strength = strength;
		this.lifespan = lifespan;
		this.picture = picture;
	}
	
	public Dinosaur setAttributes(Dinosaur dinosaur) {
		this.species = dinosaur.species;
		this.diet = dinosaur.diet;
		this.strength = dinosaur.strength;
		this.lifespan = dinosaur.lifespan;
		this.picture = dinosaur.picture;
		return this;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getSpecies() {
		return species;
	}

	public void setSpecies(String species) {
		this.species = species;
	}

	public String getDiet() {
		return diet;
	}

	public void setDiet(String diet) {
		this.diet = diet;
	}
	public String getStrength() {
		return strength;
	}

	public void setStrength(String strength) {
		this.strength = strength;
	}

	public int getLifespan() {
		return lifespan;
	}

	public void setLifespan(int lifespan) {
		this.lifespan = lifespan;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}
	
}
