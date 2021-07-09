import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setUsersTotalCountAC } from "../../redux/users-reducer";

import Users from "./Users";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (number) => {
      dispatch(setCurrentPageAC(number))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)