import LogItems from './LogItems'
import './Log.css'
import Card from '../UI/Card/Card'
const Logs = () => {
    let year,month,date,hours,minutes;
    const logsData = [
        {
            date:new Date(2025,3,10,14,20),
            desc:'学习React',
            time:'50',
            id:'4'
        },
        {
            date:new Date(),
            desc:'深度学习',
            time:'100',
            id:'3'
        },
        {
            date:new Date(2025,5,10,14,20),
            desc:'神经网络',
            time:'60',
            id:'2'
        },
        {
            date:new Date(2025,5,10,14,20),
            desc:'智能体',
            time:'60',
            id:'1'
        },
    ]
   
    //将数据放入JSX中
    const logItemDate = logsData.map((item)=><LogItems {...item} key="{item.id}"/>)
    return <Card className="logs">
        {/* new Date(year:2025,month:3,date:10,hours:14,minutes:0)   这里需要把:改成=否则会报错 */}
        {/* year=2025,month=3,date=1,hours=14,minutes=0 */}
        
        {/* <LogItems date={item.date} desc={item.desc} time={item.time}/> */}
       {logItemDate} 
       
    </Card>
}
export default Logs