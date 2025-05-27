import React,{useContext} from "react";
import Backdrop from "../../UI/Backdrop/Backdrop" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from  '@fortawesome/free-solid-svg-icons';
import classes from "./CartDetails.module.css";
import cartContext from "../../../store/cartContext";
import MealItem from "../../Meals/MealItem/MealItem";
import Confirm from "../../UI/Confirm/Confirm";
const CartDetails = (props) => {
    const ctx = React.useContext(cartContext);
    // 设置state来控制确认框的显示
    const [showConfirm,setShowConfirm] = React.useState(false); 
    
    // 添加函数切换确认框的显示
    const showConfirmHandler = () => {
        setShowConfirm(true);
    }
    const cancelHandler = (e)=>{
        e.stopPropagation()
        setShowConfirm(false);
    }
    const confirmHandler = () => {
        ctx.cartDispatch({type:'CLEAR',meal:props.meal});
        setShowConfirm(false);
    }
    return (
        <Backdrop >
            {showConfirm && <Confirm confirmText="该操作不可恢复！确认删除吗？" cancelHandler={cancelHandler} confirmHandler={confirmHandler}/>}
            <div className={classes.detailBox} onClick={e=>e.stopPropagation()}>
                <header>
                    <h2>餐品详情</h2>
                    <div className={classes.clear} onClick={showConfirmHandler}>
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