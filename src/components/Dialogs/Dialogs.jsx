import React from 'react';
import sty from './Diаlogs.module.css';
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";


const Dialogs = (props) => {
  console.log(props);
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d, i) => <DialogsItem key={i} name={d.name} id={d.id} />);
  let messagesElements = state.messages.map((m, i) => <Message key={i} message={m.message} />);
  let newMessageElement = state.newMessageBody;

  const onSendMessageClick = () => {
    props.sendMessage();

  };
  const addMessageValue = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };
  return (
    <div className={sty.dialogs}>
      <div className={sty.dialogsItem}>
        {dialogsElements}
      </div>

      <div className={sty.messages}>
        <input
          ref={newMessageElement}
          value={state.newMessageText}
          onChange={addMessageValue}
        /> <button onClick={onSendMessageClick}>add messsage</button>
        {messagesElements}
      </div>
    </div>
  );
};


export default Dialogs;