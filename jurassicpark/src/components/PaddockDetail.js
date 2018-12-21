import React  from 'react';
// import {Link} from 'react-router-dom';

const PaddockDetails = (props) => {
console.log("Here is the Paddock Deteil", props.paddock)

  // const onDelete = () => {
  //   props.handleDelete(props.paddock.id);
  // }
  //
  // const onEdit = () => {
  //   props.handleEdit(props.paddock.id)
  // }


   // const dinosaurs = props.dinosaurs.map((dinosaur, index) => {
   const onDelete = () => {
     props.handleDelete(props.paddock.id);
   }

   const onEdit = () => {
     props.handleEdit(props.paddock.id)
   }
   //   return <li key = {index}>{dinosaur.name}</li>
   //   console.log(dinosaurs)
   // })
return(

     <div>
     <h3>Type:</h3><p>{props.paddock.type}</p>
     <h3>Dinosaurs:</h3><p>No dinosaurs</p>
     <button onClick = {onDelete}>Delete Paddock </button>
     <button onClick = {onEdit}>Add Dinosaurs</button>
     </div>

)
    //
    // const dinoid = props.dinosaurs.map((dinosaur, index) => {
    //   return dinosaur.id
    // })

    // <button onClick = {onDelete}>Delete Padock </button>
    // <button onClick = {onEdit}>Edit Paddock </button>

    // <Link to = {"/dinosaurs/" + dinoid}>
    // <button>Go to Dinosaurs</button>
    // </Link>
  // return (
  // <div>
  //   <ul>
  //   </ul>
  //   <button onClick = {onDelete}>Delete Paddock </button>
  //   <button onClick = {onEdit}>Edit Paddock </button>
  // </div>



}

export default PaddockDetails;
