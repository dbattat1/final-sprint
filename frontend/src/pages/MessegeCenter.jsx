import React, { Component } from 'react'
import { connect } from 'react-redux';


class UserUsers extends React.Component {
    state = {
        // msgByCreator: null,
        // msgByResponder: null,
    }

    componentDidMount() {
        // this.props.loadUsers();
        // this.setState({ rating: this.props.users })
    }

    render() {
        return (
            <div className="messege-center-container">
                <div>messege center</div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {

};
const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MessegeCenter);