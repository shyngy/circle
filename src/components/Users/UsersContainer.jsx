import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, setLoaded } from "../../redux/users-reducer";
import Users from '../Users/Users'
import axios from 'axios';
import React from "react";
import Loading from "../Loading";
import PropTypes from 'prop-types'

class usersContainer extends React.Component {



  componentDidMount() {
    // this.props.setLoaded(false)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
      console.log(response.data)
      this.props.setTotalUsersCount(response.data.totalCount)

    })

  }
  onPageChange = (pageNumber) => {
    this.props.setLoaded(false)
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);


    })

  }
  render() {

    return <> {
      this.props.isLoaded ? <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      /> :
        <Loading />
    }
    </>

  }
}

const mapStateToProps = (state) => {

  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoaded: state.usersPage.isLoaded

  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       // dispatch({ type: "SET-LOADED", load: false }) ошибка вызова 
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (number) => {
//       dispatch(setCurrentPageAC(number))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount))
//     },
//     setLoaded: (isLoaded) => {
//       dispatch(setLoadedAC(isLoaded))
//     }
//   }


// }

const mapDispatchToProps = () => {
  return {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setLoaded
  }
}


usersContainer.propTypes = {
  isLoaded: PropTypes.bool.isRequired,

}

export default connect(mapStateToProps, mapDispatchToProps())(usersContainer)