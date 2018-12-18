package com.example.jurassicPark.repository.paddockreposirtory;

import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaddockRepository extends JpaRepository<Paddock, Long>, PaddockRepositoryCustom  {

    public List<Dinosaur> getAllDinosaursInPaddock(Long id);

}
