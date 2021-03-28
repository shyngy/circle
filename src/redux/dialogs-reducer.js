const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_VALUE = 'UPDATE-NEW-MESSAGE-VALUE'

const dialogReducer = (state, action) => {
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