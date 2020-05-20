
// import { connect } from 'react-redux';
import cityService from '../services/cityService.js'
import React, { Component } from 'react'



export class Home extends Component {

    componentDidMount() {
        cityService.query()
        .then(res => console.log(res)
        )
        
    }
    
    render() {
        return (
            <div>
                <h1>Hello Final Sprint</h1>
            </div>
        )
    }
}


// const mapStateToProps = (state) => {
//     return {}
// };

// const mapDispatchToProps = {
//     saveToy,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ToyEdit);


