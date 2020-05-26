import React, { Component } from 'react'
import { connect } from 'react-redux';
import orderService from "../services/orderService";
import { loadOrders } from "../actions/orderActions.js";
class UserOrders extends React.Component {
    state = {
        ordersBySeller: null,
    }

    componentDidMount() {
        // this.props.loadOrders();
        // this.setState({ rating: this.props.orders })
        this.loadOrders();
    }

    loadOrders = () => {
        console.log('sasa');
        if (this.props.loggedInUser) {

            const { _id } = this.props.loggedInUser
            console.log('_id is', this.props.loggedInUser._id);

            orderService.queryBySeller(_id).then(orders => {
                console.log('The orders by seller id', orders)
                this.setState({ ordersBySeller: orders });
            })
        }
    }

    render() {
        // console.log('at UserOrder - orders', this.state.ordersBySeller);

        return (
            <div>
                < h1 >It renders</h1>
            </div >
        )
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