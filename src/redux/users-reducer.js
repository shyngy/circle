import { usersAPI } from "../API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_LOADED = "SET-LOADED";
const CURRENT_USER_ID = "CURRENT-USER-ID";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";
const initialState = {
  users: [
  ],
  pageSize: 5,
  totalUsersCount: 19,
  currentPage: 1,
  isLoaded: false,
  userId: 3,
  followingInProgress: []
};


const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          };

          return u;

        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          };

          return u;

        })

      };

    case SET_USERS: {
      return { ...state, users: [...action.users], isLoaded: true };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case SET_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };

    }

    case SET_LOADED: {
      return { ...state, isLoaded: action.isLoaded };
    }

    case CURRENT_USER_ID: {
      return { ...state, userId: action.userId };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS:{
      return {...state,
        followingInProgress: action.isFetching
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter(id=> id !== action.userId)
      
      }
    }
    default:
      return state;
  };
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, totalUsersCount });
export const setLoaded = (isLoaded) => ({ type: SET_LOADED, isLoaded });
export const currentUserId = (userId) => ({ type: CURRENT_USER_ID, userId });
export const toggleFollowingProgress = (isFetching, userId) =>({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching,userId})

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setLoaded(false));
  usersAPI.getUsers(currentPage,pageSize).then((response) => {
    dispatch(setLoaded(true));
    console.log(response);
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
  });
};


export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  usersAPI.follow(userId).then(response=>{
    if(response.data.resultCode === 0){
      dispatch(followSuccess(userId));

    }
    dispatch(toggleFollowingProgress(false, userId))
  })
}
export const unfollow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  usersAPI.unfollow(userId).then(response=>{
    if(response.data.resultCode === 0){
      dispatch(unfollowSuccess(userId));

    }
    dispatch(toggleFollowingProgress(false, userId))
  })
}
export default usersReducer;