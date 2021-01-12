export default function QuestionCard(props) {

    const question = props.question;

    return (
        <div>
           Question: { question.question } 
        </div>
    )
}
