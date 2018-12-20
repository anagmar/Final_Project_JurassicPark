import React  from 'react';
import {Link} from 'react-router-dom';

const PaddockDetails = (props) => {
console.log(props.dinosaurs)
  const onDelete = () => {
    props.handleDelete(props.paddock.id);
  }

  const onEdit = () => {
    props.handleEdit(props.paddock.id)
  }
  if(!props.dinosaurs){
     return null;
   }
   const dinosaurs = props.dinosaurs.map((dinosaur, index) => {
     return <li key = {index}>{dinosaur.name}</li>
     console.log(dinosaurs)
   })

   if(!props.dinosaurs){
      return null;
    }
    const dinoid = props.dinosaurs.map((dinosaur, index) => {
      return dinosaur.id
    })



  return (
    <React.Fragment>
    <h3>
      {props.paddock.name}
    </h3>
    <ul>
    Dinoraurs: {dinosaurs}
    </ul>
    <p>
    </p>
    <Link to = {"/dinosaurs/" + dinoid}>
    <button>Go to Dinosaurs</button>
    </Link>
    <button onClick = {onDelete}>Delete Padock </button>
    <button onClick = {onEdit}>Edit Paddock </button>
    </React.Fragment>
  )
}

export default PaddockDetails;
