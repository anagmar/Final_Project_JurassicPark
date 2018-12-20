import React from 'react';
import Dinosaur from './Dinosaur.js';

const DinosaurList = (props) => {
  
      const dinosaurs = props.dinosaurs.map((dinosaur) => {
                        return (
                          <li key={dinosaur.id} className="component-item">
                                  <div className = "component">
                           <Dinosaur paddocks ={dinosaur.paddock} dinosaur ={dinosaur}/>
                                  </div>
                          </li>
                        )
                        console.log("what is this", dinosaur);
                      })
      return (
              <ul className = "component-list">
              {dinosaurs}

              </ul>
      )
};

export default DinosaurList;
