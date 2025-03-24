
import { useState } from 'react';
import './App.css';

function App() {
  console.log('函数执行了---->组件创建完毕');
  // 在React中，当组件渲染完毕后，再修改组件中的变量，不会使组件重新渲染
  // 要使得组件可以收到变量的影响，必须在变量修改后对组件进行重新渲染
  // 这里我们就需要一个特殊变量，当这个变量被修改时，组件会自动重新渲染

  // state相当于一个变量，
  // 只是这个变量在React中进行了注册，
  // React会监控这个变量的变化，当state发生变化时，会自动触发组件的重新渲染
  // 使得我们的修改可以在页面中呈现出来
  // 当state值是一个对象时，修改时是使用新的对象替换已有的对象
  // 通过setState去修改一个state时，并不表示修改当前的state
  // 它修改的是组件下一次渲染时state值
  // setState()会触发组件的重新渲染，它是异步的
  // 所以当调用setState()需要用旧state的值时，一定要注意
  // 有可能出现计算错误的情况
  // 为了避免这种情况，可以通过为setState传递回调函数的形式来修改state

  // 在函数组件中，我们需要通过钩子函数，获取state
  // 使用钩子useState()来创建state
  // import { useState } from 'react';


  // 它需要一个值作为参数，这个值就是state的初始值
  // 该函数会返回一个数组
  // 初始值只用来显示数据，直接修改不会触发组件的重新渲染
  // 数组中的第二个元素，是一个函数，通常会命名为setXXX
  // 这个函数用来修改state,调用其修改state后会触发组件的重新渲染
  // 并且使用函数中的值作为新的state值


  // 在vue中，data 属性是利用 Object.defineProperty 处理过的，
  // 更改 data 的数据的时候会触发数据的 getter 和 setter，
  // 但是 React 中没有做这样的处理，如果直接更改的话，react 是无法得知的，
  // 所以，需要使用特殊的更改状态的方法 setState。

  const [counter,setCounter] = useState(1);
  const [user,setUser] = useState({name:'charlotte',age:18})
  // let counter = result[0];
  // let setCounter = result[1];
 
  console.log('1111~', counter);
  console.log('2222~', setCounter);

  const addHandler = () => {
    setTimeout(()=>{
      setCounter((prevCounter)=>{
        // setState()中回调函数返回值将会成为新的state值
        // 回调函数执行时，React会将最新的state值作为参数传递
        return prevCounter + 1
      })
 
    },1000)


  }
  const lessHandler = () => {
    setCounter(counter - 1)

  }
  const updateUserHandler = ()=>{
    // setUser({name:'annie',age:18})

    // 如果直接修改旧的state对象，由于对象还是那个对象，指向的地址一样，所以不会生效
    // user.name = 'annie'
    // setUser(user)

    // const newUser = Object.assign({},user);//浅拷贝
    // newUser.name = 'annie';
 
    setUser( {...user,name:'annie'})//也是浅拷贝
  }
  return (
    <div className="App"  >
      <h1>{counter}</h1>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <button onClick={lessHandler}>-</button>
      <button onClick={addHandler}>+</button>
      <button onClick={updateUserHandler}>修改用户信息</button>

    </div>
  );
}

export default App;
