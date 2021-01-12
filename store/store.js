import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'store/auth/authReducer';
import surveyReducer from 'store/survey/surveyReducer';
import questionReducer from 'store/survey/questions/questionReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        survey: surveyReducer,
        question: questionReducer,
    }
})

export default store;