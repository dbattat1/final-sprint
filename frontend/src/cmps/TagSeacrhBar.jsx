import React, { Component } from "react";
import { connect } from "react-redux";
import { Select } from "semantic-ui-react";
import { loadCities } from "../actions/cityActions";

class TagSearchBar extends Component {
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
      <div className="">
          <Select
            placeholder="Filter Events"
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

export default connect(mapStateToProps, mapDispatchToProps)(TagSearchBar);
