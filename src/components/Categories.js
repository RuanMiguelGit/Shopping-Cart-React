import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories, onSelectedCategorie } = this.props;

    return (
      <div>
        {categories.map((category) => (
          <ul key={ category.id }>
            <button
              type="button"
              onClick={ onSelectedCategorie }
              value={ category }
            >
              <li key={ category.id } data-testid="category">
                {category.name}
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
  onSelectedCategorie: PropTypes.func.isRequired,
};

export default Categories;
