import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'

// 设置移动端的适配
// 除以几视口的宽度就是多少rem，现在我们设置视口的总宽度为750rem,视口分为750份,按照设计图的宽度来
document.documentElement.style.fontSize = 100/750+'VW' //此时视口的宽度为750rem,如果除以350，那么就是375rem


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);

 