import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'

 
document.documentElement.style.fontSize = 100/750+'VW' //此时视口的宽度为750rem,如果除以350，那么就是375rem
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);

 