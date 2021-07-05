import { addMessageActionCreator, updateNewMessageValue } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';

import { connect } from 'react-redux';

// const DialogsContainer = () => {
//   return <StoreContext.Consumer>
//     {
//       store => {
//         let state = store.getState().messagesPage




//         const onSendMessageClick = () => {
//           store.dispatch(addMessageActionCreator())

//         }

//         const addMessageValue = (body) => {
//           store.dispatch(updateNewMessageValue(body))
//         }
//         return (<Dialogs updateNewMessageBody={addMessageValue}
//           sendMessage={onSendMessageClick}
//           dialogsPage={state}
//         />)
//       }
//     }
//   </StoreContext.Consumer>

// }

let mapStateToProps = (state) => {

  return {
    dialogsPage: state.messagesPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageActionCreator())
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageValue(body))
    }

  }
}




const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer