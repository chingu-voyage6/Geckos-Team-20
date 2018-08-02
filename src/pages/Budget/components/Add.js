import React, { Component } from 'react';
import styles from './add.css';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            description: "",
            date: new Date().toLocaleDateString() + " at " + new Date().toLocaleTimeString() ,
            category: ""
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
        let categoryOptions = this.props.categories.map(category =>{
        return <option key={category} value="category" onChange={this.handleChange}>{category}</option>})
        return (
            <form onSubmit={(event)=> this.props.handler(event ,this.state.amount, this.state.description, this.state.date)}>
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
                        placeholder="and enter description"
                    />
               <div>
               <select name="category">
                {categoryOptions}
                </select>
                    </div>   
            
                <button className={styles.btn}> Add value </button> 
                {/*add the value to the state*/}
                {/*show the value in*/} 
                
            </form>
        );
   }
}

export default Add;
