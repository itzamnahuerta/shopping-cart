import React, { Component } from 'react'

export default class Products extends Component {
  

  renderProducts = () => {
    const product = this.props.items.map((item, id) => (
      <div key={id} className="product-container"> 
        <div> 
        <img className="product-img" src={item.imgUrl} />
        <p> {item.name} </p>
        </div>
        <p> ${item.price}.00</p>
        <span> 
        <button> - </button>
        <span> {item.quantity} </span>
        <button > + </button>
        </span>
        <p> x </p>
      </div>
    
    ))
    return product;
  }

  render() {
    // console.log("from: products jsx - 1st step: making sure my props are passed =>",this.props.items)  // step 1
    return (
      <div className="products-container">
        <div className="products-title"> SHOPPING BAG </div>
        <div className="products-header">  
          <div className="r1-i1"> ITEM </div>
          <div className="r2-i2"> PRICE </div>
          <div className="r3-i3"> REMOVE </div>
        </div>
        {this.renderProducts()}
      </div>
    )
  }
}
