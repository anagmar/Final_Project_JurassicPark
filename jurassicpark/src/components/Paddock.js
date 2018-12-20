import React from 'react';
import {Link} from 'react-router-dom';

const Paddock = (props) => {
console.log(props.paddock)
  if(!props.paddock){
    return null;
  }

  return (
    <React.Fragment>
      <Link to = {"/paddocks/"+ props.paddock.id } className = "name">
      <p className = "paddock">{props.paddock.name}</p>
      </Link>
    </React.Fragment>
  )
}

export default Paddock;
