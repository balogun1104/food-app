import ReactDom from 'react-dom';
import { Fragment } from 'react';
import classes from './Modal.module.css'


const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onHide}/>
};

const ModalOverlay = props => {
    return (
    <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
    )
};

const PortalElement = document.getElementById('overlays')

const Modal = props => {
    return (
        <Fragment>
           {ReactDom.createPortal(<Backdrop onHide={props.onHide}/>, PortalElement)}
           {ReactDom.createPortal(
           <ModalOverlay>{props.children}</ModalOverlay>,
           PortalElement
           )}
           
        </Fragment>
    )
};
 
export default Modal;