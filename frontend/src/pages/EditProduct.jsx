import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProducts, updateProduct } from '../actions/productActions.js';
import productService from '../services/productService.js';

class EditProduct extends Component {
    state = {
        title: '',
        price: '',
    };

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        const { id } = this.props.match.params;
        if (!id) return;
        
        productService.get(id).then(user => {
            this.setState({ ...user.product });
        })

        
    }

    handleChange = (ev) => {
        let { name, value } = ev.target;  
        value = ev.target.type === 'number' ? parseInt(value) : value;
        this.setState({ [name]: value });
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        const { id } = this.props.match.params;
        if (!id) return;
        productService.get(id)
            .then(user => {
            user.product = this.state;
            this.props.updateProduct(user);
        })
    };

    render() {
        console.log(this.state);
        const { title, price } = this.state;
        return (
            <div>
                BBBB
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        title:
                            <input
                            value={title}
                            type="text"
                            name="title"
                            required
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                            <input
                            value={price}
                            type="number"
                            name="price"
                            required
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <button>Save</button>
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
