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
        const miniSeller = { _id, name, imgUrl }
        console.log('mini seller', miniSeller);
        const miniBuyer = this.getBuyer()
        console.log('miniBuyer', miniBuyer);
        newOrder.createdAt = Date.now();
        newOrder.status = 'Active'
        newOrder.miniSeller = miniSeller
        newOrder.miniBuyer = miniBuyer
        console.log('orderdata', newOrder);
        this.props.addOrder(newOrder);
        // this.setState({ dueDate: '', quantity: '', totalPrice: '' }, () => console.log('orderd!')
        // );
    }
    getBuyer = () => { 
        let {_id, name, imgUrl } = this.props.loggedInUser;
        const miniBuyer = { _id, name, imgUrl }
        return miniBuyer;
    }

    render() {
        const { quantity, totalPrice } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <EventCalendar onDateChange={this.onDateChange} />
                    <input type="number" value={quantity} name="quantity" onChange={this.handleChange}></input>
                    <div>Total Price: {totalPrice}</div>
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