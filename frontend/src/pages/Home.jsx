import { loadCities } from "../actions/cityActions";
import { connect } from "react-redux";
import React, { Component } from "react";
import CityList from "../cmps/CityList";

class Home extends Component {
  componentDidMount() {
    console.log("comp");
    this.props.loadCities();
  }

  render() {
    console.log("cities", this.props.cities);

    return (
      <div>
        <header>
          <div>LOGO HERE</div>
          <div>NAVBAR HERE</div>
        </header>
        <div className="hero hero-home-page">
          <img
            className="home-page-img"
            src="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          />
          <h1>Welcome To Our Amazing Food Lovers App</h1>
          <input placeholder="Search Bar" />
          <button>Search</button>
        </div>
        <section className="cities-container">
          <ul>
            <CityList cities={this.props.cities} />
          </ul>
        </section>
        <section className="products-container">
            <ul>
                
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
