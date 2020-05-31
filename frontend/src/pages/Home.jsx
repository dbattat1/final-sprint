import { loadCities } from "../actions/cityActions";
import { connect } from "react-redux";
import React, { Component } from "react";
import CityList from "../cmps/CityList";
import { ProductList } from "../cmps/ProductList";
import CitySearchBar from "../cmps/CitySearchBar";
import productService from "../services/productService";
import Header from '../cmps/Header';
import { Link } from "react-router-dom";


document.body.classList.add('home');

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
      "5ecbb83a0c2535f563044b9f", 
      "5ed26763757ca025f58f39de",
      "5ecbb83a0c2535f563044b9d"
    ];
    const chefIds = [
      "5ecfc4f7d44f5a6943bfa99e",
      "5ed2d2e871d6da0d6fe1eb02",
      "5ecbb83a0c2535f563044ba3",
      "5ed2d2dc71d6da0d6fe1e768",
    ];
    const wShopIds = [
      "5ecbb83a0c2535f563044b9c",
      "5ed2d2f771d6da0d6fe1ee2b",
      "5ed2d2d171d6da0d6fe1e105",
      "5ecbb83a0c2535f563044ba2",
    ];
    const tourIds = [
      "5ed2d2ac71d6da0d6fe1da9f",
      "5ecbb83a0c2535f563044b9a",
      "5ecbb83a0c2535f563044ba1",
      "5ed2d2b971d6da0d6fe1dd24",
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
    return (
      <div className="home-page container">
        <Header pathname={this.props.location.pathname} />
        <div className="hero hero-home-page" />
        <CitySearchBar />
        <main className="content-container">
          <section className="top-rated products-container">
            <div className="see-more flex justify-center space-between">
              <h1>Top Rated</h1>
              <Link to={`/gallery`}>See More >></Link>
            </div>
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
            <div className="see-more flex justify-center space-between">
              <h1>Dining Experiences</h1>
              <Link to={`/gallery`}>See More >></Link>
            </div>
            <ul>
              <ProductList users={this.state.chefUsers} />
            </ul>
          </section>
          <section className="top-workshops products-container">
            <div className="see-more flex justify-center space-between">
              <h1>Cooking Workshops</h1>
              <Link to={`/gallery`}>See More >></Link>
            </div>
            <ul>
              <ProductList users={this.state.workshopUsers} />
            </ul>
          </section>
          <section className="top-tours products-container">
            <div className="see-more flex justify-center space-between">
              <h1>Culinary Tours</h1>
              <Link to={`/gallery`}>See More >></Link>
            </div>
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
