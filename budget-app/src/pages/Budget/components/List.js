import React, { Component } from 'react';
import './list.css';

class List extends Component {
    render() {
        return (
            <div>
                <ol>
                    {/* Here we get state as props from Budget.js */}
                    {
                        this.props.amountHistory.map(function(user, i){
                            return <li key={ i }>{user.amount}</li>;
                        })
                    }
                </ol>
            </div>
        );
    }
}




export default List;
