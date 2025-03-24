
import { useState } from 'react';
import { useRef } from 'react';
import './App.css';
let temp ;
function App() {
  console.log('函数执行了---->组件创建完毕');
//  获取原生DOM对象
//  1.传统document方法
//  2.直接从React处获取DOM对象
//  步骤：1.创建一个存储DOM对象的容器
//         使用useRef()钩子函数
            // 钩子函数的注意事项：
            // 1.React中的钩子函数只能用于函数组件或自定义钩子
            // 2.钩子函数只能直接在函数组件中调用
        // 2.将容器设置为想要获取DOM对象元素的ref属性
        // <h1 ref={XXX}>...</h1>
        //   React会自动将当前元素的DOM对象，设置为容器current属性
  

    // useRef()
    // 返回的就是一个普通的JS对象
    // {current:undefined}
    // 所以我们直接创建一个js对象，也可以代替useRef()
    // 区别：
    //   我们创建的对象，组件每次重新渲染都会创建一个新对象
    //    useRef()创建的对象，可以确保每次渲染获取到的都是同一个对象

    // 当你需要一个对象不会因为组件的重新渲染而改变时，就可以使用useRef()

    
  const h1Ref = useRef()//创建一个容器
  const [count,setCount] = useState(1)
  // const h1Ref = {current:null};
  console.log(temp===h1Ref);
  temp = h1Ref;

  const addCount = ()=>{
    setCount((prev)=>{
     return prev+1
    })
  }
 
  return (
    <div className="App"  >
      <h1 ref={h1Ref}>标题</h1>
 
      <button >{count}</button>
      <button onClick={addCount}>+1</button>
   

    </div>
  );
}

export default App;
