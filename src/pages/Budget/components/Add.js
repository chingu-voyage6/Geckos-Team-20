import React, { Component } from 'react';
import styles from './add.css';
import PropTypes from 'prop-types';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '0',
            description: "",
            date: new Date().toLocaleDateString() + " at " + new Date().toLocaleTimeString() ,
            category: "none"
        };
        this.handleChange = this.handleChange.bind(this);
        
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      console.log(event.target.name)
       
    }  


        static defaultProps ={
     categories: ["please", "choose", "category"]
        }
    
    render() {

        return (
            <form >
                <p className={styles.inputInfo}>Please, enter an amount:</p>
                <input className={styles.input} 
                        value={this.state.amount} 
                        name="amount"
                        onChange={this.handleChange}
                        type="number" 
                        placeholder="Enter your amount" />
                <input className={styles.input}
                        name="description"
                        onChange={this.handleChange}
                        placeholder="the description"
                    />
               
               <select className={styles.input} name="category" onChange={this.handleChange}>
                {/* {categoryOptions} */}
                    <option value="" selected disabled hidden>and select your option</option>
                    <option value="Food">Food</option>
                    <option value="Bills">Bills</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Income">Income</option>
                </select>
            
                <button className={styles.btn} onClick={(event)=> this.props.handler(event,this.state.amount, this.state.description, this.state.date, this.state.category)}> Add value </button> 
                
                {/*add the value to the state*/}
                {/*show the value in*/} 
                
            </form>
        );
   }

  
}

export default Add;
