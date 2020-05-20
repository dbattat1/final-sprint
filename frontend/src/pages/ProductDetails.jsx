import { loadProduct } from '../actions/productActions';
import React from 'react';
import { connect } from 'react-redux';

class ProductDetails extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.loadProduct(id);
  }

  render() {
    const { product } = this.props;

    if (!product) return 'Loading...';

    return <div className="">
      <h1>Product: {product.title}</h1>
      <h2>Price: {product.price}</h2>
      <p>{product.description}</p>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.currProduct,
  };
};


const mapDispatchToProps = {
  loadProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);