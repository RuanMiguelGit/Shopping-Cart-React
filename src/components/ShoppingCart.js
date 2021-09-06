import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor() {
    super()
    this.state = {
      amount: 1,
      cart: this.props.location.cart
    }
    this.addup = this.addup.bind(this)
    this.adddown = this.adddown.bind(this)

  }

  addup(cart, index) { // index will be the key value 
    const items = this.state.cart;
    items.quantity += 1;
    items.splice(index, 1, items);
    this.setState({
      amount: items
    });

  }


  adddown() {
    this.setState(prevState => {
      return {
        amount: prevState.amount - 1
      }
    })
  }

  render() {
    const { location: { cart } } = this.props;
    const { amount } = this.state
    if (cart.length <= 0) {
      return (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>
        <div>

          {cart.map((product, index) => (
            <div key={index}>
              <img src={product.thumbnail} alt={product.title} />
              <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
              <button type='button' onClick={this.addup(amount)} />
              <p data-testid="shopping-cart-product-quantity">{amount}</p>
              <button type='button' onClick={this.adddown(amount)} />
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
