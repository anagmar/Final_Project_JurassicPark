import React  from 'react';
import {Link} from 'react-router-dom';

const DinosaurDetails = (props) => {

console.log(props.feed);
// console.log("this is a paddock", props.paddocks.name);

  const onDelete = () => {
    props.handleDelete(props.dinosaur.id);
  }

  const onEdit = () => {
    props.handleEdit(props.dinosaur.id)
  }
  const onFed = () => {
    props.handleFeed(props.dinosaur.id)
  }

  // Link to = {"/paddocks/" + props.paddocks.id}>
  // <button>Go to Paddock</button>
  // </Link>


  return(
    <React.Fragment>
    <h3>
    </h3>
    <p>
    Specie: {props.dinosaur.species}
    </p>
    <p>
    Diet: {props.dinosaur.diet}
    </p>
    <p>
    Feed: {props.feed}{alert}
    </p>
    <button onClick = {onDelete}>Delete Dinosaur </button>
    <button onClick = {onFed}>Feed Dino!</button>
    <button onClick = {onEdit}>Edit Dinosaur </button>
    </React.Fragment>
  )
}

export default DinosaurDetails;
