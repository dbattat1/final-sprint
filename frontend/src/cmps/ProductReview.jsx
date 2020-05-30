import React, { Component } from 'react';
import { connect } from 'react-redux';
import productService from '../services/productService.js';
import { loadProducts, updateProduct } from '../actions/productActions.js';
import ReviewAdd from '../cmps/ReviewAdd.jsx'
import Button from '@material-ui/core/Button';


class ProductReview extends Component {
    state = {
        reviews: [],
        isAddReviewOn: false,
        // loggedInUser: null
    }
    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        const { id } = this.props;

        productService.get(id).then(user => {
            this.setState({ ...user.product });
        })
    }
    onOpenAdd = () => {
        this.setState({ isAddReviewOn: true })
    }
    onAddReview = (newReview) => {
        this.setState(prevState => ({ reviews: [...prevState.reviews, newReview] }));
        const { id } = this.props;
        productService.get(id)
            .then(user => {
                user.product.reviews.push(newReview);
                this.props.updateProduct(user);
            })
    }

    render() {  
        const { reviews } = this.state
        return (
            <div className="review-container flex column">
                {reviews && reviews.map((review, idx) =>
                    <div key={idx}>
                        <h1 >{review.rate}</h1>
                        <p >{review.txt}</p>
                        <h2>{review.byUser.name.first} {review.byUser.name.last}</h2>
                        <img>{review.byUser.createdBy}</img>
                    </div>
                )}
                <Button className="add-btn" variant="contained" onClick={this.onOpenAdd}>Add Review</Button>
                {this.state.isAddReviewOn && <ReviewAdd onAddReview={this.onAddReview} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.product.product,
        loggedInUser: state.user.loggedInUser
    };
};

const mapDispatchToProps = {
    loadProducts,
    updateProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductReview)



