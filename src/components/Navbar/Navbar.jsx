import React from 'react'
import sty from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={sty.nav}>
      <ul>
        <li className=""><NavLink to="/Profile" activeClassName={sty.acitve}
          className={sty.nav__link}>profile</NavLink></li>
        <li className=""><NavLink to="/Dialogs" activeClassName={sty.acitve}
          className={sty.nav__link}>messages</NavLink></li>
        <li className=""><span className={sty.nav__link}>news</span></li>
        <li className=""><span className={sty.nav__link}>music</span></li>
        <li className=""><span className={sty.nav__link}>settings</span></li>
      </ul>
    </nav>
  )
}

export default Navbar