import LogItems from './LogItems'
import './Log.css'
import Card from '../UI/Card/Card'
 
const Logs = (props) => {
    // LogsDate用来存储学习的日志
    // 这个数据除了当前组件Logs需要使用外，LogsForm也需要使用
    // 当遇到一个数据需要被多个组件使用时，我们可以将数据放入到这些组件共同的祖先元素中，
    // 这样就可以使得多个组件都能方便的访问到这个数据

    // state的提升

   
    //将数据放入JSX中
    const logItemDate = props.logsData.map((item)=><LogItems {...item} key="{item.id}"/>)
    return <Card className="logs">
        {/* new Date(year:2025,month:3,date:10,hours:14,minutes:0)   这里需要把:改成=否则会报错 */}
        {/* year=2025,month=3,date=1,hours=14,minutes=0 */}
        
        {/* <LogItems date={item.date} desc={item.desc} time={item.time}/> */}
       {logItemDate} 
       
    </Card>
}
export default Logs