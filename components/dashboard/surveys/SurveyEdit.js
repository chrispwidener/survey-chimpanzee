import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { selectSurveys } from 'store/survey/surveyReducer';
import { selectQuestions } from 'store/survey/questions/questionReducer';

const SurveyEdit = (prop) => {

    const router = useRouter();
    const surveyID = router.query.id;
    const surveys = useSelector(selectSurveys);
    const survey = surveys.find(survey => survey.id == surveyID);

    const questions = useSelector(selectQuestions)

    return (
        <div>
           Survey:  { survey.name }
        </div>
    );
}

export default SurveyEdit;
