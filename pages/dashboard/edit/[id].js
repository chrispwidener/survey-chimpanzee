import { useRouter } from 'next/router';

import SurveyEdit from 'components/dashboard/surveys/SurveyEdit';

const index = () => {

    const router   = useRouter();
    const surveyID = router.query;

    return (
        <div>
            <SurveyEdit />
        </div>
    );
}

export default index;
