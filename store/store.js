import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'store/auth/authReducer';
import surveyReducer from 'store/survey/surveyReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        survey: surveyReducer,
    }
})

export default store;