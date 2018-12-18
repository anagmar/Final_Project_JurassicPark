package com.example.jurassicPark.repository.paddockreposirtory;

import com.example.jurassicPark.models.Dinosaur;

import java.util.List;

public interface PaddockRepositoryCustom {

    public List<Dinosaur> getAllDinosaursInPaddock(Long id);
}
