import React,{useContext} from "react";
import Backdrop from "../../UI/Backdrop/Backdrop" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from  '@fortawesome/free-solid-svg-icons';
import classes from "./CartDetails.module.css";
import cartContext from "../../../store/cartContext";
import MealItem from "../../Meals/MealItem/MealItem";
const CartDetails = (props) => {
    const ctx = React.useContext(cartContext);
    console.log('购物车信息~~',ctx.items);
    return (
        <Backdrop>
            <div className={classes.detailBox} onClick={e=>e.stopPropagation()}>
                <header>
                    <h2>餐品详情</h2>
                    <div className={classes.clear}>
                    <FontAwesomeIcon icon={faTrash} />
                    清空购物车</div>
                </header>
                <div className={classes.mealsList}>
                    {
                        ctx.items.map((item,index)=>{
                          return  <MealItem noDesc key={item.id} meal={item}/>
                        })
                    }
                </div>
            </div>
        </Backdrop>
    )
}
export default CartDetails;