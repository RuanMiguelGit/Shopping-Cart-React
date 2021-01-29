import React from 'react';
import SearchResult from './SearchResult';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      queryResult: [],
      search: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  async onSearch() {
    const { query } = this.state;
    const queryResult = await getProductsFromCategoryAndQuery('', query);
    this.setState({ queryResult, search: true });
  }

  render() {
    const { query, queryResult, search } = this.state;

    return (
      <div>
        <label htmlFor="query-input" data-testid="home-initial-message">
          <input
            data-testid="query-input"
            type="text"
            value={ query }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.onSearch }
          >
            Pesquisar
          </button>
        </label>
        <div>
          <SearchResult queryResult={ queryResult } search={ search } />
        </div>
      </div>
    );
  }
}

export default Search;
