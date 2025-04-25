import React from 'react';
import { useState } from 'react';
import classes from './App.module.css'
import Out from './Out';
import FilterMeals from './components/FilterMeals/FilterMeals';
import Meals from './components/Meals/Meals'
import cartContext from './store/cartContext'
import Cart from './components/Cart/Cart';
import BackDrop from './components/UI/Backdrop/Backdrop';
 
const MEALS_DATA = [
    {
        id: 1,
        name: 'ham1',
        desc: 'Juicy 100% beef patty hugged by melted cheddar, crowned with crisp lettuce and tangy house sauce – where every bite is a flavor explosion!',
        price: 35,

        img: '/img/meals/1.png'
        // /img/meals/1.png
    },
    {
        id: 2,
        name: 'ham2',
        desc: 'Grass-fed beef seared to caramelized perfection, oozing savory juices',
        price: 23,

        img: '/img/meals/2.png'
    },
    {
        id: 3,
        name: 'ham3',
        desc: 'Crispy onion rings meet velvety aged cheddar melt',
        price: 26,

        img: '/img/meals/3.png'
    },
    {
        id: 4,
        name: 'ham4',
        desc: 'Smoked paprika aioli dripping down toasted brioche buns Each layer builds a symphony of smoky, creamy, and umami notes that lingers deliciously.',
        price: 58,

        img: '/img/meals/4.png'
    },
    {
        id: 5,
        name: 'ham5',
        desc: 'Smoked paprika aioli dripping down toasted brioche buns Each layer builds a symphony of smoky, creamy, and umami notes that lingers deliciously.',
        price: 68,

        img: '/img/meals/5.png'
    },
    {
        id: 6,
        name: 'ham6',
        desc: 'Smoked paprika aioli dripping down toasted brioche buns Each layer builds a symphony of smoky, creamy, and umami notes that lingers deliciously.',
        price: 88,

        img: '/img/meals/6.png'
    },
    {
        id: 7,
        name: 'ham7',
        desc: 'Smoked paprika aioli dripping down toasted brioche buns Each layer builds a symphony of smoky, creamy, and umami notes that lingers deliciously.',
        price: 88,

        img: '/img/meals/7.png'
    },
]
const App = () => {
    const [redBorder, setRedBorder] = useState(false);
    // 模拟一组数据
    const [mealsData, setMealsData] = useState(MEALS_DATA);

    // 创建一个state，用来存储购物车的数据
    // 1.商品[] items
    // 2.商品总数（totalAmount）
    // 3.商品总价（totalPrice）
    const [cartData, setCartData] = useState({
        items: [],
        totalAmount: 0,
        totalPrice: 0,
    });
    // 创建一个过滤meals的函数
    const filterHandler = (keyWord) => {
        console.log('appjs~~', keyWord);
        const newMealsData = MEALS_DATA.filter(item => item.name.indexOf(keyWord) !== -1)
        console.log('appjs~~111', newMealsData);
        setMealsData(newMealsData)
        console.log('appjs~~222', mealsData);
    }
    // 向购物车中添加商品
    const addMealHandler = (meal) => {
        // meal要添加进购物车的商品
        // 对购物车进行浅复制
        const newCart = { ...cartData }
        // 判断购物车中是否存在该商品
        if (newCart.items.indexOf(meal) === -1) {
            // 将meal添加到购物车中
            newCart.items.push(meal);
            // 修改商品数量
            meal.amount = 1;
        } else {
            // 增加商品数量
            meal.amount += 1;
        }
        // 增加总数
        newCart.totalAmount += 1;
        console.log('totalPrice~~11',typeof newCart.totalPrice,newCart.totalPrice);
        // 增加总价
        newCart.totalPrice = newCart.totalPrice + meal.price;
 
        console.log('totalPrice~~22',newCart.totalPrice);
        setCartData(newCart);
    }
    // 向购物车中减少商品
    const subMealHandler = (meal) => {
        // meal要添加进购物车的商品
        // 对购物车进行浅复制
        const newCart = { ...cartData }
        // 减少商品数量
        meal.amount -= 1;
        console.log('减少商品数量~~', meal.amount);
        if (meal.amount === 0) {
            // 从购物车中移除商品
            newCart.items.splice(newCart.items.indexOf(meal), 1)
        }
        // 减少总数
        newCart.totalAmount -= 1;
        // 减少总价
        newCart.totalPrice -= meal.price;
        setCartData(newCart);
    }

    const clearCart = () => {
        // 对购物车进行浅复制
        const newCart = { ...cartData }
        newCart.items.forEach(item => {
           delete item.amount  
        })
        // 清空购物车
        newCart.items = [];
        // 清空商品数量
        newCart.totalAmount = 0;
        // 清空商品总价
        newCart.totalPrice = 0;
        setCartData(newCart);
    }
    const changeBorder = () => {
        setRedBorder(true)
    }
    // CSS模块
    // 使用步骤：
    // 1.创建一个XXX.module.css
    // 2.在组件中引入css
    // import classes from './App.module.css'
    // 3.通过classes来设置类
    // className={classes.p1}
    // CSS模块可以动态的设置唯一的class值
    // App_p1__6IGvZ


    // React.Fragment
    // 是一个专门用来作为父容器的组件
    // 它只会将它里面的子元素直接返回，不会创建任何多余的元素
    // 当我们希望有一个父容器
    // 但同时又不希望父容器在网页中产生多余的结构时
    // 就可以使用Fragment
    return (
        // <Out>
        // <React.Fragment>
        // <>
        //  <p className={`${classes.p1}  ${redBorder?classes.border:''}` } >段落</p>   
        //        <button onClick={changeBorder}>点我一下</button> 


        // </>
        // {/* </React.Fragment> */}
        // </Out>



        <cartContext.Provider value={{ ...cartData, addMealHandler, subMealHandler,clearCart}}>
            <div style={{ width: '750rem', overflow: 'auto' }}> 
            <FilterMeals onFilter={filterHandler}></FilterMeals>
            <Meals
                mealsData={mealsData}

            />
            <Cart /> 
    
            </div>
        </cartContext.Provider >


    )
}
export default App