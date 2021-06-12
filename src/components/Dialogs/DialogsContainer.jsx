import React from 'react'
import sty from './Diаlogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";
import { addMessageActionCreator, updateNewMessageValue } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  // console.log(props.messagesPage.newMessageText)
  // let dialogsElements = props.messagesPage.dialogs.map((d)=>{
  //     return <DialogsItem id={d.id} name={d.name}/>
  // })

  // let messagesElements = props.messagesPage.messages.map((m)=><Message message={m.message} id={m.id}/>)

  // let newMessageElement = React.createRef()


  // const addMessage = () => {
  //     props.dispatch(addMessageActionCreator())

  // }

  // const addMessageValue = () =>{
  //     let text = newMessageElement.current.value
  //     props.dispatch(updateNewMessageValue(text))
  // }
  let state = props.store.getState().messagesPage


  let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
  let messagesElements = state.messages.map(m => <Message message={m.message} />)
  let newMessageElement = state.newMessageBody

  const onSendMessageClick = () => {
    props.store.dispatch(addMessageActionCreator())

  }

  const addMessageValue = (body) => {
    props.store.dispatch(updateNewMessageValue(body))
  }
  return <Dialogs updateNewMessageBody={addMessageValue}
    sendMessage={onSendMessageClick}
    dialogsPage={state}
  />



}

export default DialogsContainer