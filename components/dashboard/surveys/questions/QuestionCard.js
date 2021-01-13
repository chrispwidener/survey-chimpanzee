import styles from './QuestionCard.module.css';

export default function QuestionCard(props) {

    const question = props.question;

    return (
        <div className={styles.QuestionCard}>
           <p>Question: { question.question }</p>
           <p>Type: { question.type }</p>
        </div>
    )
}
