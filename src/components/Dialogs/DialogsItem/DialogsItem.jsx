import React from 'react'
import sty from '../Diаlogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let link = `diologs/${props.id}`
    return(

        <div>
            <NavLink to={link} className={sty.dialog}>{props.name}</NavLink>
        </div>
    )
}

const UserMessages = () =>{
    return(
        <div>

        </div>
    )
}

export default DialogsItem