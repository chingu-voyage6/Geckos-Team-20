import React, { Component } from 'react';
import './Budget.css';
import Add from './components/Add';
import List from './components/List';
import Balance from './components/Balance';
import uuid from "uuid";

class Budget extends Component {
  constructor(props){
    super(props);
    this.state = {
      amountHistory: [
        
        {id: uuid.v4(), amount: 1800, description: "Salary", date: new Date().toLocaleDateString() + " at " + new Date().toLocaleTimeString(), category: "THIS IS TEST"}
  
      ],
      total: ''
    }
    this.handlerAmountChange = this.handlerAmountChange.bind(this);
    this.totalAmount = this.totalAmount.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }
//function counting total amounts added 

deleteEntry(){
  console.log("test");
}
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
    // var newID = array[array.length-1].id + 1;
    var newID = uuid.v4();
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
    console.log(this.state.amountHistory);
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
