import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from  '@fortawesome/free-solid-svg-icons';
import classes from "./CartDetails.module.css";
import cartContext from "../../../store/cartContext";
const CartDetails = (props) => {
    return (
        <Backdrop>
            <div className={classes.detailBox}>
                <header>
                    <h2>餐品详情</h2>
                    <div className={classes.clear}>
                    <FontAwesomeIcon icon={faTrash} />
                    清空购物车</div>
                </header>
            </div>
        </Backdrop>
    )
}
export default CartDetails;