import React from 'react';
import PropTypes from 'prop-types';

class ProductsDetails extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt="Product Pic" />
        <p>{ price }</p>
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
      }).isRequired }).isRequired,
  }).isRequired,

};

export default ProductsDetails;
