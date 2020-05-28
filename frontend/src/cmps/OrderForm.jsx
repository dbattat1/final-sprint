import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import EventCalendar from "./EventCalendar";
import { addOrder } from "../actions/orderActions";

class OrderForm extends React.Component {
  state = {
    dueDate: Date.now(),
    quantity: 1,
    totalPrice: 0,
    msg: "",
  };
  componentDidMount() {
    let totalPrice = this.state.quantity * this.props.seller.product.price;
    this.setState({ totalPrice });
  }

  onDateChange = (eventDate) => {
    this.setState({ dueDate: eventDate });
  };

  handleChange = (ev) => {
    console.log(this.props.seller.product.price);
    let { name, value } = ev.target;
    value = ev.target.type === "number" ? parseInt(value) : value;
    let totalPrice = value * this.props.seller.product.price;
    this.setState({ [name]: value, totalPrice });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const newOrder = this.state;
    console.log(newOrder);
    const seller = this.getMiniSeller();
    const buyer = this.getMiniBuyer();
    console.log("miniBuyer", buyer, "mini seller", seller);
    newOrder.createdAt = Date.now();
    newOrder.status = "Active";
    newOrder.seller = seller;
    newOrder.buyer = buyer;
    this.props.addOrder(newOrder);
    this.setState({
      msg: "Booked!",
      quantity: 1,
      totalPrice: 1 * this.props.seller.product.price,
      dueDate: Date.now(),
    });

    console.log("orderd!", newOrder);
  };

  getMiniBuyer = () => {
    let { _id, name, imgUrl } = this.props.loggedInUser;
    const buyer = { _id, name, imgUrl };
    return buyer;
  };

  getMiniSeller = () => {
    let { _id, name, imgUrl } = this.props.seller;
    const seller = { _id, name, imgUrl };
    return seller;
  };

  render() {
    const { quantity, totalPrice } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <EventCalendar
              className="form-calendar"
              onDateChange={this.onDateChange}
            />
          <input
            className="form-quantity"
            type="number"
            value={quantity}
            name="quantity"
            onChange={this.handleChange}
            min="0"
          ></input>
          <div className="form-total-price">Total Price: ${totalPrice}</div>
          <button>Order</button>
        </form>
        {this.state.msg && <div>{this.state.msg}</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.user.loggedInUser,
  };
};

const mapDispatchToProps = {
  addOrder,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OrderForm)
);
