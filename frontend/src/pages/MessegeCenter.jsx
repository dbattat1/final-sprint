import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../cmps/Header";

class UserUsers extends React.Component {
  state = {
    // msgByCreator: null,
    // msgByResponder: null,
  };

  componentDidMount() {
    // this.props.loadUsers();
    // this.setState({ rating: this.props.users })
  }

  render() {
    return (
      <div className="messege-center-container">
        <Header pathname={this.props.location.pathname} />

        <div>messege center</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  loggedInUser: state.user.loggedInUser,
  }
};
// const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MessegeCenter);
