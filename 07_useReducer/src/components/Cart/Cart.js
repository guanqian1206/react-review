import React, { useEffect, useState } from 'react';
import classes from './Cart.module.css'
import iconImg from '../../assets/bag.png'
import cartContext from '../../store/cartContext';
import CartDetails from './CartDetails/CartDetails';
import Checkout from './Checkout/Checkout';
const Cart = (props) => {
    const ctx = React.useContext(cartContext);
    // 添加一个state来设置详情是否显示
    const [showDetail,setShowDetail] = React.useState(false);
    // 添加一个state来设置结账页是否显示
    const [showCheckout,setShowCheckout] = React.useState(false);

    // 在组件每次重新渲染的时候，检查一下商品的总数量，如果数量是0，则修改showDetail为false；
    // 修改state组件重新渲染，又重新执行函数，形成死循环
    // if (ctx.totalAmount===0) {
    //     setShowDetail(false);
    // }

    // 默认情况下，useEffect()中的函数，会在组件渲染完成后调用，
    // 并且是每次渲染完成后都会调用

    // 在useEffect可以传递第二个参数，是一个依赖数组，用来控制useEffect()的调用时机，
    // 只有依赖数组中的值发生变化，才会调用useEffect()中的函数
    // 通常会将Effect中使用的所有的局部变量都设置为依赖项
    // 这样一来可以确保这些值发生变化时，会触发Effect
    // 像setState()是由钩子函数useState()创建的
    // useState()会确保组件的每次渲染都会获取到相同的setState()对象
    // 所以setState()方法可以不设置到依赖中
    // 如果依赖项设置了一个空数组，则意味着Effect只会在组件初始化时触发一次
 
    useEffect(()=>{
        // console.log('useEffect~~~~cart组件~~');
        if(ctx.totalAmount===0) {
          setShowDetail(false);
          setShowCheckout(false);
        }
    } ,[ctx])    
    const showCartHandler = () => {
        if(ctx.totalAmount===0) {
            setShowDetail(false);
            return
        };
        setShowDetail(prevState=>!prevState);
    }
    const showCheckoutHandler = () => {
        if(ctx.totalAmount===0) {
            setShowCheckout(false);
            return
        };
        setShowCheckout(prevState=>!prevState);
    }
    const hideCheckoutHandler = () => {
        setShowCheckout(false);
    }

    return (
        // 现在将滚动条设置给Meals
        <div className={classes.cart} onClick={showCartHandler}>
            
            {showCheckout && <Checkout onHide={hideCheckoutHandler} />}
            {showDetail  && <CartDetails/>}
            
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