import React from "react";
import classes from "./CheckoutItem.module.css";
import Counter from "../../../UI/Counter/Counter";
const CheckoutItem = (props) => {
    return (
        <div className={classes.checkoutItem}>
            <div className={classes.left}>
                <img src={props.meal.img} alt="" />
            </div>
            <div className={classes.right}>
                <h2 className={classes.name}>{props.meal.name}</h2>
                <div className={classes.priceOuter}>

                    <Counter number={props.meal.amount} meal={props.meal}></Counter>

                    <div className={classes.price}>{props.meal.price * props.meal.amount}</div>
                </div>
            </div>
        </div>
    )
}
export default CheckoutItem;