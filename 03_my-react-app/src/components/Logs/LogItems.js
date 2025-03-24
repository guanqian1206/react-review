import LogDate from './LogDate'
import './LogItems.css'
import Card from '../UI/Card/Card';
import ConfirmModal from '../UI/ConfimModal/ConfimModal';
import { useState } from 'react';
const LogItems = (props) => {
    // 在函数组件中，属性就相当于是函数的参数，可以通过参数来访问
    // 可以在函数组件的形参中定义一个props，props指向的是一个对象
    // 它包含了父组件中传递的所有参数
    // props是只读的，不能修改
    // props.desc = '我修改试试' Cannot assign to read only property 'desc' of object '#<Object>'
    const [showConfirm, setShowConfirm] = useState(false)
    const deleteHandler = (e) => {
        console.log('删除~~');
        // const isDel = window.confirm('确定删除？');
        setShowConfirm(true);
        // if(isDel){
        // console.log(e.target);
        // 删除当前的item，要删除item,其实就是要从数据的state移除指定的数据
        // console.log('logItem~~删除',props.onDelLog,props.logId);
            // props.onDelLog()
        // }
    }
    const cancelHandler = ()=>{
        setShowConfirm(false);
    }
    const okHandler = ()=>{
        props.onDelLog()
        setShowConfirm(false);
    }
    // portal
    //     组件默认会作为父组件的后代渲染到页面中
    //     但是有些情况下，这种方式会带来一些问题
    // 通过portal可以将组件渲染到页面中的指定位置
    // 使用方法：
    // 1.在index.html添加一个新的元素
    // 2.修改组件的渲染方式
    // 通过ReactDOM.createPortal()作为返回值创建元素
    // 参数：
    // 1.JSX（修改前return后的代码）
    // 2.目标位置（DOM元素）



    return <Card className="item">
        <LogDate date={props.date} />
        <div className="content">
            <h2 className="desc">{props.desc}</h2>
            <div className="time">{props.time}分钟</div>
        </div>
        <div>
            <button onClick={deleteHandler} className='delete'>删除</button>
        </div>
        {showConfirm &&
            <ConfirmModal confirmText="该操作不可恢复！确认删除吗？"
            onCancel = {cancelHandler}
            onOk={okHandler}
            ></ConfirmModal>
        }
    </Card>
}
export default LogItems