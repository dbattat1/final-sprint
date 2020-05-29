import React, { Component } from "react";
import { connect } from "react-redux";
import orderService from "../services/orderService";
import { loadOrders } from "../actions/orderActions.js";
import OrderList from "../cmps/OrderList.jsx";
import Header from "../cmps/Header";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import MessageIcon from '@material-ui/icons/Message';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import UserOrders from './UserOrders';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import PersonalDetails from './PersonalDetails.jsx'

class UserProfile extends React.Component {
  state = {
    isOrder: '',
    isPersonal: 'tt',
    isMesseges: ''
  };

  componentDidMount() { }
  useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  }));

  openOrders = (tab) => {
    this.setState({isPersonal: '', isMesseges: ''})
    if (!tab || tab === 'buyer') {
      this.setState({ isOrder: 'buyer' })
    }
    else this.setState({ isOrder: 'seller' })
  }

  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        <div className="user-profile-container flex">
          <List component="nav" className="profile-menu">
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <AccountCircleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Profile" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <LocalGroceryStoreIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Orders" onClick={this.openOrders} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <MessageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Messeges" />
            </ListItem>
          </List>
          <div className="profile-main-content">
            {this.state.isOrder && <div>
              <div className="ui secondary pointing menu">
                <div onClick={() => this.openOrders('buyer')}
                  className={`item ${this.state.isOrder === "buyer" ? "active" : ''}`} >My Orders</div>
                <div onClick={() => this.openOrders('seller')} className={`item ${this.state.isOrder === "seller" ? "active" : ''}`}>My Sales</div>
              </div>
              <div className="ui segment">
                {<UserOrders ordersTypes={this.state.isOrder} />}
              </div>
            </div>}
            {this.state.isPersonal && <PersonalDetails />}
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => { };
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);




