import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories } = this.props;
    console.log(categories);

    return (

      <div>
        {categories.map((products) => (
          <ul key={ products.id }>
            <li key={ products.name } data-testid="category">
              {products.name}
            </li>
          </ul>))}

      </div>);
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Categories;
