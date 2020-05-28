import React, { Component } from "react";
import { connect } from "react-redux";
import { Select } from "semantic-ui-react";

export class TagSearchBar extends Component {
  state = {
      city: '',
      category: ''
  }
  
  // handleChange = (e, {value}) => {
  //   this.props.onChangeFilterBy(value);
    
  // }

  render() {
    return (
      <div className="tag-search-bar">
        <Select
          placeholder={this.props.placeholder}
          size="huge"
          closeOnChange
          name={this.props.name}
          value={this.props.value}
          options={this.props.options}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}