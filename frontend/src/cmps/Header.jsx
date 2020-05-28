import React from "react";
import { Navbar } from "./Navbar.jsx";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { logout } from "../actions/userActions.js";

class Header extends React.Component {
  componentDidMount() {
    if (this.props.pathname === "/") {
      window.addEventListener("scroll", this.handleScroll);
    };

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    console.log("handle scroll of header:", this.props.pathname);

    if (
      document.body.scrollTop > 450 ||
      document.documentElement.scrollTop > 450
    ) {
      document.querySelector(".main-header").style.background = "#636e72";
      document.querySelector(".main-header").style.boxShadow =
        "#dcdcdc 0 2px 10px";
      document.querySelector(".main-header").style.height = "3.7em";
    } else {
      document.querySelector(".main-header").style.background = "none";
      document.querySelector(".main-header").style.boxShadow = "none";
      document.querySelector(".main-header").style.height = "4.7em";
    }
  };

  render() {
   
    return (
      <div
        className={
          this.props.pathname === "/" ? "main-header" : "main-header-regular"
        }
      >
        <Link to="/">
          <div className="logo">HEAT</div>
        </Link>
        <div className="header-nav">
          {!this.props.loggedInUser && (
            <Link to="/login">
              <AccountCircleIcon className="login" />
            </Link>
          )}
          {this.props.loggedInUser && (
            <Link
              to="/"
              // <AccountCircleIcon
              onClick={this.props.logout}
              className="logout"
            >
              Log-out
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
