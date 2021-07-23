const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_LOADED = "SET-LOADED";
const CURRENT_USER_ID = "CURRENT-USER-ID";
const initialState = {
  users: [
  ],
  pageSize: 5,
  totalUsersCount: 19,
  currentPage: 1,
  isLoaded: false,
  userId: 3

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

    default:
      return state;
  };
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, totalUsersCount });
export const setLoaded = (isLoaded) => ({ type: SET_LOADED, isLoaded });
export const currentUserId = (userId) => ({ type: CURRENT_USER_ID, userId });
export default usersReducer;