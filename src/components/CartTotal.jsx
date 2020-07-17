import React, { Component } from 'react'

export default class CartTotal extends Component {
  render() {
    return (
      <div className="cart-total-container">
        <h2>  Cart Total ${this.props.taxTotal} </h2>
      </div>
    )
  }
}
