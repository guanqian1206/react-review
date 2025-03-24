import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import './LogsForm.css'
const LogsForm = () => {
    // 当表单项发生变化时，获取用户输入的内容
    // 创建三个变量，用来存储表单中的数据
    // let inputDate = '';
    // let inputDesc = '';
    // let inputTime = '';
    // const [inputDate,setInputDate] = useState('')
    // const [inputDesc,setInputDesc] = useState('')
    // const [inputTime,setInputTime]= useState('')
    const [formData,setFormData] = useState({
        inputDate:'',
        inputDesc:'',
        inputTime:''
    })

    // 创建一个响应函数，监听表单项的变化
    const descChangeHandler = (e)=>{
        // 获取到当前触发事件的对象
        // 事件对象中保存了当前事件触发时的所有信息
        // event.target执行的是触发事件的对象（DOM）
        console.log('发生变化~~~',e.target.value);
        setFormData({...formData,inputDesc:e.target.value})
    }
    const dateChangeHandler= (e)=>{
        setFormData({...formData,inputDate:e.target.value})
    }
    const timeChangeHandler= (e)=>{
      
        setFormData({...formData,inputTime:e.target.value})

    }

    const formSubmitHandler=(e)=>{
    // 在React中，通常表单不需要自行提交
    // 而是要通过React提交
    // 所以需要禁止默认行为
        e.preventDefault();
        const newLog = {
            date:new Date(formData.inputDate),
            desc:formData.inputDesc,
            time:+formData.inputTime
        }
        console.log('表单提交~~',newLog);
        setFormData({
            inputDate:"",
            inputDesc:"",
            inputTime:""
        })
  
        // 提交表单后如何清空表单中的旧数据
        // 现在这种表单，在React我们称为非受控组件

        // 我们可以将表单中的数据存储到state中
        // 然后将state设置为表单项value值
        // 这样当表单项发生变化，state会随之变化，
        // 反之，state发生变化，表单项也会跟着改变，这种操作我们称为双向绑定
        // 这样一来，表单就成为了一个受控组件
    }
    return (
        <Card className="logsForm">
            <form onSubmit = {formSubmitHandler}>
                <div className="formItem">
                    <label htmlFor="date">日期</label>
                    <input type="date" id="date" onChange={dateChangeHandler} value={formData.inputDate}   />
                </div>
                <div className="formItem">
                    <label htmlFor="desc" >内容</label>
                    <input type="text" onChange={descChangeHandler}  value={formData.inputDesc}  id="desc" />
                </div>
                <div className="formItem">
                    <label htmlFor="time">时长</label>
                    <input type="number" id="time" value={formData.inputTime} onChange={timeChangeHandler}  />
                </div>
                <div className="formBtn">
                    <button>添加</button>
                </div>

            </form>

        </Card>
    )
}
export default LogsForm