import React from 'react'
import sty from './Diаlogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";
import {addMessageActionCreator, updateNewMessageValue} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    // console.log(props.messagesPage.newMessageText)
    let dialogsElements = props.messagesPage.dialogs.map((d)=>{
        return <DialogsItem id={d.id} name={d.name}/>
    })

    let messagesElements = props.messagesPage.messages.map((m)=><Message message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef()


    const addMessage = () => {
        props.dispatch(addMessageActionCreator())

    }

    const addMessageValue = () =>{
        let text = newMessageElement.current.value
        props.dispatch(updateNewMessageValue(text))
    }

    return(
        <div className={sty.dialogs}>
            <div className={sty.dialogsItem}>

                {dialogsElements}


            </div>

            <div className={sty.messages}>
                <input
                    ref={newMessageElement}
                    value={props.messagesPage.newMessageText}
                    onChange={addMessageValue}
                /> <button onClick={addMessage}>add messsage</button>
                {messagesElements}

            </div>

        </div>

    )

}

export default Dialogs