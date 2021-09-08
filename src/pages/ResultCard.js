import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../components/Components.css';

class ResultCard extends React.Component {
  render() {
    const { product, addProduct } = this.props;

    return (
      <section className='product-card'>
        <Link
          to={{
            pathname: `/products-details/${product.id}`,
            state: {
              product,
            },
          }}
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <h1 className='product-name'>{product.title}</h1>
            <img className='product-picture' src={product.thumbnail} alt="Product pic " />
            <p className='product-price'>{product.price} RS</p>
          </div>
        </Link>
        <button
          className='ButtonBuy'
          data-testid="product-add-to-cart"
          type="button"
          onClick={() => addProduct(product)}
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}

ResultCard.propTypes = {
  product: PropTypes.objectOf(Object).isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default ResultCard;
