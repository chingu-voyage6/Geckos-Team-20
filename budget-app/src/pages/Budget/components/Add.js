import React from 'react';
import styles from './add.css'
const Add = (props) => {
      
    

    
    return (
        <div>
        <p className={styles.inputInfo}>this is the text</p>
        <input onChange="" type="number"/>
        <button type="submit" onSubmit=""> Add value </button> 
        {/*add the value to the state*/}
        {/*show the value in*/} 
        
        </div>
    )
}




export default Add;
