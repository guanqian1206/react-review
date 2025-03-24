import React from 'react';
const LogFilter=(props)=>{
//    创建监听change事件的响应函数
    const changeHandler = (e)=>{
        console.log('changeHandler',e.target.value);
        props.onYearChange(e.target.value)
    }
    return (
        <div>
            年份：
            <select  value={ props.year} onChange={changeHandler}>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            </select>
        </div>
    )
}
export default LogFilter;