import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';
import { useEffect } from 'react';
import A from './A';
function App() {
  console.log('函数执行了---->组件创建完毕');
  const [count, setCount] = useState(0);
  // setCount(1) 报错Too many re-renders. React limits the number of renders to prevent an infinite loop.
  // setState()执行流程(函数组件)
  // setCount()  --->dispatchSetDate()
  // 会先判断，组件当前处于什么阶段
  // 如果是渲染阶段，不会检查state值是否相同
  // 如果不是渲染阶段，会检查state值是否相同
  // 如果值不同，则对组件重新渲染
  // 如果值相同，则不进行组件重新渲染
  // 如果值相同，React在一些情况下会继续执行当前组件的渲染
  // 但是这个渲染不会触发其子组件的渲染，这次渲染不会产生实际效果


  // useEffect()是一个钩子函数，需要一个函数作为参数
  // 这个作为参数的函数，将会在组件渲染完毕后执行
  // 在开发中，可以将那些会产生副作用的代码编写到useEffect()的回调函数中
  // 这样就可以避免这些代码影响到组件的渲染
  useEffect(() => {
    setCount(1);
  });
  const clickHandler = () => {
    setCount(1);
  }
  return (
    <div className="App">
      <header className="App-header">

        <p>
          {count}
        </p>
        <button onClick={clickHandler}>button</button>


      </header>
      <A></A>
    </div>
  );
}

export default App;
