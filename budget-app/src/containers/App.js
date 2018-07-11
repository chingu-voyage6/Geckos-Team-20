import React, { Component } from 'react';
import './App.css';
import Text from '../components/Text';
class App extends Component {
  state = {
    showText: false
  }

  toggleShowTextHandler = (event) =>{
    const doesShow = this.state.showText;
    this.setState({showText: !doesShow});
  }

  render() {
let rendertext = null;
    if(this.state.showText){
      rendertext = <Text />
    }



    return (
      <div className="App">
        <h1>Expense Tracker</h1>
        <p>Do you really know what are you spending money on?</p>
        <p>Now you can control your money with our Expense Tracker!
Hit the button below to begin </p>
        <button className="appBtn" onClick={this.toggleShowTextHandler}> Show the app!</button>
        {rendertext}
      </div>      
    );
  }
}

export default App;
