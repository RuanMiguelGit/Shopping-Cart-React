import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { location: { cart } } = this.props;
    if (cart.length <= 0) {
      return (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>
        <div>

          {cart.map((product, index) => (
            <div key={ index }>
              <img src={ product.thumbnail } alt={ product.title } />
              <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          ))}
        </div>

      </div>

    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    cart: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default ShoppingCart;
