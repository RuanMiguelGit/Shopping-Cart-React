import React from 'react';

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
    );
  }
}

export default Search;
