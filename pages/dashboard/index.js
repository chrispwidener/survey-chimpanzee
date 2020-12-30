import { useSelector } from 'react-redux';
import { selectSurveys } from 'store/survey/surveyReducer';
import { selectLoggedInAs } from 'store/auth/authReducer';

import SurveyCard from 'components/dashboard/surveys/SurveyCard';

const index = () => {

    const userEmail = useSelector(selectLoggedInAs);
    const surveys   = useSelector(selectSurveys).filter(survey => survey.creatorEmail == userEmail);

    const surveyCards = surveys.map(survey => {
        return <SurveyCard survey={survey} key={survey.id} />
    })

    return (
        <>
            <h2>Surveys:</h2>
            { surveyCards }
        </>
    );
}

export default index;
