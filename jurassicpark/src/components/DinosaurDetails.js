import React  from 'react';
import {Link} from 'react-router-dom';

const DinosaurDetails = (props) => {

console.log("this is a paddock", props.paddocks.name);

  const onDelete = () => {
    props.handleDelete(props.dinosaur.id);
  }

  const onEdit = () => {
    props.handleEdit(props.dinosaur.id)
  }




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
    Paddock: {props.paddocks.name}
    </p>
    <Link to = {"/paddocks/" + props.paddocks.id}>
    <button>Go to Paddock</button>
    </Link>
    <button onClick = {onDelete}>Delete Dinosaur </button>

    <button onClick = {onEdit}>Edit Dinosaur </button>
    </React.Fragment>
  )
}

export default DinosaurDetails;
