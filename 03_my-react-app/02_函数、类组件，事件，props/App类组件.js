import logo from './logo.svg';
import './App.css';
import React from 'react';

// 类组件必须要继承React.Component
//   相较于函数组件，编写更加麻烦
//   但是功能是一样的
class App extends React.Component() {
  render() {
    // 类组件中必须添加一个render方法，且方法的返回值必须是一个JSX
    return <div className="App" >
      <header className="App-header">
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
      </header>

    </div>


  }
}

export default App;
