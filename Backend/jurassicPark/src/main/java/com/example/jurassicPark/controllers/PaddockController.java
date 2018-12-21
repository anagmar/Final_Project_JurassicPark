package com.example.jurassicPark.controllers;

import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import com.example.jurassicPark.repository.paddockreposirtory.PaddockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/paddocks")
public class PaddockController {


    @Autowired
    PaddockRepository paddockRepository;


    @GetMapping(value = "/all")
    public List<Paddock> getAllPaddocks() {
        return paddockRepository.findAll();
    }
//
    //Index
    @GetMapping(value = "/{id}")
    public Optional<Paddock> getOnePaddock(@PathVariable Long id){
        return paddockRepository.findById(id);
    }

    @GetMapping(value = "/dinosaurs/{id}")
    public List<Dinosaur> getAllDinoarus(@PathVariable Long id){
        return paddockRepository.getAllDinosaursInPaddock(id);
    }

    @PostMapping
    public Paddock newPaddock(@Valid @RequestBody Paddock newPaddock ){
        return paddockRepository.save(newPaddock);
    }

    @DeleteMapping(value="/{id}")
    public void deletePaddock(@PathVariable Long id){
        Paddock paddock = paddockRepository.getOne(id);
        paddockRepository.delete(paddock);
    }

}
