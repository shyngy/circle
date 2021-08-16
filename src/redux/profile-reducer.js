import { usersAPI } from "../API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let initialState = {
  posts: [
    { id: 1, message: 'hello world', likeCount: 31 },
    { id: 2, message: 'it\'s my first post', likeCount: 3 },
  ],
  newPostText: 'typing ',
  profile: null,

};

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case ADD_POST:

      const idUser = state.posts.length + 1;

      const likeCount = (Math.random() * 10).toFixed(0);
      const text = state.newPostText;
      return {
        ...state,
        posts: [...state.posts,
        { id: idUser, message: text, likeCount: +likeCount },

        ],
        newPostText: ''

      }

    case UPDATE_NEW_POST_VALUE:
      return {
        ...state,
        newPostText: action.text
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile

      };
    default:
      return state
  };
};

export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostValue = text => ({ type: UPDATE_NEW_POST_VALUE, text: text });
export const getProfile = (id) => (dispatch) => {
  usersAPI.getProfile(id).then(response =>{
    dispatch(setUserProfile(response.data))
  })
}
export default profileReducer;