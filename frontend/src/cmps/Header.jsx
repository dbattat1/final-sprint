import React from "react";
import { Navbar } from "./Navbar.jsx";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  logout
} from '../actions/userActions.js';


class Header extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            document.getElementById("header").style.backgroundColor = "#706fd3";
            document.getElementById("header").style.boxShadow = "#dcdcdc 0 2px 10px";
        } else {
            document.getElementById("header").style.backgroundColor = "#fae35900";
            document.getElementById("header").style.boxShadow = "none";
        }
      }
    
  render() {
    return (
      <div className="main-header flex" id="header">
        <h1 className="logo flex">Heat</h1>
        {!this.props.loggedInUser && <Link to="/login"><AccountCircleIcon className="login" /></Link>}
        {this.props.loggedInUser && <Link to="/"><AccountCircleIcon onClick={this.props.logout} className="logout" />LogOut</Link>}
        {/* <Navbar/> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.user.loggedInUser,
  };
};
const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
