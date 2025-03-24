// import logo from './logo.svg';
import './App.css';
import Logs from './Components/logs/Log';
function App() {
  const clickHandler = (event)=>{
    event.preventDefault();//取消默认行为
    event.stopPropagation();//取消事件的冒泡
    
    alert('我是handler')
    // 在React中，无法通过return false取消默认行为
    // return false

    // 事件对象
    //   React事件中同样会传递事件对象，可以在响应函数中定义参数来接收事件对象
    //   React中的事件对象同样不是原生的事件对象，是经过React包装后的事件对象
    //   由于对象进行过包装，所以使用过程中我们无需再去考虑兼容性问题
  }
  return (
    <div className="App" onClick={()=>{alert('div')}}>
      <Logs />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/*      
        和原生JS不同，在React中事件的属性需要使用驼峰命名法：
          onclick  ->  onclick
          onchange ->  onChange
        属性值不能直接执行代码，而是需要一个回调函数： */}
      {/* <button onClick={  alert(123) }>按钮点击</button> 这样会直接执行 */}
      {/* <button onClick={()=>{alert(123)}}>按钮点击</button> */}
        <a href="https://www.baidu.com" onClick={clickHandler}>按钮点击</a>
    </div>
  );
}

export default App;
