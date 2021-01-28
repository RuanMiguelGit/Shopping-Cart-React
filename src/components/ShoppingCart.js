import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  // handleChange(event) {
  //   this.setState({
  //     query: event.target.value,
  //   });
  // }

  render() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}

export default ShoppingCart;
