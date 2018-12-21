import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
      <ul className = "nav">
        <li className="navLink">
          <Link to="/dinosaurs">Dinosaurs</Link>
        </li>
        <li className="navLink">
          <Link to="/paddocks">Paddocks</Link>
        </li>
      </ul>
  )
}

export default NavBar;
