import { loadProduct, updateProduct } from "../actions/productActions";
import { addOrder, updateOrder } from "../actions/orderActions";
import React from "react";
import { connect } from "react-redux";
import OrderForm from "../cmps/OrderForm.jsx";
import ProductReview from "../cmps/ProductReview.jsx";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import productService from "../services/productService.js";
import Header from "../cmps/Header";
import { Spinner } from 'react-bootstrap'


class ProductDetails extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.loadProduct(id);
  }

  onRemoveProduct = () => {
    const { id } = this.props.match.params;
    if (!id) return;

    productService.get(id).then((user) => {
      const editedUser = { ...user };
      const cityId = editedUser.product.city._id;
      editedUser.product = null;
      this.props.updateProduct(editedUser);
      this.props.history.push(`/${cityId}`);
    });
  };

  render() {
    const { user } = this.props;
    if (!user)
      // return <div style={{ height: 4000, width: "100%" }}>Loading...</div>;
      return <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>;
    const { product } = user;
    const reducer = (acc, curr) => acc + curr;
    const hasReviews = !(!product.reviews || product.reviews.length === 0);
    
    let rate; 
    if (hasReviews) {
      const rateArr = product.reviews.map((review) => review.rate);
      rate = (rateArr.reduce(reducer) / rateArr.length).toFixed(1);
    }
    return (
      <div className="product-page">
        <Header pathname={this.props.location.pathname} />
        <section className="product-page-header">
          <div className="product-page-title">
            <div>{product.title} &nbsp; &nbsp; {hasReviews && <React.Fragment><span>★</span> {rate}</React.Fragment>}</div>
            <div className="product-page-city">{product.city.name}</div>
          </div>
          <div className="product-page-edit">
            <Link to={`/edit/${this.props.match.params.id}`}>
              <EditIcon className="product-page-edit-icon" />
            </Link>
            <DeleteIcon className="product-page-edit-icon" onClick={this.onRemoveProduct} />
          </div>
        </section>

        <div className="product-page-img-container">
          <div
            className="prime-photo"
            style={{ backgroundImage: `url(${product.imgUrls[0]})` }}
          />
          <div
            className="prod-img prod-img-1"
            style={{ backgroundImage: `url(${product.imgUrls[1]})` }}
          />

          <div
            className="prod-img prod-img-2"
            style={{ backgroundImage: `url(${product.imgUrls[2]})` }}
          />

          <div
            className="prod-img prod-img-3"
            style={{ backgroundImage: `url(${product.imgUrls[3]})` }}
          />

          <div
            className="prod-img prod-img-4"
            style={{ backgroundImage: `url(${product.imgUrls[4]})` }}
          />
        </div>
        <main className="product-page-main">
          <div className="product-page-content">
            <h2>Lorem ipsum dolor sit amet, consectetur</h2>
            <p>
              {product.description}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div className="order-form">
            <OrderForm seller={user} />
          </div>
        </main>
        <section className="product-page-reviews">
          <ProductReview id={this.props.match.params.id} />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.product.currProduct,
  };
};

const mapDispatchToProps = {
  loadProduct,
  updateProduct,
  addOrder,
  updateOrder,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
);
