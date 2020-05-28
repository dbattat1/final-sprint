import React, { Component } from "react";
import { connect } from "react-redux";
import orderService from "../services/orderService";
import { loadOrders } from "../actions/orderActions.js";
import OrderList from "../cmps/OrderList.jsx";
import Header from "../cmps/Header";

class UserProfile extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="user-profile-container">
        <Header pathname={this.props.location.pathname} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
