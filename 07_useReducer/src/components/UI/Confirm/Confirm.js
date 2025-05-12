import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Confirm.module.css"; 
const Confirm = (props) => {
    return (
        <Backdrop  className={classes.ConfirmOuter} onClick={props.cancelHandler}>
            <div className= {classes.confirm}>
                <p className= {classes.confirmText} >{props.confirmText}</p>
                <div className= {classes.buttons}>
                    <button 
                    onClick={(e)=>props.cancelHandler(e)} 
                    className= {classes.cancelBtn}>取消</button>
                    <button 
                    onClick={(e)=>props.confirmHandler(e)} 
                    className= {classes.confirmBtn}>确认</button>
                </div>
            </div>
        </Backdrop>
    )
}
export default Confirm;