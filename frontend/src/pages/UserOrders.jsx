import React, { Component } from 'react'
import { connect } from 'react-redux';

import { loadOrder } from "../actions/orderActions.js";
class UserOrders extends React.Component {
    // state = {
    //     rating: null,
    // }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.loadOrder(id);
    }
    
    render() {
        const { order } = this.props
        console.log('order', order);

        return (
            <div>
                {order && < h1 > order: {order.totalPrice}</h1>}
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.order.currOrder,
    };
};
const mapDispatchToProps = {
    loadOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);