import ReactDOM from 'react-dom';

import Button from './Button';
import "./modal.css";

const portalElement = document.getElementById('portal');

const Modal = ({title="Modal Title", onClose=()=>{}, onSubmit=()=>{}, btnText="Submit", children, ...props}) => {
    return ReactDOM.createPortal(
        <>
            <div className='modal_wrapper' onClick={onClose}>
            </div>
            <div className='modal'>
                <h2>{title}</h2>
                {children}
                <div className='flex-container'>
                    <Button className="btn-secondary" onClick={onClose}>Cancel</Button>
                    <Button className="btn-primary" onClick={onSubmit}>{btnText}</Button>
                </div>
            </div>
        </>
        ,
        portalElement
    )
}

export default Modal;