import React from 'react';
import PropTypes from 'prop-types';

class ResultCard extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <div data-testid="product">
        {/* CHECK 3 */}
        <h1>{product.title}</h1>
        <img src={ product.thumbnail } alt="Product pic " />
        <p>{product.price}</p>
      </div>
    );
  }
}

ResultCard.propTypes = {
  product: PropTypes.objectOf(Object).isRequired,
};

export default ResultCard;
