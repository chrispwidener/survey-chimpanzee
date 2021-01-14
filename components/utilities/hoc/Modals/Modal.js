import ModalBackground from './ModalBackground';

import styles from './ModalStyles.module.css';

const Modal = (props) => {

    const active = props.active;

    return  !active ? null : (
        <>
            <ModalBackground close={props.close}>
                <div className={styles.ModalBody} onClick={(e) => e.stopPropagation() }>
                    { props.children }
                </div>
            </ ModalBackground>
        </>
    )
}

export default Modal;
