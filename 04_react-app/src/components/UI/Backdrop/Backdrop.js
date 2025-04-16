import ReactDOM from 'react-dom'
import classes from './Backdrop.module.css'

const backdropRoot = document.getElementById('backdrop-root')

// ReactDOM.createPortal(child, container)
// child：任何可渲染的 React 子元素（如 JSX、字符串、片段等）
// container：一个 DOM 元素，作为 portal 的目标容器
const Backdrop = ( props) => {
    return  ReactDOM.createPortal( 
       <div className={`${classes.Backdrop} ${props.className}`}>
         {props.children}
         </div>
     ,backdropRoot)
}
export default Backdrop