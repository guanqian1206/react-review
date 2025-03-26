import React from 'react';
import MealItem from './MealItem/MealItem';
// 食物列表的组件
import classes from './Meals.module.css'

const Meals = () => {
    return (
    // 现在将滚动条设置给Meals
     <div className={classes.Meals}>
        <MealItem/>
        <MealItem/>
        <MealItem/>
        <MealItem/>
        <MealItem/>
        <MealItem/>
        <MealItem/>
        <MealItem/>
        <MealItem/>
     </div>
    )
}
export default Meals;