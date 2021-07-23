import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile } from '../../../redux/profile-reducer';
import Profile from './Profile';


class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.id;
    if (!userId) {
      userId = 2;
    };
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        console.log(response);
        this.props.setUserProfile(response.data);
      });
  };
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  };
};



const mapStateToProps = (state) => {
  return {
    userId: state.usersPage.userId,
    profile: state.profilePage.profile,
  };
};

const mapDispatchToProps = {
  setUserProfile,
};

const withRouterContainer = withRouter(ProfileContainer);


export default connect(mapStateToProps, mapDispatchToProps)(withRouterContainer);