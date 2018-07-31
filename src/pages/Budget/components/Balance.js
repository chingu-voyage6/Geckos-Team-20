import React, { Component } from 'react';
import './balance.css';

class Balance extends Component {
    render() {
        return (
            <div>
                <h2>Total amount: {this.props.balance}</h2>
            </div>
        );
    }
}




export default Balance;
