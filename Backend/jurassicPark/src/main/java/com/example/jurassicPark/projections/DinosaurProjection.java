package com.example.jurassicPark.projections;

import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import org.springframework.data.rest.core.config.Projection;

import java.util.ArrayList;

@Projection(name = "embedPaddock", types = Dinosaur.class)
public interface DinosaurProjection {
    long getId();
    String getName();
    String getSpecies();
    String getDiet();
//    Paddock getPaddock();
}
