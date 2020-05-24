import { loadProduct, updateProduct } from '../actions/productActions';
import React from 'react';
import { connect } from 'react-redux';
import { EventCalendar } from '../cmps/EventCalendar'
import ProductReview from '../cmps/ProductReview.jsx'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import  productService  from '../services/productService.js';

class ProductDetails extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.loadProduct(id);
  }

  onRemoveProduct = () => {
    const { id } = this.props.match.params;
    if (!id) return;

    productService.get(id).then(user => {
      const editedUser = { ...user }
      const cityId = editedUser.product.city._id;
      editedUser.product = null;
      this.props.updateProduct(editedUser);
      this.props.history.push(`/${cityId}`); 

    })
  }



  render() {
    const { product } = this.props;
    console.log(product);

    if (!product) return 'Loading...';
    return <div className="">
      <div className="product-header flex column justify-center align-center">
        <div className="title flex row">
          <h1>{product.title}</h1>
          <h3>{product.city.name}</h3>
          <div style={{ zIndex: 100 }}>
            <Link to={`/edit/${this.props.match.params.id}`}><button>✎</button></Link>
            <button onClick={this.onRemoveProduct}><i className="trash icon"></i></button>
          </div>
        </div>
        <h4>★8.2/10</h4>
      </div>
      <div className="product-img-container">
        <img alt="" className="prime-photo" src="https://fodmap-publicsite-us-east-2.s3.amazonaws.com/production/media/images/people_eating_.original.jpg" />
        <img alt="" src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg" />
        <img alt="" src="https://cdn.pixabay.com/photo/2017/11/18/17/09/strawberry-2960533_1280.jpg" />
        <img alt="" src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg" />
        <img alt="" src="https://cdn.pixabay.com/photo/2016/03/09/15/30/breakfast-1246686_1280.jpg" />
      </div>

      <div className="product-main-container flex space-around">
        <div className="content flex column">
          <h2>Lorem ipsum dolor sit amet, consectetur</h2>
          <p>{product.description}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2>price per person: ${product.price}</h2>
          <ProductReview id={this.props.match.params.id} />
        </div>
        <EventCalendar />
      </div>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.currProduct,
  };
};


const mapDispatchToProps = {
  loadProduct,
  updateProduct
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetails));