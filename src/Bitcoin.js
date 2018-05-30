import React, { Component } from 'react'
import './Bitcoin.css'
export default class Bitcoin extends Component {
  state = {
    price: null
  }
  getPrice = () => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(res => res.json()).then(data => {
      this.setState({
        price: data.bpi.USD.rate
      })
    })
  }
  render() {
    return (
      <div className="bitcoin">
        <img src="https://images.unsplash.com/photo-1518544884411-3a6cb9236aab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=030b74e74b5d3c5b4c4e2aa79954560d&auto=format&fit=crop&w=2549&q=80" alt="" />
        <br />
        {this.state.price ? <p className="price">1 Bitcoin = {this.state.price}$</p> : <p></p>}
        <button onClick={this.getPrice}>Get current price</button>
        <br />
        <a href="https://www.coindesk.com/price/">Powered by CoinDesk</a>
      </div>
    )
  }
}
