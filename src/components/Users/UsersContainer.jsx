import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, setLoaded, currentUserId, toggleFollowingProgress, getUsers } from "../../redux/users-reducer";
import Users from '../Users/Users';
import React from "react";
import Loading from "../Loading";
import PropTypes from 'prop-types';
import { compose } from "redux";


class usersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)

  };
  onPageChange = (pageNumber) => {
  
    
    this.props.getUsers(pageNumber,this.props.pageSize);
    // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, { withCredentials: true }).then((response) => {
    //   this.props.setUsers(response.data.items);
    // });

  };
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
        currentUserId={this.props.currentUserId}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
      /> :
        <Loading />
    }
    </>

  };
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoaded: state.usersPage.isLoaded,
    followingInProgress: state.usersPage.followingInProgress
  };
};

const mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  setLoaded,
  currentUserId,
  toggleFollowingProgress,
  getUsers
};


usersContainer.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(usersContainer);