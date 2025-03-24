// import logo from './logo.svg';
import './App.css';
import Logs from './components/Logs/Log';
import Card from './components/UI/Card/Card'
import LogsForm from './components/LogsForm/LogsForm'
function App() {
  const clickHandler = (event)=>{
    event.preventDefault();//取消默认行为
    event.stopPropagation();//取消事件的冒泡
 
  }
  return (
    <div className="App"  >
      <Logs />
      <Card >
        <div>something</div>
      </Card>
      <LogsForm/>
    </div>
  );
}

export default App;
