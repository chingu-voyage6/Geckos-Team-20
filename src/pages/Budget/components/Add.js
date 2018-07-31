import React, { Component } from 'react';
import styles from './add.css';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {amount: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({amount: event.target.value});
    }
    
    render() {
        return (
            <form onSubmit={(event)=> this.props.handler(event ,this.state.amount)}>
                <p className={styles.inputInfo}>Please, enter an amount:</p>
                <input className={styles.input} value={this.state.amount} onChange={this.handleChange}  type="number" placeholder="Enter your amount" />
                <button className={styles.btn}> Add value </button> 
                {/*add the value to the state*/}
                {/*show the value in*/} 
            </form>
        );
   }
}

export default Add;
