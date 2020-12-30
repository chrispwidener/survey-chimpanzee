import { createSlice } from '@reduxjs/toolkit'

// Surveys are structured like so:
// {
//    id: Date.now()
//    creatorEmail: String - Email address of the person who created the survey
//    name: String - Survey name
//    active: bool - Determines whether or not the survey can be taken
// }

const initialState = {
    surveys: [{
        id: 1,
        creatorEmail: "test@test.com",
        name: "Test Survey 1",
        active: true,
    }, {
        id: 2,
        creatorEmail: "test@test.com",
        name: "Test Survey 2",
        active: true,
    }]
}

const surveyReducer = createSlice({
    name: "survey",
    initialState,
    reducers: {
        addSurvey: (state, action) => {
            state.surveys.push({
                id: Date.now(),
                creatorEmail: action.payload.email,
                name: action.payload.name,
                active: true,
            });
        },
        activateSurvey: (state, action) => {},
        deactivateSurvey: (state, action) => {},
        deleteSurvey: (state, action) => {
            const index = state.surveys.findIndex(survey => { survey.id == action.payload.id })
            state.surveys.splice(index)
        }
    }
});

//Selectors
export const selectSurveys              = state => state.survey.surveys;

//Actions
export const {
    addSurvey,
    activateSurvey,
    deactivateSurvey,
    deleteSurvey,
} = surveyReducer.actions

export default surveyReducer.reducer