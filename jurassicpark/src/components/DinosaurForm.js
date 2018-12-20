import React from 'react';

const DinosaurForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    console.log(event)
    const dinosaur = {
        "name": event.target.name.value,
        "species": event.target.species.value,
        "diet":event.target.diet.value,
        // "paddock": event.target.paddock.value
      }
    console.log(dinosaur)
    props.handleDinosaurPost(dinosaur)
    }


    // <select name="paddock">
    //               {paddockOptions}
    //             </select>



  // const paddockOptions = props.paddocks.map((paddock, index) => {
  //     console.log(paddock)
  //      return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
  //    })

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name"/>
            <input type="text" placeholder="Species" name="species"/>
            <input type="text" placeholder="Diet" name="diet"/>
            
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default DinosaurForm;
