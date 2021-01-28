import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCartIcon from '../images/shoppingCartIcon.png';
import './Pages.css';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
    };
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { query } = this.state;

    return (
      <div>
        <label htmlFor="home-initial" data-testid="home-initial-message">
          <input
            id="home-initial"
            type="text"
            value={ query }
            onChange={ this.handleChange }
          />
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </label>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={ shoppingCartIcon } alt="shopping-cart" className="shopping-cart" />
        </Link>
      </div>
    );
  }
}

export default Search;
