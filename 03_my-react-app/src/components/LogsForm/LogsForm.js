import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import './LogsForm.css'
const LogsForm = (props) => {
 
    const [inputDate,setInputDate] = useState('')
    const [inputDesc,setInputDesc] = useState('')
    const [inputTime,setInputTime]= useState('')
 
    const descChangeHandler = (e)=>{
        setInputDesc(e.target.value)
    }
    const dateChangeHandler= (e)=>{
        setInputDate(e.target.value)
    }
    const timeChangeHandler= (e)=>{
        setInputTime(e.target.value)
    }

    const formSubmitHandler=(e)=>{
        e.preventDefault();
        const newLog = {
            date:new Date(inputDate),
            desc:inputDesc,
            time:inputTime
        }
        setInputDesc('')
        setInputTime('')
        setInputDate('')
        // 当添加新的日志时，调用父组件传递过来的函数
        props.onSaveLog(newLog)
 
    }
    return (
        <Card className="logsForm">
            <form onSubmit = {formSubmitHandler}>
                <div className="formItem">
                    <label htmlFor="date">日期</label>
                    <input type="date" id="date" onChange={dateChangeHandler} value={inputDate}   />
                </div>
                <div className="formItem">
                    <label htmlFor="desc" >内容</label>
                    <input type="text" onChange={descChangeHandler}  value={inputDesc}  id="desc" />
                </div>
                <div className="formItem">
                    <label htmlFor="time">时长</label>
                    <input type="number" id="time" value={inputTime} onChange={timeChangeHandler}  />
                </div>
                <div className="formBtn">
                    <button>添加</button>
                </div>

            </form>

        </Card>
    )
}
export default LogsForm