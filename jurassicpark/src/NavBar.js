import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
<nav>
      <ul className = "nav">
        <li className="navLink">
          <Link class="dino" to="/dinosaurs">Dinosaurs</Link>
        </li>
        <li className="navLink">
          <Link class="paddock"to="/paddocks">Paddocks</Link>
        </li>
      </ul>
      </nav>
  )
}

export default NavBar;
