import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCity } from "../actions/cityActions.js";
import { loadProducts, updateProduct } from "../actions/productActions.js";
import { ProductList } from "../cmps/ProductList.jsx";
import TagSearchBar from "../cmps/TagSeacrhBar";
import { Link } from "react-router-dom";
import Header from "../cmps/Header";

class CityPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.loadCity(id);
    this.props.loadProducts({city: id, category:''});
  }

  onRemoveProduct = (user) => {
    const editedUser = { ...user };
    editedUser.product = null;
    this.props.removeProduct(editedUser);
    const { id } = this.props.match.params;
    this.props.loadProducts(id);
  };

  render() {
    const { city } = this.props;
    console.log("PRODUCTS", this.props.products);
    console.log('from city page' ,this.props.location.pathname);
    if (!city) return "Loading";
    return (
      <div className="city-page container">
        <Header pathname={this.props.location.pathname} />

        <div
          className="hero hero-city-page"
          style={{ backgroundImage: `url(${city.thumbnailUrl})` }}
        >
          <p>{`${city.name}`}</p>
        </div>
        {/* <section className="search-bar"> */}
        {/* <TagSearchBar /> */}
        {/* </section> */}

        <ProductList
          users={this.props.products}
          onRemoveProduct={this.onRemoveProduct}
        />
        <section className="city-info">
          <p>{city.info}</p>
          <div className="city-imgs-container">
            <img src={city.imgUrls[0]} alt={city.name} />
            <img src={city.imgUrls[1]} alt={city.name} />
            <img src={city.imgUrls[2]} alt={city.name} />
            <img src={city.imgUrls[3]} alt={city.name} />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.city.currCity,
    products: state.product.products,
  };
};
const mapDispatchToProps = {
  loadCity,
  loadProducts,
  updateProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPage);
