import React from 'react';
import classes from './Cart.module.css'
import iconImg from '../../assets/bag.png'
import cartContext from '../../store/cartContext';
import CartDetails from './CartDetails/CartDetails';
const Cart = (props) => {
    const ctx = React.useContext(cartContext);
    return (
        // 现在将滚动条设置给Meals
        <div className={classes.cart}>
            <CartDetails/>
            <div className={classes.left}>
                <div className={classes.icon}>
                    <img src={iconImg} alt="" />
                    {ctx.totalAmount>0 && <span className={classes.totalAmount}>{ctx.totalAmount}</span>}
 
                </div>
                {ctx.totalAmount===0 ?<p className={classes.noProduct}>未选购商品</p>: <div className={classes.totalPrice}>￥{ctx.totalPrice}</div>}
                
            </div>
            <div className={classes.right}>
                <button className={`${classes.btn} ${ctx.totalAmount===0 ?classes.Disabled:''}`}>去结算</button>
            </div>
        </div>
    )
}
export default Cart;