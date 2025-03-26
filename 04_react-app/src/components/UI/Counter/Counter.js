import React from 'react';
import { useState } from 'react';
import classes from './Counter.module.css'

const Counter = (props) => {
    // const [number, setRedBorder] = useState(false);
    return (
   
     <div className={classes.counter}>
        {(props.number&&props.number!=0)? <div className={classes.reduce}>-</div>:null}
        <div className={classes.number}>{props.number}</div>
        <div className={classes.add}>+</div>
     </div>
    )
}
export default Counter;