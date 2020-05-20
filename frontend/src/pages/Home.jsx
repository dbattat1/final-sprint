import {loadCities} from '../actions/cityActions.js';
import { connect } from 'react-redux';
import React, { Component } from 'react';


class Home extends Component {

    componentDidMount() {
        console.log('comp');
        this.props.loadCities()
    
    }

    render() {
        console.log('cities',this.props.cities);
        
        return (
            <div>
               { this.props.cities.length && <h1>{this.props.cities[0].name}</h1> }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
       cities: state.city.cities
    }
};

const mapDispatchToProps = {
    loadCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


