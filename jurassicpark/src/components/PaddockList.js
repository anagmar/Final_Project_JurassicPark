import React from 'react';
import Paddock from './Paddock.js';

const PaddockList = (props) => {
  console.log("PaddockList", props.paddocks)
      const paddocks = props.paddocks.map((paddock) => {
                        return (
                          <li key={paddock.id} className="component-item">
                                  <div className = "component">
                           <Paddock dinosaurs ={paddock.dinosaurs} paddock = {paddock}/>
                                  </div>
                          </li>
                        )
                        console.log("the paddock",paddock);
                      })
      return (
              <ul className = "component-list">
              {paddocks}
              </ul>
      )
};

export default PaddockList;
