import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.productName}</td>
        <td>{this.props.quantity}</td>
        <td>Rs. {this.props.price}</td>
      </tr>
    );
  }
}
