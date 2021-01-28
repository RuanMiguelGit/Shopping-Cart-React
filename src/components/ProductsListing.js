import React from 'react'
import api from "../services/api"
import ProductsListCat from './ProductsListCat'

class ProductListing extends React.Component {
    constructor(){
        super()

        this.state ={
            list:"",
        }
    }

    componentDidMount () {
        api.getCategories().then(categories =>
          { console.log(categories)
          this.setState({
            categoriesfull:categories
          })
        })
      }
    




    render() {
        const {list} = this.state

      return (<div></div>)


        
       
}
}
export default ProductListing