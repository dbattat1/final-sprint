import React from "react";
import { Navbar } from "./Navbar.jsx";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logout } from "../actions/userActions.js";

class Header extends React.Component {
  componentDidMount() {
    if (this.props.pathname === "/" || this.props.pathname === `/${this.props.city}`) {
      window.addEventListener("scroll", this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (
      document.body.scrollTop > 450 ||
      document.documentElement.scrollTop > 450
    ) {
      document.querySelector(".main-header").style.background = "#636e72";
      document.querySelector(".main-header").style.boxShadow = "0 1px 3px #0000006b";
    
    } else {
      document.querySelector(".main-header").style.background = "none";
      document.querySelector(".main-header").style.boxShadow = "none";
    }
  };

  render() {
    return (
      <div
        className={
          this.props.pathname === "/" || this.props.pathname === `/${this.props.city}` ? "main-header" : "main-header-regular"
        }
      >
        <Link to="/">
          <div className="logo">HEAT</div>
        </Link>
        <div className="header-nav">
          {this.props.loggedInUser && (
            <div className="welcome-user-nav">
              Hello, {this.props.loggedInUser.name.first}!
            </div>
          )}
          {this.props.loggedInUser && (
            <Link to="/profile">
              <ListAltIcon className="order-icon-nav" />
            </Link>
          )}
          {!this.props.loggedInUser && (
            <Link to="/auth">
              <AccountCircleIcon className="login-icon-nav" />
            </Link>
          )}
          {this.props.loggedInUser && (
            <Link to="/">
              <ExitToAppIcon className="logout-icon-nav" onClick={this.props.logout} />
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
