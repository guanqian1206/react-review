import React from 'react';
import classes from './MealItem.module.css'
import Counter from '../../UI/Counter/Counter'

// 单个食物组件

// 引入fontawesome
// 安装依赖
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest
// 引入组件
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// 引入图标
// import {faPlus} from  '@fortawesome/free-solid-svg-icons'
const MealItem = (props) => {
    return (
     <div className={classes.Meal}>
        <div className= {classes.ImgBox} >
            <img className= {classes.Image}  src={props.meal.img} alt="" />
        </div>
        <div className= {classes.rightBox} >
            <h2 className= {classes.name} >{props.meal.name}</h2>
            {props.noDesc?null:<p className= {classes.desc} >{props.meal.desc}</p>}
            <div className= {classes.rightBottom} >
                <span className= {classes.price} >{props.meal.price}</span>
                <div className= {classes.num} >
                    <Counter number={props.meal.amount}  meal={props.meal} ></Counter>
                </div>
            </div>
        </div>
     </div>
    )
}
export default MealItem;