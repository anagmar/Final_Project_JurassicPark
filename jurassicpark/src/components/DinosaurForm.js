import React from 'react';

const DinosaurForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    console.log(event)
    const dinosaur = {
        "name": event.target.name.value,
        "species":event.target.species.value,
        "diet":event.target.diet.value
      }
        // "paddock": event.target.paddock.value

    console.log(dinosaur)
    props.handleDinosaurPost(dinosaur)
    }



console.log(props.dinosaurs);

  const dinoOptions = props.dinosaurs.map((dinosaur, index) => {
      console.log(dinosaur.diet)
       return <option key={index} value={dinosaur.diet}>{dinosaur.species}</option>
     })




  // <select name="paddock">
  //               {paddockOptions}
  //             </select>
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name"/>
            <select name="species" >
            <option value="apatosaurus">Apatosaurus</option>
            <option value="velociraptor">Velociraptor</option>
            <option value="triceratops">Triceratops</option>
            <option value="parasaurolopus">Parasaurolopus</option>
            <option value="tyrannosaurus">Tyrannosaurus</option>
            </select>
            <select placeholder="Diet" name="diet">
            <option value="herbivore"> Herbivore</option>
            <option value="carnivore">Carnivore</option>
              </select>
            <button type="submit">Save</button>
          </form>
        </div>
    )

}

export default DinosaurForm;
