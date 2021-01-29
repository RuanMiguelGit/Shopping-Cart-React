import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Search from '../components/Search';
import Categories from '../components/Categories';

class Home extends React.Component {
  constructor() {
    super();

    const { products } = this.props;

    this.onSelectedCategorie = this.onSelectedCategorie.bind(this);

    this.state = {
      categoriesfull: [],
      selectedCategorie: '',
      products,
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        categoriesfull: categories,
      });
    });
  }

  onSelectedCategorie({ target }) {
    const { value } = target;
    this.setState({
      selectedCategorie: value,
    });
  }

  filterProduct() {
    const { products, selectedCategorie } = this.state;
    let filteredProducts = products;
    if (selectedCategorie !== '') {
      filteredProducts = products.filter(() => products.name === selectedCategorie);
    }
    return filteredProducts;
  }

  render() {
    const { categoriesfull } = this.state;

    return (
      <div>
        <Search />
        <Categories
          categories={ categoriesfull }
          onSelectedCategorie={ this.onSelectedCategorie } 
        />
      </div>
    );
  }
}

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
