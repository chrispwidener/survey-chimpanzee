// {
//   id: int,
//   surveyId: int,
//   type: [dropdown, multiple-choice, input, check-one, scale]
//   question: String
// }

const questionDummyData = [
    //Dummy Data for Survey 1
    {
        id: 1,
        surveyId: 1,
        type: 'input',
        question: "What is your name?",
        possibleAnswers: [],
    },
    {
        id: 2,
        surveyId: 1,
        type: 'dropdown',
        question: "What is your favorite color?",
        possibleAnswers: ["Blue", "Red", "Green", "Other"],
    },
    {
        id: 3,
        surveyId: 1,
        type: "multiple-choice",
        question: "Which of these foods do you like?",
        possibleAnswers: ["Pizza", "Spaghetti", "Cereal", "Toast"],
    },
    {
        id: 4,
        surveyId: 1,
        type: "check-one",
        question: "What is your age range?",
        possibleAnswers: ["0-18", "19-30", "30-50", "51+"],
    },
    // Dummy Data for Survey 2
]

export default questionDummyData;