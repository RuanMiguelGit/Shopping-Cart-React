import React from 'react';

class ProductsDetails extends React.Component {

  componentDidMount() {
    const { location: { product } } = this.props;
  }

  render() {
    //console.log(product);
    // const { /* price, */ title, thumbnail } = product;
    return (
      <div>
        {/* <h1>{ title }</h1>
        <img src={ thumbnail } alt="Product Pic" />
        <p>{ price }</p> */}
      </div>
    );
  }
}

export default ProductsDetails;
