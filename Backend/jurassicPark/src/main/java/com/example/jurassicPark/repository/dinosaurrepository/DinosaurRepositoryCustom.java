package com.example.jurassicPark.repository.dinosaurrepository;

import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import com.example.jurassicPark.models.Species;

import java.util.List;

public interface DinosaurRepositoryCustom {

    public List<Dinosaur> getDinosaurBySpecies(Species species);
//    public List<Dinosaur> getDinosaurByDiet(String diet);
//    public List<Paddock> getDinosaursPaddock(Long id);

}
