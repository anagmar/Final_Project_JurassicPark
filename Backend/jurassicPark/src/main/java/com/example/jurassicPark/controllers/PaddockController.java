package com.example.jurassicPark.controllers;

import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import com.example.jurassicPark.repository.paddockreposirtory.PaddockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/jurassicpark")
public class PaddockController {


    @Autowired
    PaddockRepository paddockRepository;

    //All
    @GetMapping(value = "/paddocks")
    public List<Paddock> getAllPaddocks() {
        return paddockRepository.findAll();
    }

    //Index
    @GetMapping(value = "paddocks/{id}")
    public Optional<Paddock> getOnePaddock(@PathVariable Long id){
        return paddockRepository.findById(id);
    }

    //Dinosaurs
    @GetMapping(value = "/paddocks/{id}/dinosaurs")
    public List<Dinosaur> getAllDinoarus(@PathVariable Long id){
        return paddockRepository.getAllDinosaursInPaddock(id);

    }


}
