import React, { Component } from 'react';
import Add from './components/Add';
import List from './components/List';
import Balance from './components/Balance';
import uuid from "uuid";

import classes from "./Budget.css";

class Budget extends Component {
  constructor(props){
    super(props);
    this.state = {
      amountHistory: [],
      total: ''      
    }
    this.handlerAmountChange = this.handlerAmountChange.bind(this);
    this.totalAmount = this.totalAmount.bind(this);
    this.handleDeleteListItem = this.handleDeleteListItem.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

componentWillMount(){
  this.setState({amountHistory: [
      {id: uuid.v4(),
      amount: 1800, 
      description: "Salary", 
      date: new Date().toLocaleDateString() + " at " + new Date().toLocaleTimeString(),
      category: "Income"
      }
    ]  
  });
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
    var validate = false;
    //adding new fields to our array
    var value = amount;
    var desc = description;    
    var array = this.state.amountHistory;
    var cat= category;
    // var newID = array[array.length-1].id + 1;
    var newID = uuid.v4();
    // if fields not empty
    console.log(cat);
    if (value && desc && newID && cat !== 'none') {
      validate = true;
    }
    if (validate) {
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
  }
  
  amountHistoryChange() {
    console.log("clicked!")
  }

  handleDeleteListItem(id){
    let amountHistory = this.state.amountHistory;
    let index = amountHistory.findIndex(x => x.id === id);
    amountHistory.splice(index, 1);
    this.setState({amountHistory: amountHistory});
  }

  resetForm(event) {
    event.preventDefault();
    this.setState({amountHistory: []  
  });
  }

  render() {
    
    return (
      <div className="Budget"> 
        <Add className={classes.inputs} handler={this.handlerAmountChange} />
        <Balance balance={this.totalAmount()} />
        <List amountHistory={this.state.amountHistory} onDelete={this.handleDeleteListItem}/>
        <button className={classes.Btn} onClick={this.resetForm}>Reset form</button> 

      </div>
    );
  }
}

export default Budget;
