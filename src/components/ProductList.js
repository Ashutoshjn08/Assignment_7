import React, { Component } from "react";
import Product from "./Product";
import "../table.css";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const productsList = this.props.data.map((product, index) => {
      return (
        <Product
          key={index}
          id={product.id}
          productName={product.productName}
          quantity={product.quantity}
          price={product.price}
        />
      );
    });
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th data-test = "first-Column">ID</th>
              <th data-test = "second-Column">Product Name</th>
              <th data-test = "third-Column">Quantity</th>
              <th data-test = "fourth-Column">Price</th>
            </tr>
          </thead>
          <tbody>{productsList}</tbody>
        </table>
      </React.Fragment>
    );
  }
}
