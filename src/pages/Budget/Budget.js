import React, { Component } from 'react';
import './Budget.css';
import Add from './components/Add';
import List from './components/List';
import Balance from './components/Balance';

class Budget extends Component {
  constructor(props){
    super(props);
    this.state = {
      amountHistory: [
        {id: 1, amount: -200, description: "Tickets" },
        {id: 2, amount: -240, description: "MP3 player"},
        {id: 3, amount: -385, description: "New clothes"},
        {id: 4, amount: 1800,description: "Salary"}
      ],
      total: ''
    }
    this.handlerAmountChange = this.handlerAmountChange.bind(this);
    this.totalAmount = this.totalAmount.bind(this);
  }
//function counting total amounts added 
  totalAmount()  {
    var array = this.state.amountHistory;
    var total = 0;
    var i;
    for (i = 0; i < array.length; i++) {  //loop through the array
      total += array[i].amount;  //Do the math!
    }
    return total;
  }

  handlerAmountChange(event, amount, description, date, category) {
    event.preventDefault();
    console.log(event, amount); 
    //adding new fields to our array
    var value = amount;
    var desc = description;
    var array = this.state.amountHistory;
    var newID = array[array.length-1].id + 1;
    array.push({
      "id": newID,
      "amount": parseFloat(value),
      "description": desc,
      "date": date,
      "category": category
  });
    this.setState({
        amountHistory: array
      })
    
  }
  
  render() {
    
    return (
      <div className="Budget"> 
        <Add handler={this.handlerAmountChange} />
        <Balance balance={this.totalAmount()} />
        <List amountHistory={this.state.amountHistory} />
      </div>
    );
  }
}

export default Budget;
