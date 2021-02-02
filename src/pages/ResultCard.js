import React from 'react';
import PropTypes from 'prop-types';

class ResultCard extends React.Component {
  render() {
    const { product, addProduct } = this.props;

    return (
      <div data-testid="product">
        {/* CHECK 3 */}
        <h1>{product.title}</h1>
        <img src={ product.thumbnail } alt="Product pic " />
        <p>{product.price}</p>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addProduct(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ResultCard.propTypes = {
  product: PropTypes.objectOf(Object).isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default ResultCard;
