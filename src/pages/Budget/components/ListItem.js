import React, { Component } from 'react';
import styles from './list.css';

class ListItem extends Component {
    constructor(props){
        super(props);
        this.deleteListItem = this.deleteListItem.bind(this, this.props.item.id);
    }
    deleteListItem(id){
        this.props.onDelete(id);
        }
    render() {
        
        return (
            <ol>
            <li className="ListItem">
            ${this.props.item.amount}: {this.props.item.description} (added {this.props.item.date}) category: {this.props.item.category} 
        <a className={styles.delete} 
            onClick={this.deleteListItem}>X</a>
            </li>
            </ol>
                
        )
    }
}

export default ListItem;