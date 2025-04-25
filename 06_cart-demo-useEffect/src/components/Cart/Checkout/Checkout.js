import React from "react";
import ReactDOM from "react-dom";
import classes from './Checkout.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import cartContext from "../../../store/cartContext";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import Bar from "./Bar/Bar";
const checkoutRoot = document.getElementById('checkout-root');

const Checkout = (props) => {
    const ctx = React.useContext(cartContext);
    return ReactDOM.createPortal(
        //    <div className={`${classes.checkout} ${props.className}`}>
        //      {props.children}
        //      </div>
        <div className={classes.checkout}>
            <div className={classes.close} onClick={props.onHide}>
                <FontAwesomeIcon icon={faXmark} />

            </div>
            <div className={classes.detailBox}>
                <header className={classes.header}>
                    <h2 className={classes.title}>餐品详情</h2>
                </header>
                <div className={classes.scrollBox}>
                {ctx.items.map(item=><CheckoutItem meal={item} key={item.id}></CheckoutItem>)}
              
                </div>
                <footer className={classes.footer}>
                    <p className={classes.totalPrice}>{ctx.totalPrice}</p>
                </footer>
            </div>
            <div>
                <Bar></Bar>
            </div>

        </div>
        , checkoutRoot)
}
export default Checkout;