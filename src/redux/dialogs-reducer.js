const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_VALUE = 'UPDATE-NEW-MESSAGE-VALUE';

let initialState = {
  messages: [
    { id: 1, message: "hello" },
    { id: 2, message: "how are you" },
    { id: 3, message: "how are u" },
    { id: 4, message: "yoo" },

  ],
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Vlad" },
    { id: 3, name: "Lesa" },
  ],
  newMessageText: 'typing... '
};

const dialogReducer = (state = initialState, action) => {


  switch (action.type) {
    case ADD_MESSAGE:
      const idUser = state.messages.length + 1;
      const noneMessage = '';
      return {
        ...state,
        messages: [...state.messages, { id: idUser, message: state.newMessageText }],
        newMessageText: noneMessage
      };

    case UPDATE_NEW_MESSAGE_VALUE:
      return {
        ...state,
        newMessageText: action.text
      };
    default:
      return state;

  };


};

export let addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export let updateNewMessageValue = text => ({ type: UPDATE_NEW_MESSAGE_VALUE, text: text });


export default dialogReducer;