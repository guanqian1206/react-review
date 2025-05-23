// Context相当于一个公共的存储空间
// 我们可以将多个组件中都需要访问的数据统一存储到一个Context中，
// 这样无需通过props逐层传递，即可使组件访问到这些数据
// 通过React.createContext()创建context
import React from 'react';
const cartContext = React.createContext({
    items:[],
    totalAmount:0,
    totalPrice:0,
    // addMealHandler:()=>{

    // },
    // subMealHandler:()=>{
        
    // },
    // clearCart:()=>{
        
    // },
    cartDispatch:()=>{

    }
})
export default cartContext;

// ✅ 总结对比
// 功能          	createContext / useContext	        useReducer
// 数据共享	        ✅ 跨层级共享数据	               ❌ 不负责共享
// 状态管理	        ❌ 只能共享已有状态	               ✅ 管理状态更新逻辑
// 复杂状态支持	     ❌ 需手动 setState	               ✅ 支持复杂状态逻辑
// 可维护性	        ❌ 多处修改易混乱	               ✅ 集中式状态更新


// 🧩 所以要不要用 useReducer？
// 如果你只是想共享几个简单的变量，可以直接用 useState + useContext。
// 但如果你面对的是：
// 多关联值的状态对象
// 多种更新行为需要统一处理
// 状态逻辑变得越来越复杂
// 那么使用 useReducer 是为了提升 可维护性 和 可测试性，就像你在写大型应用时会倾向于用 Redux 一样。

// 💡 实际开发中，useReducer + useContext 就是轻量级的 Redux 替代方案。