import React, { Component } from "react";
import { connect } from "react-redux";
import { Select } from "semantic-ui-react";
import { loadCities } from "../actions/cityActions";

class CitySearchBar extends Component {
  componentDidMount() {
    this.props.loadCities();
  }

  getCitiesForDropDown() {
    return this.props.cities.map((city) => {
      return { value: city._id, text: city.name };
    });
  }

  render() {
    return (
      <div className="city-search-bar">
          <Select
            placeholder="Choose a city"
            size="huge"
            value=""
            options={this.getCitiesForDropDown()}
            onChange={() => console.log(this.value)}
          />
        
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

export default connect(mapStateToProps, mapDispatchToProps)(CitySearchBar);
