import LogDate from './LogDate'
import './LogItems.css'
import Card from '../UI/Card/Card'
const LogItems = (props) => {
    // 在函数组件中，属性就相当于是函数的参数，可以通过参数来访问
    // 可以在函数组件的形参中定义一个props，props指向的是一个对象
    // 它包含了父组件中传递的所有参数
    // props是只读的，不能修改
    // props.desc = '我修改试试' Cannot assign to read only property 'desc' of object '#<Object>'
 
    return <Card className="item">
        <LogDate date={props.date}/>
        <div className="content">
            <h2 className="desc">{props.desc}</h2>
            <div className="time">{props.time}分钟</div>
        </div>
    </Card>
}
export default LogItems