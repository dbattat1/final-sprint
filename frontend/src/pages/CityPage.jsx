import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadCity } from '../actions/cityActions.js';

export class CityPage extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.loadCity(id);
    }
    
    render() {
        const { city } = this.props;
        return (
            <div>
                <h1>city._id</h1>
                <h1>city.name</h1>
                <p>city.info</p>
                {city.imgUrls.map(imgurl => <img src={imgurl}></img>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.city.currCity,
    };
};
const mapDispatchToProps = {
   loadCity
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPage);