import React from 'react';
import {Link} from 'react-router-dom';

const Dinosaur = (props) => {

  if(!props.dinosaur && props.paddock){
    return null;
  }
  console.log("this are the props", props);
  return (
    <React.Fragment>
      <Link to = {"/dinosaurs/" + props.dinosaur.id } className = "name">
      <h3 className = "dino">{props.dinosaur.name}</h3>
      <p className = "species">{props.dinosaur.species}</p>

      </Link>
    </React.Fragment>
  )
}

export default Dinosaur;
