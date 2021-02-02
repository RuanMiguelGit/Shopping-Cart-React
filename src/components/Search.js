import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import SearchResult from '../pages/SearchResult';
import shoppingCartIcon from '../images/shoppingCartIcon.png';
import './Components.css';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '', // ATUALIZA O VALOR A CADA DIGITAÇÃO NO INPUT
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { query } = this.state;
    const { onSearch, search, handleQuery, queryResult } = this.props;

    return (
      <div>
        <label htmlFor="query-input">
          <input
            id="query-input"
            data-testid="query-input"
            type="text"
            value={ query }
            onChange={ this.handleChange }
          />

          <button
            type="button"
            data-testid="query-button"
            onClick={ (event) => { handleQuery(query); onSearch(event); } }
          >
            Pesquisar
          </button>
        </label>

        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={ shoppingCartIcon } alt="shopping-cart" className="shopping-cart" />
        </Link>

        <SearchResult queryResult={ queryResult } search={ search } />
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.bool.isRequired,
  handleQuery: PropTypes.func.isRequired,
  queryResult: PropTypes.arrayOf(Array).isRequired,
};

export default Search;
