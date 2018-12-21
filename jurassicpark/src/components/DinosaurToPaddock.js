import React from 'react';

const DinosaurToPaddock = (props) => {
console.log(props);

  function handleSubmit(event){
    event.preventDefault();
    console.log(event)
    const paddock = {
        "dinosaurs": [...event.target.dinosaurs.options].filter((option) => {
          return option.selected
        }).map((option) => {
          return option.value
        })
      }
    console.log(paddock)
    props.handleDinosaurPost(paddock)
    }
// COMO POBLAR UNA LISTA
    const paddockOptions = props.dinosaurs.map((dinosaur, index) => {
           return <option key={index} value={dinosaur.id}>{dinosaur.name}</option>
         })

    // <select name="paddock">
    //               {paddockOptions}
    //             </select>




      return (
        <div>
          <form onSubmit={handleSubmit}>
            <select name="dinosaurs">
            {paddockOptions}
            </select>
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default DinosaurToPaddock;
