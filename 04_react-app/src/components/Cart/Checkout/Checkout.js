import React from "react";
import ReactDOM from "react-dom";
import classes from './Checkout.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCross} from "@fortawesome/free-solid-svg-icons";
const checkoutRoot = document.getElementById('checkout-root');
const Checkout = (props) => {
    return  ReactDOM.createPortal( 
    //    <div className={`${classes.checkout} ${props.className}`}>
    //      {props.children}
    //      </div>
    <div className={classes.checkout}>
        <div className={classes.close}>
            <FontAwesomeIcon icon={faCross} /> 
        </div>
    </div>
     ,checkoutRoot)
}
export default Checkout;