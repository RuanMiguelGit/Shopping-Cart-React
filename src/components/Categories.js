import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories, onSelectedCategorie } = this.props;
    console.log(categories);

    return (
      <div>
        {categories.map((products) => (
          <ul key={ products.id }>
            <button
              type="button"
              onClick={ onSelectedCategorie }
              value={ products.name }
            >
              <li key={ products.name } data-testid="category">
                {products.name}
              </li>
            </button>
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
  onSelectedCategorie: PropTypes.func,
};

export default Categories;
