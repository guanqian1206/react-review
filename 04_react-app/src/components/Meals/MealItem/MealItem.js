import React from 'react';
import classes from './MealItem.module.css'
import Counter from '../../UI/Counter/Counter'
// 单个食物组件


const MealItem = () => {
    return (
     <div className={classes.Meal}>
        <div className= {classes.ImgBox} >
            <img className= {classes.Image}  src="/img/meals/1.png" alt="" />
        </div>
        <div className= {classes.rightBox} >
            <h2 className= {classes.name} >汉堡包</h2>
            <p className= {classes.desc} >百分百纯牛肉搭配酸爽黄瓜洋葱粒与美味番茄酱经典滋味</p>
            <div className= {classes.rightBottom} >
                <span className= {classes.price} >12</span>
                <div className= {classes.num} >
                    <Counter number={0}></Counter>
                </div>
            </div>
        </div>
     </div>
    )
}
export default MealItem;