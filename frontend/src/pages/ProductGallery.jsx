import React, { Component } from "react";
import { connect } from "react-redux";
import { loadAllProducts} from "../actions/productActions.js";
import { ProductList } from "../cmps/ProductList.jsx";
import TagSearchBar from "../cmps/TagSeacrhBar";
import Header from '../cmps/Header';

class ProductGallery extends Component {

  componentDidMount() {
    this.props.loadAllProducts();
  }

  render() {
    console.log("PRODUCTS", this.props.products);
    return (
      <div className="product-gallery container">
      <Header pathname={this.props.location.pathname}/>  

        {/* <TagSearchBar /> */}
        // Another search bar
        <ProductList
          users={this.props.products}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
  };
};
const mapDispatchToProps = {
    loadAllProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGallery);