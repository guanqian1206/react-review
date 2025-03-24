import './ConfimModal.css'
import Card from '../Card/Card'
import BackDrop from '../BackDrop/BackDrop'
const ConfirmModal = props => {
    return <BackDrop>
        <Card className="confirmModal">
            <div>
                <div className="text">
                    {props.confirmText}
                </div>
                <div className="buttons">
                    <button onClick={props.onOk}>确认</button>
                    <button onClick={props.onCancel}>取消</button>
                </div>
            </div>

        </Card>
    </BackDrop>

}
export default ConfirmModal