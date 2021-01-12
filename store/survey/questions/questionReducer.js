import { createSlice } from '@reduxjs/toolkit'

import dummyData from './dummyData';

//  Questions should be structured like so:
// {
//   id: 1,
//   surveyId: 1,
//   type:  ['dropdown', 'multiple-choice', 'input'] 
//   answer: variable type
// }
//

const initialState = {
    questions: dummyData,
}

const questionReducer = createSlice({
    name: "question",
    initialState,
    reducers: {
        addQuestion: (state, action) => {
            state.questions.push(action.payload.question)
        }
    }
});

export const selectQuestions = state => state.question.questions;

export const {
    addQuestion,
} = questionReducer.actions

export default questionReducer.reducer