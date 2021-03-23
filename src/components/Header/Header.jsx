import React from 'react'
import HeadStyle from './Header.module.css'

const Header = () => {
    return(
        <header className={`${HeadStyle.header} item`}>
            <img className={HeadStyle.header__logo} src="https://www.scrum.org/themes/custom/scrumorg/assets/images/logo-250.png"/>
            <div className={HeadStyle.header__word}>circle</div>
        </header>
    )
}
export default Header