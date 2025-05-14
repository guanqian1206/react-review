import React, { useReducer } from "react";

// ✅ 对比 useState：
// 特性	       useState	                         useReducer
// 适用场景	   简单状态（数字、字符串、布尔等）  	复杂状态对象或多关联值
// 更新方式	   直接设置新值	                       通过 dispatch(action) 分发动作
// 可维护性	   简单清晰	                          更适合处理复杂业务逻辑

// 📌 二、典型使用场景
// 多个互相关联的状态值

// 如表单：username, password, isSubmitting, error
// 下一个状态依赖之前的状态

// 如计数器、树形结构操作等
// 希望集中管理状态更新逻辑

// 把所有的状态更新逻辑放在一个地方统一管理（类似 Redux）

// const [state, dispatch] = useReducer(reducer, initialState, init);

const App = () => {
  // 数组：第一个参数state，用来获取state的值
  // 数组：第二个参数dispatch，通过派发器可以发送操作state的命令
  //     具体的修改行为由函数reducer执行
  //      reducer的返回值会作为新的state值,reducer的两个参数为
  //   function reducer(state, action) {
  //     // 根据 action.type 更新 state
  //          return newState;
  //   }
  //为了避免重复定义reducer函数，可以定义一个reducer函数，然后通过useReducer传入
  const countReducer = (state, action) => { 
    switch (action.type) {
        case "add":
          return state + 1;
        case "reduce":
          return state - 1;
        default:
          return state; //避免传的type值无效
      }
  };
  const [count, countDispatch] = useReducer(countReducer, 1);
  const addCount = () => {
    countDispatch({ type: "add" });
  };
  const reduceCount = () => {
    countDispatch({ type: "reduce" });
  };
  return (
    <div style={{ width: "750rem", overflow: "auto" }}>
      <div onClick={reduceCount}>减少</div>
      <div> {count}</div>
      <div onClick={addCount}>增加</div>
    </div>
  );
};
export default App;
