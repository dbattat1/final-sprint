import React, { Component } from "react";
import { connect } from "react-redux";
import { loadAllProducts} from "../actions/productActions.js";
import { ProductList } from "../cmps/ProductList.jsx";
import TagSearchBar from "../cmps/TagSeacrhBar";

class ProductGallery extends Component {
  state = {
    products: null
  }
  
  componentDidMount() {
    this.props.loadAllProducts();
    // console.log(this.props.products);
  }

  onChangeList = (filterBy) => {
      
  }

  render() {
    console.log("PRODUCTS", this.props.products);
    return (
      <div className="product-gallery container">
        <TagSearchBar />
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