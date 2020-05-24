import React, { Component } from 'react'
import { Button, Dropdown, Input, Form, TextArea } from 'semantic-ui-react'
// import { connect } from 'react-redux';


export class ReviewAdd extends Component {
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
        reviewToAdd.byUser = {
            _id: "b120",
            name: "Alexi Von-Moskva",
            imgUrl: "https://drive.google.com/uc?id=1CRTUFCJAzwxYqZEGigD6v8UPVz7f7kvX"
        }
        this.props.onAddReview(reviewToAdd)
        this.setState({ txt: '', rate: 0 })
    };

    render() {
        // console.log(this.state);
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
                    <div>
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
                    </div>
                    <button>Save</button>
                </form>
            </div>
        )
    }
}