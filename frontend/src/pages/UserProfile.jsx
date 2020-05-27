import React, { Component } from 'react'
import { connect } from 'react-redux';
import orderService from "../services/orderService";
import { loadOrders } from "../actions/orderActions.js";
import  OrderList from "../cmps/OrderList.jsx";

class UserProfile extends React.Component {
    state = {
      
    }

    componentDidMount() { 
    }

 

    render() {
        return (
            <div className="user-profile-container">
              
            </div >
        )
    }
}

const mapStateToProps = (state) => {
  
};
const mapDispatchToProps = {
 
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);