import React from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {

    componentDidUpdate() {

    }
    render() {
        return (

            <div className="main-footer">
                <div className="logo">HEAT</div>
                <small>©2020 all rights reserved</small>
            </div>
        );
    }
}

export default withRouter(Footer);
