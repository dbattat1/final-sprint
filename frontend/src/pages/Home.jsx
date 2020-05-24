import { loadCities } from "../actions/cityActions";
import { connect } from "react-redux";
import React, { Component } from "react";
import CityList from "../cmps/CityList";
import ProductList from "../cmps/ProductList";
import CitySearchBar from '../cmps/CitySearchBar';

class Home extends Component {
  componentDidMount() {
    this.props.loadCities();
  }

  render() {
    return (
      <div className="home-page container">
        <div className="hero hero-home-page">
          <CitySearchBar />
        </div>
        <section className="products-container">
          <h1>Top Rated</h1>
          <ul>

          </ul>
        </section>
        <section className="cities-container">
          <ul>
            <CityList cities={this.props.cities} />
          </ul>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.city.cities,
  };
};

const mapDispatchToProps = {
  loadCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
