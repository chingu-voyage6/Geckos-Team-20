import React, { Component } from 'react';
import './balance.css';

class Balance extends Component {
    
    render() {
        var styleBalance = {color: this.props.balance > 0 ? "green"  : "red"};
        return (
            <div>
                <h2>Total amount: <span style={styleBalance}>${this.props.balance}</span></h2>
            </div>
        );
    }
}


export default Balance;
