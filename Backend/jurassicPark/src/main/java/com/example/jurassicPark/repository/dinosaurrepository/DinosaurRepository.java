package com.example.jurassicPark.repository.dinosaurrepository;

import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DinosaurRepository extends JpaRepository<Dinosaur, Long>, DinosaurRepositoryCustom {

    public List<Dinosaur> getDinosaurBySpecies(String species);
    public List<Dinosaur> getDinosaurByDiet(String diet);
    public List<Paddock> getDinosaursPaddock(Long id);
}
