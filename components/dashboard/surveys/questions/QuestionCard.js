import { useState } from 'react';

import Modal from 'components/utilities/hoc/Modals/Modal';

import styles from './QuestionCard.module.css';

export default function QuestionCard(props) {

    const [modalActive, setModalActive] = useState(false);

    const question = props.question;

    return (
        <div className={styles.QuestionCard}>
           <p>Question: { question.question }</p>
           <p>Type: { question.type }</p>
           <p><span onClick={() => setModalActive(true)}>Edit</span> | <span>Delete</span></p>
           <Modal active={modalActive} close={() => setModalActive(false)} />
        </div>
    )
}
