import React, { Component } from 'react';
import ProductData from '../data/ProductData'
import ProductList from './ProductList';

export default class AllProductsPage extends Component {
    state = {
        products : []
    }

    componentDidMount(){
        this.setState({products : ProductData.getAllData()});        
    }
    render() {
        return (
            <div>
                <h1>Product List</h1>
                <ProductList data = {this.state.products}/>
            </div>
        )
    }
}
