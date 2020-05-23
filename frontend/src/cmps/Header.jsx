import React from "react";
import { Navbar } from "./Navbar.jsx";

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
      <div className="main-header" id="header">
        <h2>Our Header</h2>
        {/* <Navbar/> */}
      </div>
    );
  }
}
