import { authAPI } from "../API";

const SET_USER_DATA = 'SET-USER-DATA';
const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  console.log(state.isAuth, "is auth");
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        isAuth: true,
        ...action.data,
        

      };
    default:
      return state
  };
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login }
});
export const getAuth = () => (dispatch) => {
  authAPI.getAuth().then(response=>{
   if(response.data.resultCode === 0){
    const { email, id, login } = response.data.data;
    dispatch(setAuthUserData(email, id, login));
   }

  })
}
export default authReducer;