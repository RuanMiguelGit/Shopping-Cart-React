import React from 'react';
import * as api from '../services/api';
import Search from '../components/Search';
import Categories from '../components/Categories';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriesfull: [],

    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        categoriesfull: categories,
      });
    });
  }

  render() {
    const { categoriesfull } = this.state;

    return (
      <div>
        <Search />
        <Categories categories={ categoriesfull } />
      </div>
    );
  }
}

export default Home;
