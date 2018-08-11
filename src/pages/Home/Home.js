import React, { Component } from 'react';
import classes from './Home.css';

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
      <h1>Expense Tracker</h1><img className={classes.Img} alt="money" src="https://cdn.shopify.com/s/files/1/0185/5092/products/objects-0080_1024x1024.png?v=1369543283" ></img>
        <p>Do you really know what are you spending money on?</p>
        
        <p>Now you can control your money with our Expense Tracker!
Hit the BUDGET APP button to begin. </p>
        
      </div>      
    );
  }
}

export default Home;
