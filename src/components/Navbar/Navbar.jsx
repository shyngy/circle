import React from 'react'
import sty from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () =>{

    return(
    <nav className={sty.nav}>
        <ul>
          <li className=""><NavLink to="/Profile" activeClassName={sty.acitve} className={sty.nav__link}>profile</NavLink></li>
          <li className=""><NavLink to="/Dialogs" activeClassName={sty.acitve} className={sty.nav__link}>messages</NavLink></li>
          <li className=""><a href="#" className={sty.nav__link}>news</a></li>
          <li className=""><a href="#" className={sty.nav__link}>music</a></li>
          <li className=""><a href="#" className={sty.nav__link}>settings</a></li>
        </ul>
      </nav>
    )
}

export default Navbar