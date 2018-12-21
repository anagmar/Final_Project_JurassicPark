package com.example.jurassicPark.repository.paddockreposirtory;

import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import com.example.jurassicPark.projections.DinosaurProjection;
import com.example.jurassicPark.projections.PaddockProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@RepositoryRestResource(excerptProjection = PaddockProjection.class)
public interface PaddockRepository extends JpaRepository<Paddock, Long>, PaddockRepositoryCustom  {

    public List<Dinosaur> getAllDinosaursInPaddock(Long id);
}
