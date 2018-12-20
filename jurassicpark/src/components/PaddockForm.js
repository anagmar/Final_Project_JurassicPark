import React from 'react';

const PaddockForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    console.log(event)
    const paddock = {
        "name": event.target.name.value,
        "dinosaurs": [...event.target.dinosaurs.options].filter((option) => {
          return option.selected
        }).map((option) => {
          return option.value
        })
      }
    console.log(paddock)
    props.handlePaddockPost(paddock)
    }


    // <select name="paddock">
    //               {paddockOptions}
    //             </select>



  const paddockOptions = props.dinosaurs.map((dinosaur, index) => {
       return <option key={index} value={dinosaur.id}>{dinosaur.name}</option>
     })

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name"/>
\            <select name="dinosaurs">
                          {paddockOptions}
                        </select>

            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default PaddockForm;
