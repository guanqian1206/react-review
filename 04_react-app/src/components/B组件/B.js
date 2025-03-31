import React from 'react';
import { useState } from 'react';
import testContext from '../../store/testContext';

const B = (props) => {
    // const [number, setRedBorder] = useState(false);
    //  使用方式一：
    //  1.引入context
    //  2.使用XXX.Consumer组件来创建元素
    //  Consumer的标签体需要一个回调函数
    //  它会将context设置为回调函数的参数，通过参数就可以访问到context参数中存储的数据

    return (
        <testContext.Consumer>
            {
                (ctx)=>{
                   return <div>
                    {ctx.name} - {ctx.age}
                   </div> 
                }
            }
        </testContext.Consumer>

    )
}
export default B;