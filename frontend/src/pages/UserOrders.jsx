import React, { Component } from "react";
import { connect } from "react-redux";
import orderService from "../services/orderService";
import { loadOrders } from "../actions/orderActions.js";
import OrderList from "../cmps/OrderList.jsx";
import Header from "../cmps/Header";

class UserOrders extends React.Component {
  state = {
    ordersBySeller: null,
    ordersByBuyer: null,
  };

  componentDidMount() {
    // this.props.loadOrders();
    // this.setState({ rating: this.props.orders })
    this.loadOrders();
  }

  loadOrders = () => {
    if (this.props.loggedInUser) {
      const { _id } = this.props.loggedInUser;

      orderService.queryBySeller(_id).then((orders) => {
        this.setState({ ordersBySeller: orders });
      });

      orderService.queryByBuyer(_id).then((orders) => {
        this.setState({ ordersByBuyer: orders });
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header pathname={this.props.location.pathname} />

        <div className="user-orders-container">
          <p>Orders I sold</p>
          <OrderList orders={this.state.ordersBySeller} />
          <p>Orders I bought</p>
          <OrderList orders={this.state.ordersByBuyer} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.user.loggedInUser,
  };
};
const mapDispatchToProps = {
  loadOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);
