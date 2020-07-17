import React from 'react';
import './App.css';
import Products from './components/Products';
import OrderSummary from './components/OrderSummary';
import CartTotal from './components/CartTotal';

// importing product images
import lassoImg from './assets/lasso-shumai-small-tote-military-green.png';
import handImg from "./assets/hand-coffee-carafe-set.png";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [
        {
          name:"Lasso - Shumai Small Tote Military Green", 
          price: 200.00,
          imgUrl: lassoImg,
          quantity: 0
        },
        {
          name: "H.A.N.D - Coffee Carafe Set",
          price: 140.00,
          imgUrl: handImg,
          quantity: 1

        }
      ],
      delivery: 0,
      subtotal: 0,
      taxPercent: 5,
      taxTotal: 29
    }
  }

  increaseProduct = () => {
    // let productQuanity = {...this.state.}
    console.log( {...this.state.items[0].quantity})
    // this.setState({
     
    // })
  }

  render() {
    console.log(this.increaseProduct())
    return (
      <div className="App">
        <CartTotal taxTotal={this.state.taxTotal}  />
        <Products items={this.state.items} />
        <OrderSummary />
      </div>
    );
  }
}

export default App;
