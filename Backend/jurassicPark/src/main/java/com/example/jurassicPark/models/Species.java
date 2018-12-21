package com.example.jurassicPark.models;

public enum Species {

    apatosarus("herbivore"),
    velociraptor("carnivore"),
    triceratops("herbivore"),
    parasaurolopus("herbivore"),
    Tyrannosaurus("carnivore");

    private final String diet;

    Species(String diet){
        this.diet = diet;
    }

    public String getDiet(){
        return diet;
    }
}
