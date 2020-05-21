import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProducts } from '../actions/productActions.js';
import productService from '../services/productService.js';

class BecomeASeller extends Component {
    state = {
        title: '',
        price: 75,
        city: {
          _id: '',
          name: '',
          imgUrl: ''
        }
    };

    loadUser() {
        const { id } = this.props.match.params;
        if (!id) return;
        
        productService.get(id).then(product => {
            this.setState({ ...product.product });
        })
    }

    render() {
        return (
            <div>
                
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
    loadProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(BecomeASeller)
