import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadCity } from '../actions/cityActions.js';
import { loadProducts, updateProduct } from '../actions/productActions.js';
import { ProductList } from '../cmps/ProductList.jsx';
import { Link } from 'react-router-dom';

class CityPage extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.loadCity(id);
        this.props.loadProducts(id);
    }

    onRemoveProduct = (user) => {
        const editedUser = { ...user }
        editedUser.product = null;
        this.props.removeProduct(editedUser);
        const { id } = this.props.match.params;
        this.props.loadProducts(id);
    }

    render() {
        const { city } = this.props;
        // console.log('CITY', city);
        // console.log('PRODUCTS', this.props.products)
        if (!city) return 'Loading';
        return (
            <div className="city-page">
                <h1>Expreince {`${city.name}`}!</h1>
                <p>{city.info}</p>
                <img src={city.imgUrls[0]}></img>
                {/* {city.imgUrls.map((imgurl, idx) => <img key={idx} src={imgurl}></img>)} */}
                <ProductList users={this.props.products} onRemoveProduct={this.onRemoveProduct} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.city.currCity,
        products: state.product.products
    };
};
const mapDispatchToProps = {
    loadCity,
    loadProducts,
    updateProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPage);