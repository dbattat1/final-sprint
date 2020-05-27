import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { loadCities } from "../actions/cityActions";
import { withRouter } from "react-router";

class CitySearchBar extends Component {
  componentDidMount() {
    this.props.loadCities();
  }

  getCitiesForDropDown() {
    return this.props.cities.map((city) => {
      return { value: city._id, text: city.name };
    });
  }

  handleChange = (e, {value}) => {
    if (value) {
       this.props.history.push(`/${value}`);   
    }
  }

  render() {
    return (
      <div className="city-search-bar">
          <Dropdown className="icon"
            text="Where do you want to eat?"
            icon="search"
            button
            search
            labeled
            floating
            size="huge"
            value=""
            options={this.getCitiesForDropDown()}
            onChange={this.handleChange.bind(this)}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CitySearchBar));
