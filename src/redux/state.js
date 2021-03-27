const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_VALUE = 'UPDATE-NEW-MESSAGE-VALUE'
let store = {
    _state: {
        profilePage:
            {

                posts: [
                    {id: 1, message: 'hello world', likeCount: 31},
                    {id: 2, message: 'it\'s my first post', likeCount: 3},
                ],
                newPostText: 'typing '

            },

        messagesPage:
            {
                messages: [
                    {id: 1, message: "hello"},
                    {id: 2, message: "how are you"},
                    {id: 3, message: "how are u"},
                    {id: 4, message: "yoo"},

                ],
                dialogs: [
                    {id: 1, name: "Dima"},
                    {id: 2, name: "Vlad"},
                    {id: 3, name: "Lesa"},
                ],
                newMessageText: 'typing... '
            }

    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let idUsers = this._state.profilePage.posts.length
            let userPost = {
                id: ++idUsers,
                message: this._state.profilePage.newPostText,
                likeCount: (Math.random() * 10).toFixed(0)
            }
            this._state.profilePage.posts.push(userPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state) // call a function after all changes
        }
        else if (action.type === UPDATE_NEW_POST_VALUE){
            this._state.profilePage.newPostText = action.text
            console.log(action.text)
            this._callSubscriber(this._state) // call a function after all changes
        }////////////////////////////////////////////
        else if (action.type === ADD_MESSAGE){
            let idUsers = this._state.messagesPage.messages.length
            let userMessages = {
                id: ++idUsers,
                message: this._state.messagesPage.newMessageText,
            }
            this._state.messagesPage.messages.push(userMessages)
            this._state.messagesPage.newMessageText = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_MESSAGE_VALUE){
            console.log(action.text)
            this._state.messagesPage.newMessageText = action.text

            this._callSubscriber(this._state)
        }
    }


}

export let addPostActionCreator = () => ({type: ADD_POST})
export let updateNewPostValue = text =>({type: UPDATE_NEW_POST_VALUE, text:text})

export let addMessageActionCreator = () =>({type: ADD_MESSAGE})
export let updateNewMessageValue = text =>({type: UPDATE_NEW_MESSAGE_VALUE, text:text})
window.store = store

export default store














