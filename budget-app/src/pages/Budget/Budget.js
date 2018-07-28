import React, { Component } from 'react';
import './Budget.css';
import Add from './components/Add';
import List from './components/List';
import Balance from './components/Balance';

class Budget extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount: 0,
      balance: 0
    }
  }
  


  render() {
    
    return (
      <div className="Budget"> 
        <Add />
        <Balance balance={this.state.balance}/>  
      </div>
    );
  }
}

export default Budget;
