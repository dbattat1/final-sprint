import React from "react";
import { Navbar } from "./Navbar.jsx";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { logout } from "../actions/userActions.js";

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (
      document.body.scrollTop > 450 ||
      document.documentElement.scrollTop > 450
    ) {
      document.getElementById("header").style.background = "#636e72";
      document.getElementById("header").style.boxShadow = "#dcdcdc 0 2px 10px";
      document.getElementById("header").style.height = "3.7em";
    } else {
      document.getElementById("header").style.background =
        "linear-gradient(rgb(45, 52, 54) 0%, rgba(99, 110, 114, 0.6) 55%, rgba(223, 230, 233, 0) 100%)";
      document.getElementById("header").style.boxShadow = "none";
      document.getElementById("header").style.height = "4.7em";
    }
  };

  render() {
    return (
      <div className="main-header" id="header">
        <div className="logo">HEAT</div>
        <div className="header-nav">
          <Link to="/">
            <RestaurantIcon
            className="events-nav-icon" />
          </Link>
          {!this.props.loggedInUser && (
            <Link to="/login">
              <AccountCircleIcon className="login" />
            </Link>
          )}
          {this.props.loggedInUser && (
            <Link to="/">
              <AccountCircleIcon
                onClick={this.props.logout}
                className="logout"
              />
              LogOut
            </Link>
          )}
        </div>
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
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
