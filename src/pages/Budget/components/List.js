import React, { Component } from 'react';
import ListItem from './ListItem';
class List extends Component {
    deleteListItem(id){
        this.props.onDelete(id);
    }
    
    render() {
        

        let listItems;
        if (this.props.amountHistory){
            listItems = this.props.amountHistory.map(item =>{
                return (
                    <ListItem onDelete={this.deleteListItem.bind(this)} key={item.id} item={item}/>
                );
            });
        }
        
        console.log(this.props);
        return (
            <div className="List">
            <h3>Your budget activity:</h3>
            {listItems}
            </div>
                
        )
    }

    
}

export default List;
