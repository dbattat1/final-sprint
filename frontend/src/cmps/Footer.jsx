import React from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {

    componentDidUpdate() {
        // both works! 
        // console.log('g', window.location.pathname);
        // console.log('bb', this.props.history.location.pathname);
    }
    render() {
        return (
            // <div className="main-footer">
            // <div  className= {this.props.history.location.pathname === "/" ? "main-footer" : "main-footer-test"}>
            <div className="main-footer">
                <div className="logo">HEAT</div>
                <small>©2020 all rights reserved</small>
            </div>
        );
    }
}

export default withRouter(Footer);
