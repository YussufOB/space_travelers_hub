import React from 'react';
import { NavLink } from 'react-router-dom';
import { spaceIcon } from '../pages/assets'

const NavBar = () => (
  <nav>
    <img></img>
    <h3>Space Traveler&apos;s Hub</h3>
    <ul>
      <li><NavLink to="/">Rockets</NavLink></li>
      <li><NavLink to="/missions">Missions</NavLink></li>
      <li><NavLink to="/my-profile">My Profile</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;
