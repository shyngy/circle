import { addMessageActionCreator, updateNewMessageValue } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc";
import { compose } from "redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.messagesPage,
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


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs) 


