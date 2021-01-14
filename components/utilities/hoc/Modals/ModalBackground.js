import styles from './ModalStyles.module.css';

export default function ModalBackground(props) {
    return (
        <div className={styles.ModalBackground} onClick={props.close}>
            { props.children }
        </div>)
}
