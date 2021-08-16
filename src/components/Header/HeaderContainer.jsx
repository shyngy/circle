
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuth } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuth();
    console.log(this.props);
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
  getAuth
};


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);