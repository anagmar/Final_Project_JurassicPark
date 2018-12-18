package com.example.jurassicPark.controllers;

import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import com.example.jurassicPark.repository.dinosaurrepository.DinosaurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/")
public class DinosaurController {

    @Autowired
    DinosaurRepository dinosaurRepository;

   //All
    @GetMapping(value = "/dinosaurs")
    public List<Dinosaur> getAllDinosaurs(){
        return dinosaurRepository.findAll();
    }

    //Index
    @GetMapping (value = "/dinosaurs/{id}")
    public Optional<Dinosaur> getDinosaurById(@PathVariable Long id){
        return dinosaurRepository.findById(id);
    }

    //Dinosaur by Species
    @GetMapping(value = "/dinosaurs/species/{species}")
    public List<Dinosaur> getDinosaurBySpecies(@PathVariable String species){
        return dinosaurRepository.getDinosaurBySpecies(species);
    }

    //Dinosaur By Diet
    @GetMapping(value = "/dinosaurs/diet/{diet}")
    public List<Dinosaur> getDinosaurByDiet(@PathVariable String diet){
        return dinosaurRepository.getDinosaurByDiet(diet);
    }

    //Dinosaur By Paddock
    @GetMapping(value = "/dinosaurs/{id}/paddock")
    public List<Paddock> dinosaursPaddock(@PathVariable Long id){
        return dinosaurRepository.getDinosaursPaddock(id);
    }




}
