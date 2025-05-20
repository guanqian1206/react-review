import React from 'react';
import MealItem from './MealItem/MealItem';
// 食物列表的组件
import classes from './Meals.module.css'

const Meals = (props) => {
    return (
        // 现在将滚动条设置给Meals
        <div className={classes.Meals}>
            <div className={ 'aaaa'}>
                {
                    props.mealsData.map((item) => <MealItem   meal={item} key="{item.id}" />
                    )
                }

            </div>
        </div>
    )
}
export default Meals;