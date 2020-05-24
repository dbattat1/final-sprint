import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export class Header extends React.Component {

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
        <Link to="/login"><AccountCircleIcon className="login" /></Link>
        {/* <Navbar/> */}
      </div>
    );
  }
}
