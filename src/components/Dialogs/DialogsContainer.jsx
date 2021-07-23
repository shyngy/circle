import { addMessageActionCreator, updateNewMessageValue } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.messagesPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageValue(body));
    },
  };
};


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;