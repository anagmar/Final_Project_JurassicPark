package com.example.jurassicPark.projections;


import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import com.example.jurassicPark.models.PaddockType;
import org.springframework.data.rest.core.config.Projection;

import java.util.ArrayList;
import java.util.List;

@Projection(name = "embedDinosaur", types = {Paddock.class, Dinosaur.class})
public interface PaddockProjection {

    Long getId();
    String getName();
    List<Dinosaur> getDinosaurs();
    PaddockType getType();


}
