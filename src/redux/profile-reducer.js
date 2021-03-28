const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let idUsers = state.posts.length
            let userPost = {
                id: ++idUsers,
                message: state.newPostText,
                likeCount: (Math.random() * 10).toFixed(0)
            }
            state.posts.push(userPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_VALUE:
            state.newPostText = action.text
            console.log(action.text)
            //
            return state
        default:
            return state
    }
}
export let addPostActionCreator = () => ({type: ADD_POST})
export let updateNewPostValue = text =>({type: UPDATE_NEW_POST_VALUE, text:text})

export default profileReducer