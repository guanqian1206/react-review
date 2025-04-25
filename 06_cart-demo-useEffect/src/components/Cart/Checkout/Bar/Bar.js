import React from "react";
import classes from "./Bar.module.css";
 
import cartContext from "../../../../store/cartContext"
const Bar = (props) => {
    const ctx = React.useContext(cartContext);
    // const showCheckoutHandler = () => {
    //     if(ctx.totalAmount===0) {
    //         setShowCheckout(false);
    //         return
    //     };
    //     setShowCheckout(prevState=>!prevState);
    // }
    return (
        <div className={classes.BarBox}>
            <div className={classes.left} >
                <div className={classes.icon}>
                    
                  

                </div>
                {ctx.totalAmount === 0 ? <p className={classes.noProduct}>未选购商品</p> : <div className={classes.totalPrice}>￥{ctx.totalPrice}</div>}

            </div>
            {/* onClick={showCheckoutHandler} */}
            <div className={classes.right} >
                <button className={`${classes.btn} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`}>去结算</button>
            </div>

        </div>
    )
}
export default Bar;