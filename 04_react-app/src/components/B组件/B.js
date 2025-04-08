import React, { useContext } from 'react';
import { useState } from 'react';
import TestContext from '../../store/testContext';


// const [number, setRedBorder] = useState(false);
//  使用Context方式二：
//  1.引入context
//  2.使用钩子函数useContext()获取到context
        // useContext() 需要一个Context作为参数
        // 它会将Context中数据获取并作为返回值返回


        // XXX.Provider
        // 表示数据的生产者，可以使用它来指定context中的数据
        // 通过value来指定Context中存储的数据
        // 这样一来在该组件的所有子组件中都可以通过Context来访问它所指定的数据
const B = (props) => {
    // 使用钩子函数useContext()获取到context
    const ctx = useContext(TestContext);

    return (
        <div style={{ fontSize: '30px' }}>
            {ctx.name} -- {ctx.age}
        </div>
    )
}
export default B;