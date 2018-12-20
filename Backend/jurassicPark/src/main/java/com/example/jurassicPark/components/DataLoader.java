package com.example.jurassicPark.components;


import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
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

        Paddock paddock1 = new Paddock("Cretaceous Cruise");
        paddockRepository.save(paddock1);

        Paddock paddock2 = new Paddock("Aviary World");
        paddockRepository.save(paddock2);

        Paddock paddock3 = new Paddock("T-Rex Paddock");
        paddockRepository.save(paddock3);

        Dinosaur dinosaur1 = new Dinosaur("Flyer","Terodactil", "Carnivore", paddock2);
        dinosaurRepository.save(dinosaur1);

        Dinosaur dinosaur2 = new Dinosaur("Pato", "Apatosaurus", "Herbivore", paddock1);
        dinosaurRepository.save(dinosaur2);

        Dinosaur dinosaur3 = new Dinosaur("Rex", "Tiranosaurous Rex","Carnivore", paddock3);
        dinosaurRepository.save(dinosaur3);





    }

}
