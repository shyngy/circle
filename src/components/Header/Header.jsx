import React from 'react'
import HeadStyle from './Header.module.css'




const Header = () => {
    return(
        <header className={`${HeadStyle.header} item`}>
            <div className={HeadStyle.header__logo}></div>
            <div className={HeadStyle.header__word}>circle</div>
        </header>
    )
}
export default Header