import React, { Component } from 'react'

export default class User extends Component {
    // 类组件的props是存储到类的实例对象中，
    // 可以直接通过实例对象访问，
    // this.props
    // 类组件中state统一存储到了实例对象的state属性中
    // 可以通过this.state来访问
    // 通过this.setState()对其进行修改

    // 函数组件中，响应函数直接以函数的形式定义在组件中，
    // 但是在类组件中，响应函数是以类的方法来定义的,之前的属性都会保留
    // 但是这仅限于直接存储于state中的属性,如果是修改state中对象的内容，则跟函数组件一样需要浅拷贝

    // 获取DOM对象
    //     1.创建一个属性，用来存储DOM对象
    //          divRef = React.createRef()
        // 2.将这个属性设置为指定元素的ref值
    
    
    // 创建属性存储DOM对象
    divRef = React.createRef()

    
    state = {
        count: 0,
        test:'hhhh',
        obj:{
            name:'annie',
            age:18
        }
    }
    // 为了省事，在类组件中响应函数都应该以箭头函数的形式定义
    clickHandler = ()=>{
        this.setState(  prevState=>{ 
            return {count: prevState.count+1} 
        })
        // this.setState({count:this.state.count+1})
    }
    clickObjHandler = ()=>{
        this.setState(   ()=>{ 
            return {obj: {...this.state.obj,name:'charlotte'}} 
        })
        console.log(this.divRef);
 
    }
    render() {
        return (
            <div ref={this.divRef}>
                <h1>{this.state.count}</h1>
                <h1>{this.state.test}</h1>
                <h1>obj的name:{this.state.obj.name}</h1>
                <h1>obj的age:{this.state.obj.age}</h1>
                <button onClick={this.clickHandler}>点击</button>
                <button onClick={this.clickObjHandler}>点击obj</button>
                <ul>
                    <li>姓名：{this.props.name} </li>
                    <li>年龄：{this.props.age} </li>
                    <li>性别：{this.props.gender} </li>
                </ul>
            </div>

        )
    }
}
