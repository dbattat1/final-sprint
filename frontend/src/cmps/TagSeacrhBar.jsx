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
<<<<<<< HEAD
      <div className="">
          <Select
            placeholder="Filter Events"
            size="huge"
            value=""
            options={this.getCitiesForDropDown()}
            onChange={() => console.log(this.value)}
          />
        
=======
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
>>>>>>> 4e5b200c23dae3f37b4826d9b58eaedc3cfa6dc5
      </div>
    );
  }
}