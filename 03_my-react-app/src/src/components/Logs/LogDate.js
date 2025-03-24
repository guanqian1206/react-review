import './LogDate.css'
const LogDate = (props)=>{
 
    const month = props.date.toLocaleString('zh-CN',{year:'numeric',month:'numeric'});
    const day = props.date.getDate();
    return         <div className="date">
    <div className="month">
        {month}
    </div>
    <div className="day">
    {day}
    </div>
</div>
}
export default LogDate