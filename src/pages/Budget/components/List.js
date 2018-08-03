import React, { Component } from 'react';
import './list.css';

class List extends Component {
    deleteEntry(){
        console.log("test");
    }
    

    render() {
        
        const styleDelete = {color: 'red'}

        return (
           
            <div>
                        <h3>Your budget activity:</h3>

                <ol>
                    {/* Here we get state as props from Budget.js */}
                    {
                        this.props.amountHistory.map(function(user, i){
                        return <li key={ i }>${user.amount}: {user.description} (added {user.date}) category: {user.category}  <a style={styleDelete} className="delete" onClick={this.deleteEntry}>X</a></li>;
                        })
                }
                
                </ol>
            </div>

            
        );
    }
}




export default List;
