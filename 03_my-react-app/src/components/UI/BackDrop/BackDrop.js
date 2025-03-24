import './BackDrop.css'
import ReactDOM from 'react-dom'
// 获取backDrop的根元素
const backdropRoot = document.getElementById('backDrop-root')
const BackDrop = props => {
    return ReactDOM.createPortal(
        <div className="backDrop">
            <div>
                {props.children}
            </div>

        </div>, backdropRoot)
}
export default BackDrop