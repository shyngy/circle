const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_VALUE = 'UPDATE-NEW-MESSAGE-VALUE'

let initialState = {
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

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let idUsers = state.messages.length
            let userMessages = {
                id: ++idUsers,
                message: state.newMessageText,
            }
            state.messages.push(userMessages)
            state.newMessageText = ''

            return state

        case UPDATE_NEW_MESSAGE_VALUE:
            // console.log(action.text)
            state.newMessageText = action.text

            return state
        default:
            return state

    }


}

export let addMessageActionCreator = () => ({type: ADD_MESSAGE})
export let updateNewMessageValue = text => ({type: UPDATE_NEW_MESSAGE_VALUE, text: text})


export default dialogReducer