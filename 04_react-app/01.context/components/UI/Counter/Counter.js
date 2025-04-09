import React from 'react';
import { useState } from 'react';
import classes from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
const Counter = (props) => {
    // const [number, setRedBorder] = useState(false);
 
    const addButtonHandler = ()=>{
        props.onAdd(props.meal)
    }
    const subButtonHandler = ()=>{
        props.onSub(props.meal)
    }
    return (

        <div className={classes.counter}>
  
            {(props.meal.amount && props.meal.amount != 0) ?
                <>
                    <div className={classes.reduce} onClick={subButtonHandler}>
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <div className={classes.number}>{props.number}</div>
                </>
                  : null}

            <div className={classes.add} onClick={addButtonHandler}>
                <FontAwesomeIcon icon={faPlus} />
            </div>




        </div>
    )
}
export default Counter;