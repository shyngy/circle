const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';

let initialState = {
    posts: [
        {id: 1, message: 'hello world', likeCount: 31},
        {id: 2, message: 'it\'s my first post', likeCount: 3},
    ],
    newPostText: 'typing '

}

const profileReducer = (state = initialState, action) => {
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