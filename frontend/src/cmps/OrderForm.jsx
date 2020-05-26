import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import EventCalendar from './EventCalendar';
import { addOrder } from '../actions/orderActions';

class OrderForm extends React.Component {
    state = {
        dueDate: Date.now(),
        quantity: 0,
        totalPrice: 0,
    }

    onDateChange = (eventDate) => {
        this.setState({ dueDate: eventDate })
    }

    handleChange = (ev) => {
        console.log(this.props.seller.product.price);
        let { name, value } = ev.target;
        value = ev.target.type === 'number' ? parseInt(value) : value;
        let totalPrice = (value * this.props.seller.product.price)
        this.setState({ [name]: value }, () => this.setState({ totalPrice }),
            () => console.log('state after change', this.state)
        );
        // this.setState({ totalPrice })

    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state);
        const newOrder = this.state;
        console.log(newOrder);
        let { _id, name, imgUrl } = this.props.seller
        const seller = { _id, name, imgUrl }
        console.log('mini seller', seller);
        const buyer = this.getBuyer()
        console.log('miniBuyer', buyer);
        newOrder.createdAt = Date.now();
        newOrder.status = 'Active';
        newOrder.seller = seller;
        newOrder.buyer = buyer;
        this.props.addOrder(newOrder);
        console.log('orderd!', newOrder);
    }
    getBuyer = () => {
        let { _id, name, imgUrl } = this.props.loggedInUser;
        const buyer = { _id, name, imgUrl }
        return buyer;
    }

    render() {
        const { quantity, totalPrice } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <EventCalendar onDateChange={this.onDateChange} />
                    <input type="number" value={quantity} name="quantity" onChange={this.handleChange} min="0"></input>
                    <div>Total Price: ${totalPrice}</div>
                    <button>Order</button>
                </form>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.user.loggedInUser,
    };
};


const mapDispatchToProps = {
    addOrder
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderForm));