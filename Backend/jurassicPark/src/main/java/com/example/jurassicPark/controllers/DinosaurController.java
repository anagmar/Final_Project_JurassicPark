package com.example.jurassicPark.controllers;

import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import com.example.jurassicPark.repository.dinosaurrepository.DinosaurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/dinosaurs")
public class DinosaurController {

    @Autowired
    DinosaurRepository dinosaurRepository;


   //All
    @GetMapping(value = "/all")
    public List<Dinosaur> getAllDinosaurs(){
        return dinosaurRepository.findAll();
    }

    //Index
    @GetMapping (value = "/{id}")
    public Optional<Dinosaur> getDinosaurById(@PathVariable Long id){
        return dinosaurRepository.findById(id);
    }

    //Dinosaur by Species
    @GetMapping(value = "/species/{species}")
    public List<Dinosaur> getDinosaurBySpecies(@PathVariable String species){
        return dinosaurRepository.getDinosaurBySpecies(species);
    }

    //Dinosaur By Diet
    @GetMapping(value = "/diet/{diet}")
    public List<Dinosaur> getDinosaurByDiet(@PathVariable String diet){
        return dinosaurRepository.getDinosaurByDiet(diet);
    }

    //Dinosaur By Paddock
    @GetMapping(value = "/paddock/{id}")
    public List<Paddock> dinosaursPaddock(@PathVariable Long id){
        return dinosaurRepository.getDinosaursPaddock(id);
    }

//    @PostMapping
//    public void newDinosaur(@RequestBody Dinosaur newDinosaur ){
//        dinosaurRepository.save(newDinosaur);
//    }



}
