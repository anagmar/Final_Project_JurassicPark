package com.example.jurassicPark.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "dinosaurs")
public class Dinosaur implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "species")
    private String species;

    @Column(name = "diet")
    private String diet;

    @JsonIgnore
    @ManyToOne
    @JoinColumn (name = "paddock_id", nullable = false)
    private Paddock paddock;

    public Dinosaur(String name, String species, String diet, Paddock paddock){
        this.name = name.toLowerCase();
        this.species = species.toLowerCase();
        this.diet = diet;
        this.paddock = paddock;
    }

    public Dinosaur(){

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Paddock getPaddock() {
        return paddock;
    }

    public void setPaddock(Paddock paddock) {
        this.paddock = paddock;
    }



}
