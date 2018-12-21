package com.example.jurassicPark.repository.dinosaurrepository;

import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import com.example.jurassicPark.models.Species;
import com.example.jurassicPark.projections.DinosaurProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(excerptProjection = DinosaurProjection.class)
public interface DinosaurRepository extends JpaRepository<Dinosaur, Long>, DinosaurRepositoryCustom {

    public List<Dinosaur> getDinosaurBySpecies(Species species);
//    public List<Dinosaur> getDinosaurByDiet(String diet);
//    public List<Paddock> getDinosaursPaddock(Long id);
}
