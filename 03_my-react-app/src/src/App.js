// import logo from './logo.svg';
import './App.css';
import Logs from './components/Logs/Log';
import Card from './components/UI/Card/Card'
import LogsForm from './components/LogsForm/LogsForm'
import {useState} from 'react';
function App() {
  const clickHandler = (event)=>{
    event.preventDefault();//取消默认行为
    event.stopPropagation();//取消事件的冒泡
 
  }
  const [logsData,setLogsData] = useState([
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
])
// 下一步：
// 将LogsForm中的数据传递给App组件，然后App组件，将新的日志添加到数组中！

// 定义一个函数
const saveLogHandler = (newLog)=>{
  console.log('新值~~',newLog);
  // 向新值中添加一条
  setLogsData([...logsData,{...newLog,id:Date.now()+''}])
}
  return (
    <div className="App"  >
      <Logs logsData={logsData} />
      <Card >
        <div>something</div>
      </Card>
      <LogsForm onSaveLog={saveLogHandler}/>
    </div>
  );
}

export default App;
