package com.example.jurassicPark.projections;


import com.example.jurassicPark.models.Dinosaur;
import com.example.jurassicPark.models.Paddock;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedDinosaur", types = Paddock.class)
public interface PaddockProjection {

    Long getId();
    String getName();
    List<DinosaurProjection> getDinosaurs();


}
