import { loadCities } from "../actions/cityActions";
import { connect } from "react-redux";
import React, { Component } from "react";
import CityList from "../cmps/CityList";
import { ProductList } from "../cmps/ProductList";
import CitySearchBar from '../cmps/CitySearchBar';
import productService from '../services/productService'


class Home extends Component {
  state ={
    users: null
  }
  componentDidMount() {
    this.props.loadCities();
    const favIds = ['b101','b102','b103','b104'];
    this.getFavUsers(favIds);
  }

  getFavUsers = (favIds) => {
    productService.getFav(favIds)
      .then(users => 
        this.setState({users : users})
      )}

  render() {
    console.log('loggedin user is:', this.props.loggedInUser)
    return (
      <div className="home-page container">

        <div className="hero hero-home-page">
        </div>
          <CitySearchBar />
        <section className="cities-container">
          <ul>
            <CityList cities={this.props.cities} />
          </ul>
        </section>
        <section className="products-container">
          <h1>Top Rated</h1>
          <ul>
            <ProductList users={this.state.users}/>
          </ul>
        </section>
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
