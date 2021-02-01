import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import SearchResult from '../pages/SearchResult';
import shoppingCartIcon from '../images/shoppingCartIcon.png';
import { getProductsFromCategoryAndQuery } from '../services/api';
import './Components.css';
import Loading from './Loading';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '', // ATUALIZA O VALOR A CADA DIGITAÇÃO NO INPUT
      queryResult: [], // RETORNO DA API
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { query } = this.state;
    const { handleQuery } = this.props;
    this.setState({
      query: event.target.value,
    });
  }

  /* async onSearch() {
    const { selectedCategorie, handleProducts } = this.props;

    this.setState(
      { loading: true },
      async () => {
        const { query } = this.state;
        const queryResult = await
        getProductsFromCategoryAndQuery(selectedCategorie, query);
        this.setState({
          queryResult: queryResult.result,
          search: true,
          loading: false,
        });
        console.log(queryResult.result);
        handleProducts(queryResult.result);
      },
    );
  } */

  render() {
    const { query } = this.state;
    const { onSearch, search, handleQuery, queryResult } = this.props;

    return (
      <div>
        <label htmlFor="query-input" data-testid="home-initial-message">
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
  handleProducts: PropTypes.func.isRequired,
  selectedCategorie: PropTypes.string.isRequired,
};

export default Search;
