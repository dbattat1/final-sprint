import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from 'semantic-ui-react';

class PersonalDetails extends Component {
    componentDidMount() {
        // this.props.loadCities();
    }


    render() {
        console.log(this.props.loggedInUser);
        const { loggedInUser } = this.props;
        return (
            <div>
                <Image src={loggedInUser.imgUrl} circular size='mini' />
                <div>Full Name: {loggedInUser.name.first} {loggedInUser.name.last}</div>
                <div>Email: {loggedInUser.email}</div>
                <div>Bio: {loggedInUser.bio}</div>
                {/* {loggedInUser.product.city && <div> Location: {loggedInUser.product.city}</div>} */}
                <div>My Product:
                {/* <div>{loggedInUser.product.title}</div>
                    <div>{loggedInUser.product.price}</div>
                    <div> {loggedInUser.product.tags &&
                        product.tags.slice(0, 3).map((tag, idx) => (
                            <li className="tag" key={idx}>
                                {tag}
                            </li>
                        ))}</div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.user.loggedInUser,
    };
};
const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);