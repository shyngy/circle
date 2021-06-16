const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';

let initialState = {
  posts: [
    { id: 1, message: 'hello world', likeCount: 31 },
    { id: 2, message: 'it\'s my first post', likeCount: 3 },
  ],
  newPostText: 'typing '

}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST:
      console.log(state);
      //   const stateCopy = { ...state }
      //   let idUsers = state.posts.length
      //   let userPost = {
      //     id: ++idUsers,
      //     message: state.newPostText,
      //     likeCount: (Math.random() * 10).toFixed(0)

      //   }

      //   stateCopy.posts = [...state.posts]
      //   stateCopy.posts.push(userPost)
      //   stateCopy.newPostText = ''
      //   return stateCopy
      //}

      const idUser = state.posts.length + 1

      const likeCount = (Math.random() * 10).toFixed(0)
      const text = state.newPostText
      return {
        ...state,
        posts: [...state.posts,
        { id: idUser, message: text, likeCount: +likeCount },

        ],
        newPostText: ''


      }

    case UPDATE_NEW_POST_VALUE:
      // const stateCopy = { ...state }
      // stateCopy.newPostText = action.text

      // //
      // return stateCopy
      return {
        ...state,
        newPostText: action.text
      }
    default:
      return state
  }
}
export let addPostActionCreator = () => ({ type: ADD_POST })
export let updateNewPostValue = text => ({ type: UPDATE_NEW_POST_VALUE, text: text })

export default profileReducer