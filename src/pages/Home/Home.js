import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <h1>Expense Tracker</h1>
        <p>Do you really know what are you spending money on?</p>
        <p>Now you can control your money with our Expense Tracker!
Hit the BUDGET APP button to begin </p>
      </div>      
    );
  }
}

export default Home;
