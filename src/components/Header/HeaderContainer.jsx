import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })
      .then((response) => {
        console.log(response.data);
        const { email, id, login } = response.data.data;
        this.props.setAuthUserData(id, email, login);
      });

  };
  render() {
    return (
      <Header {...this.props} />
    )
  };
};
const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
});
const mapDispatchToProps = {
  setAuthUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);