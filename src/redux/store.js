import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage:
    {
      posts: [
        { id: 1, message: 'hello world', likeCount: 31 },
        { id: 2, message: 'it\'s my first post', likeCount: 3 },
      ],
      newPostText: 'typing '

    },

    messagesPage:
    {
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
    },


  },
  _callSubscriber() { },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = dialogReducer(this._state.messagesPage, action)
    this._callSubscriber(this._state) // call a function after all changes

  }

}

window.store = store

export default store














