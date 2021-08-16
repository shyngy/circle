
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc';
import { getProfile } from '../../../redux/profile-reducer';
import Profile from './Profile';


class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.id;
    if (!userId) {
      userId = 2;
    };
    this.props.getProfile(userId);
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
    name: state.auth
  };
};

const mapDispatchToProps = {
  getProfile,
};



export default compose(connect(mapStateToProps,mapDispatchToProps), withAuthRedirect,withRouter)(ProfileContainer)