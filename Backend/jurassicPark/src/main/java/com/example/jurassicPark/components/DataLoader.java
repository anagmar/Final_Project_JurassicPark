package com.example.jurassicPark.components;


import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import com.example.jurassicPark.models.PaddockType;
import com.example.jurassicPark.models.Species;
import com.example.jurassicPark.repository.paddockreposirtory.PaddockRepository;
import com.example.jurassicPark.repository.dinosaurrepository.DinosaurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PaddockRepository paddockRepository;
    @Autowired
    DinosaurRepository dinosaurRepository;


    public DataLoader(){
    }

    public void run(ApplicationArguments args){
//
        Paddock paddock1 = new Paddock("Cretaceous Cruise", PaddockType.jungle);
        paddockRepository.save(paddock1);
//
//        Paddock paddock2 = new Paddock("Aviary World");
//        paddockRepository.save(paddock2);
//

//
        Dinosaur dinosaur1 = new Dinosaur("Blue",Species.velociraptor);
        dinosaurRepository.save(dinosaur1);
//
        Dinosaur dinosaur2 = new Dinosaur("Pato", Species.apatosarus);
        dinosaurRepository.save(dinosaur2);

        Dinosaur dinosaur3 = new Dinosaur("Scary", Species.Tyrannosaurus);
        dinosaurRepository.save(dinosaur3);

      Dinosaur dinosaur4 = new Dinosaur("Spike", Species.triceratops);
        dinosaurRepository.save(dinosaur4);

        Dinosaur dinosaur5 = new Dinosaur("Duckie", Species.parasaurolopus);
        dinosaurRepository.save(dinosaur5);

//        Dinosaur dinosaur3 = new Dinosaur("Rex", "Tiranosaurous Rex","Carnivore", paddock3);
//        dinosaurRepository.save(dinosaur3);
//

//
//
//
//
    }

}
