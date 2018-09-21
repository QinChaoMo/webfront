import React, { Component } from 'react';
import { connect } from 'react-redux';

class Auth extends Component {
  render() {
    console.log(this);
    return 'Auth';
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
