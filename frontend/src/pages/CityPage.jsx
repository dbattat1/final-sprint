import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadCity } from '../actions/cityActions.js';
import { loadProducts } from '../actions/productActions.js';

class CityPage extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.loadCity(id);
        this.props.loadProducts(id);
    }
    
    render() {
        const { city } = this.props;
        console.log(city);
        if (!city) return 'Loading';
        return (
            <div>
                {/* <ProductList id={this.props.match.params}/> */}
                <h1>{city._id}</h1>
                <h1>{city.name}</h1>
                <p>{city.info}</p>
                {city.imgUrls.map((imgurl, idx) => <img key={idx} src={imgurl}></img>)}
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
   loadProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPage);