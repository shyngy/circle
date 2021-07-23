import React from 'react';
import sty from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={sty.nav}>
      <ul>
        <li className=""><NavLink to="/profile" activeClassName={sty.acitve}
          className={sty.nav__link}>profile</NavLink></li>
        <li className=""><NavLink to="/dialogs" activeClassName={sty.acitve}
          className={sty.nav__link}>messages</NavLink></li>
        <li className=""><NavLink to="/users" activeClassName={sty.acitve}
          className={sty.nav__link}>users</NavLink></li>

      </ul>
    </nav>
  );
};

export default Navbar;