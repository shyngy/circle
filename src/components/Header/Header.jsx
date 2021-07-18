import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'
import HeadStyle from './Header.module.css'

const useStyles = createUseStyles({
  user: {
    color: 'green',
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: ["2px", "15px", "2px", "20px"],
    fontWeight: 'bold',
    cursor: 'pointer'

  }
})


const Header = (props) => {
  const styles = useStyles()
  return (
    <header className={`${HeadStyle.header} item`}>
      <div className={HeadStyle.header__logo}></div>
      <div className={HeadStyle.header__word}>circle</div>
      {props.isAuth ? <div className={styles.user}>{props.login}</div> : <NavLink to='/login' className={styles.user}>login</NavLink>}
    </header>
  )
}
export default Header