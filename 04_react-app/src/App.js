import React from 'react';
import { useState } from 'react';
import classes from './App.module.css'
import Out from './Out';
import Meals from './components/Meals/Meals'
const App = () => {
    const [redBorder, setRedBorder] = useState(false);

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
        <div style={{width:'750rem' }}>
            <Meals /> 
        </div>
    )
}
export default App