import React, { Component } from 'react'
import { Button, Dropdown, Input, Form, TextArea } from 'semantic-ui-react'
// import { connect } from 'react-redux';
import ReviewRate from './ReviewRate.jsx';
import { connect } from "react-redux";


class ReviewAdd extends Component {
    state = {
        txt: '',
        rate: 0
    }

    handleChange = (ev) => {
        let { name, value } = ev.target;
        value = ev.target.type === 'number' ? parseInt(value) : value;
        this.setState({ [name]: value });
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        const reviewToAdd = this.state;
        reviewToAdd.createdAt = Date.now();
        const { loggedInUser } = (this.props)
        reviewToAdd.byUser = (loggedInUser)? 
        {_id : loggedInUser._id,
        name: loggedInUser.name,
        imgUrl: loggedInUser.imgUrl
        }:
        {
            _id: "guest_id",
            name: {first: "Guest",
                    last: "Guestman"},
            imgUrl: "https://drive.google.com/uc?id=1CRTUFCJAzwxYqZEGigD6v8UPVz7f7kvX"
        };
        this.props.onAddReview(reviewToAdd)
        this.setState({ txt: '', rate: 0 })
    };

    rate = (val) => {
        console.log('val', val)
        this.setState({ rate: +val })
    }

    render() {
        // console.log('the state is', this.state);
        const { txt, rate } = this.state;
        return (
            <div className="product-review">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Your Review:
                            <Input
                                value={txt}
                                type="text"
                                name="txt"
                                required
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <ReviewRate rate={this.rate} />
                    {/* <div>
                        <label>Rate the expreience:</label>
                        <select name="rate"
                            value={rate}
                            type="number"
                            name="rate"
                            required
                            onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div> */}
                    <button>Save</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.user.loggedInUser,
    };
};

//   const mapDispatchToProps = {

//   };

export default connect(mapStateToProps)(ReviewAdd);