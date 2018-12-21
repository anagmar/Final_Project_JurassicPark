package com.example.jurassicPark.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "paddocks")
public class Paddock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "dinosaurs")
    private ArrayList<Dinosaur> dinosaurs;

    @Column(name = "type")
    private PaddockType type;


    public Paddock(String name, PaddockType type ){
        this.name = name.toLowerCase();
        this.dinosaurs = new ArrayList<>();
        this.type = type;

    }


    public Paddock(){

    }

    public void setDinosaurs(ArrayList<Dinosaur> dinosaurs) {
        this.dinosaurs = dinosaurs;
    }

    public PaddockType getType() {
        return type;
    }

    public void setType(PaddockType type) {
        this.type = type;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

//    public ArrayList<Dinosaur> getDinosaurs() {
//        return dinosaurs;
//    }
//
//    public void addDinosaur(Dinosaur dinosaur){
//        dinosaurs.add(dinosaur);
//    }

}
