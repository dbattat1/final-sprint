import React, { Component } from "react";
import { connect } from "react-redux";
import { loadProducts} from "../actions/productActions.js";
import { ProductList } from "../cmps/ProductList.jsx";
import Header from '../cmps/Header';
import { TagSearchBar } from "../cmps/TagSeacrhBar";
import { loadCities } from "../actions/cityActions";


class ProductGallery extends Component {
  state = {
    city: '',
    category: ''
  }
  
  componentDidMount() {
    // this.props.loadAllProducts();
    // console.log(this.props.products);
    this.props.loadCities();
    this.onChangeFilterBy();
  }
  
  getCitiesForDropDown() {
    let options = [{ value: '', text: 'All cities' }]
    return options.concat(this.props.cities.map((city) => {
      return { value: city._id, text: city.name };
    }));
  }
  
  onChangeFilterBy = () => {
    // let filterBy = {city: '5ecac62d860e88985ad9510a', category: 'Culinary tour'}
    // filterBy = {city: '', category: ''}
    // filterBy = {}
    // this.setState(prevState => ({...prevState, filterBy: filterBy }))
    let filterBy = this.state
    this.props.loadProducts(filterBy);
  }

  handleChange = (e, {value, name}) => {

    console.log(value, name);
    
    // let { name, value } = e.target;
    // value = e.target.type === 'number' ? parseInt(value) : value;
    this.setState({ [name]: value }, () => {
      let filterBy = this.state
      this.props.loadProducts(filterBy);
    });
};

  render() {
    console.log("PRODUCTS", this.props.products);
    console.log('the state is', this.state);
    
    const categories=[{ value: '', text: 'All experiences' },{ value: 'Culinary tour', text: 'Culinary tour' }, { value: 'Cooking workshop', text: 'Cooking workshop' }, 
      { value: 'Dining experience', text: 'Dining experience' }];
    return (
      <div className="product-gallery container">
      <Header pathname={this.props.location.pathname}/>  
        <div className="tag-search container flex">
        <TagSearchBar options={this.getCitiesForDropDown()} name={'city'} handleChange={this.handleChange} placeholder={'Choose city'} />
        <TagSearchBar options={categories} name={'category'} handleChange={this.handleChange} placeholder={'Choose category'} />
        </div>
        <ProductList
          users={this.props.products}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    cities: state.city.cities,
  };
};
const mapDispatchToProps = {
    loadProducts,
    loadCities,
    // loadProductsByFilter
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductGallery);