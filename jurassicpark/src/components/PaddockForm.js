import React from 'react';

const PaddockForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    console.log(event)
    const paddock = {
        "name": event.target.name.value,
        "type": event.target.type.value,
        // "dinosaurs": [...event.target.dinosaurs.options].filter((option) => {
        //   return option.selected
        // }).map((option) => {
        //   return option.value
        // })
      }
    console.log(paddock)
    props.handlePaddockPost(paddock)
    }
// COMO POBLAR UNA LISTA
    // const paddockOptions = props.dinosaurs.map((dinosaur, index) => {
      //      return <option key={index} value={dinosaur.id}>{dinosaur.name}</option>
      //    })

    // <select name="paddock">
    //               {paddockOptions}
    //             </select>




      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name"/>

            <select name="paddockType" name="type">
            <option value = "jungle">Jungle</option>
            <option value = "mountains">Mountains</option>
            <option value = "dessert">Dessert</option>
            </select>
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default PaddockForm;
