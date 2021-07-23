import React from 'react';
import sty from '../Diаlogs.module.css';

const Message = (props) =>{
    return(
        <div className={sty.dialogs}>{props.message}</div>
    );
};


export default Message;