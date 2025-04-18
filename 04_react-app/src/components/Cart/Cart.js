import React from 'react';
import classes from './Cart.module.css'
import iconImg from '../../assets/bag.png'
import cartContext from '../../store/cartContext';
import CartDetails from './CartDetails/CartDetails';
import Checkout from './Checkout/Checkout';
const Cart = (props) => {
    const ctx = React.useContext(cartContext);
    // 添加一个state来设置详情是否显示
    const [showDetail,setShowDetail] = React.useState(false);
    const [showCheckout,setShowCheckout] = React.useState(false);
    const showCartHandler = () => {
        if(ctx.totalAmount===0) return;
        setShowDetail(prevState=>!prevState);
    }
    const showCheckoutHandler = () => {
        if(ctx.totalAmount===0) return;
        setShowCheckout(prevState=>!prevState);
    }
    return (
        // 现在将滚动条设置给Meals
        <div className={classes.cart} onClick={showCartHandler}>
            
            {showCheckout && <Checkout />}
            {showDetail && <CartDetails/>}
            
            <div className={classes.left} >
                <div className={classes.icon}>
                    <img src={iconImg} alt="" />
                    {ctx.totalAmount>0 && <span className={classes.totalAmount}>{ctx.totalAmount}</span>}
 
                </div>
                {ctx.totalAmount===0 ?<p className={classes.noProduct}>未选购商品</p>: <div className={classes.totalPrice}>￥{ctx.totalPrice}</div>}
                
            </div>
            <div className={classes.right} onClick={showCheckoutHandler}>
                <button className={`${classes.btn} ${ctx.totalAmount===0 ?classes.Disabled:''}`}>去结算</button>
            </div>
        </div>
    )
}
export default Cart;