import React from 'react';
import styles from './balance.css';
const Balance = (props)=>{
    return (
        <div className={styles.balance}>
        {props.balance}
        </div>
    )
} 
export default Balance;