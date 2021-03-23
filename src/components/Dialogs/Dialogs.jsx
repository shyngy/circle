import React from 'react'
import sty from './Diаlogs.module.css'
import Message from "./Message/Message";

import dialogsElements from "../../index";
import DialogsItem from "./DialogsItem/DialogsItem";


const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map((d)=>{
        return <DialogsItem id={d.id} name={d.name}/>
    })

    let messagesElements = props.messages.map((m)=><Message message={m.message} id={m.id}/>)

    return(
        <div className={sty.dialogs}>
            <div className={sty.dialogsItem}>

                {dialogsElements}


            </div>

            <div className={sty.messages}>
                {messagesElements}

            </div>
        </div>

    )

}

export default Dialogs