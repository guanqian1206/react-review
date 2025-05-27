import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'

// 设置移动端的适配
// 除以几视口的宽度就是多少rem，现在我们设置视口的总宽度为750rem,视口分为750份,按照设计图的宽度来
document.documentElement.style.fontSize = 100/750+'VW' //此时视口的宽度为750rem,如果除以350，那么就是375rem
// react严格模式下double-invoking重复调用，以发现代码中的副作用，所以在开发模式且开启了React严格模式时，这些函数会被调用两次
// 函数组件的函数体
// 参数为函数的state
// 参数为函数的setState
// 参数为函数的useState,useMemo,useReducer

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
   <App/>
  // </React.StrictMode>
);

 