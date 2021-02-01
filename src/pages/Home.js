import React from 'react';
import * as api from '../services/api';
import Search from '../components/Search';
import Categories from '../components/Categories';

class Home extends React.Component {
  constructor() {
    super();

    this.onSelectedCategorie = this.onSelectedCategorie.bind(this);
    this.handleProducts = this.handleProducts.bind(this);

    this.state = {
      categoriesfull: [],
      selectedCategorie: '',
      searchProducts: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        categoriesfull: categories,
      });
      console.log(categories);
    });
  }

  handleProducts(products) {
    this.setState({
      searchProducts: products,
    });
  }

  onSelectedCategorie(event) {
    console.log(event);
    // const { value } = target;
    this.setState({
      selectedCategorie: event,
    });
  }

  filterProduct() {
    const { searchProducts, selectedCategorie } = this.state;
    let filteredProducts = searchProducts;
    if (selectedCategorie !== '') {
      filteredProducts = searchProducts
        .filter(() => searchProducts.category_id === selectedCategorie);
    }
    return filteredProducts;
  }

  render() {
    const { selectedCategorie, categoriesfull } = this.state;

    return (
      <div>
        <Search value={ selectedCategorie } handleProducts={ this.handleProducts } />
        <Categories
          categories={ categoriesfull }
          onSelectedCategorie={ this.onSelectedCategorie }
        />
      </div>
    );
  }
}

export default Home;
