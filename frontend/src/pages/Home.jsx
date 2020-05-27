import { loadCities } from "../actions/cityActions";
import { connect } from "react-redux";
import React, { Component } from "react";
import CityList from "../cmps/CityList";
import { ProductList } from "../cmps/ProductList";
import CitySearchBar from "../cmps/CitySearchBar";
import productService from "../services/productService";

class Home extends Component {
  state = {
    favUsers: null,
    chefUsers: null,
    workshopUsers: null,
    tourUsers: null
  };
  componentDidMount() {
    this.props.loadCities();
    const favIds = [
      "5ecbb83a0c2535f563044b9b",
      "5ecbb83a0c2535f563044ba4",
      "5ecbb83a0c2535f563044b9f",
      "5ecbb83a0c2535f563044ba0",
    ];
    const chefIds = [
      "5ecbb83a0c2535f563044b9b", 
      "5ecbb83a0c2535f563044b9e", 
      "5ecbb83a0c2535f563044b9f",
      "5ecbb83a0c2535f563044ba3", 
    ];
    const wShopIds = [
      "5ecbb83a0c2535f563044b9c", 
      "5ecbb83a0c2535f563044b9d", 
      "5ecbb83a0c2535f563044ba0", 
      "5ecbb83a0c2535f563044ba2", 
    ];
    const tourIds = [
      "5ecbb83a0c2535f563044b99", 
      "5ecbb83a0c2535f563044b9a", 
      "5ecbb83a0c2535f563044ba1",
      "5ecbb83a0c2535f563044ba4", 
    ];
    this.getFavUsers(favIds);
    this.getChefUsers(chefIds);
    this.getWShopUsers(wShopIds);
    this.getTourUsers(tourIds);
  }

  getFavUsers = (favIds) => {
    productService
      .getFav(favIds)
      .then((users) => this.setState({ favUsers: users }));
  };
  getChefUsers = (chefIds) => {
    productService
      .getFav(chefIds)
      .then((users) => this.setState({ chefUsers: users }));
  };
  getWShopUsers = (wShopIds) => {
    productService
      .getFav(wShopIds)
      .then((users) => this.setState({ workshopUsers: users }));
  };
  getTourUsers = (tourIds) => {
    productService
      .getFav(tourIds)
      .then((users) => this.setState({ tourUsers: users }));
  };

  render() {
    console.log("loggedin user is:", this.props.loggedInUser);
    return (
      <div className="home-page container">
        <div className="hero hero-home-page" />
        <CitySearchBar />
        <main className="content-container">
          <section className="top-rated products-container">
            <h1>Top Rated</h1>
            <ul>
              <ProductList users={this.state.favUsers} />
            </ul>
          </section>
          <section className="cities-container">
            <h1>Top Destinations</h1>
            <ul>
              <CityList cities={this.props.cities} />
            </ul>
          </section>
          <section className="top-chefs products-container">
            <h1>Private Chefs</h1>
            <ul>
              <ProductList users={this.state.chefUsers} />
            </ul>
          </section>
          <section className="top-workshops products-container">
            <h1>Cooking Workshops</h1>
            <ul>
              <ProductList users={this.state.workshopUsers} />
            </ul>
          </section>
          <section className="top-tours products-container">
            <h1>Culinary Tours</h1>
            <ul>
              <ProductList users={this.state.tourUsers} />
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.city.cities,
    loggedInUser: state.user.loggedInUser,
  };
};

const mapDispatchToProps = {
  loadCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
