import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ResultCard extends React.Component {

  render() {
    const { product } = this.props;

    return (

      <Link
        to={ {
          pathname: `/products-details/${product.id}`,
          state: {
            product,
          },
        } }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <h1>{product.title}</h1>
          <img src={ product.thumbnail } alt="Product pic " />
          <p>{product.price}</p>
        </div>
      </Link>
    );
  }
}

ResultCard.propTypes = {
  product: PropTypes.objectOf(Object).isRequired,
};

export default ResultCard;
