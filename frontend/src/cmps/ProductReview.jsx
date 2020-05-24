import React, { Component } from 'react';
import { connect } from 'react-redux';
import productService from '../services/productService.js';
import { loadProducts, updateProduct } from '../actions/productActions.js';
import { ReviewAdd } from '../cmps/ReviewAdd.jsx'


class ProductReview extends Component {
    state = {
        reviews: []
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
        console.log('at review productreview', reviews);
        return (
            <div className="review-container flex column">
                {reviews.map((review, idx) =>
                    <div key={idx}>
                        <h1 >{review.rate}</h1>
                        <p >{review.txt}</p>
                        <h2>{review.byUser.name}</h2>
                        <img>{review.byUser.createdBy}</img>
                    </div>
                )}
             <button>Add Review</button>
                <ReviewAdd onAddReview={this.onAddReview} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.product.product,
    };
};

const mapDispatchToProps = {
    loadProducts,
    updateProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductReview)



