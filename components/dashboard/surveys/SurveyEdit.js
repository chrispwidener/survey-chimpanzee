import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { selectSurveys } from 'store/survey/surveyReducer';
import { selectQuestions } from 'store/survey/questions/questionReducer';

import QuestionCard from './questions/cards/QuestionCard';

const SurveyEdit = (prop) => {

    const router = useRouter();
    const surveyID = router.query.id;
    const surveys = useSelector(selectSurveys);
    const survey = surveys.find(survey => survey.id == surveyID);

    const allQuestions = useSelector(selectQuestions)
    const surveyQuestions = allQuestions.filter( question => {
       return question.surveyId == survey.id;
    })

    const questionCards = surveyQuestions.map(question => {
        return <QuestionCard question={question} key={question.id} />
    })

    return (
        <div>
           <p>Survey:  { survey.name }</p>
           { questionCards }
        </div>
    );
}

export default SurveyEdit;
