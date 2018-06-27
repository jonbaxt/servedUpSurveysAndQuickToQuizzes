import axios from 'axios';
const initialState = {
    //Main app use variables
    //User information of who is currently logged in.
    user: {
    },
    pathnameCurrent: [],
    
    //SurveyUsersTable is the table of all users who are currently registered to the app as a whole.
    surveyUsersTable: [],
    surveyAdminsTable: [],
    //This is the table of quizzes to be used on the dashboard page.
    quizTable: [],
    surveyTable: [],
    quizNewCreatedTable: [],
    //All of this is for people who are currently taking quizzes
    //Logic stores for dashboard to store for app to use to figure out which quiz being used.
    currentQuizId: -1,
    //For testing in the creator;
    // currentQuizId: '6',
    //Used to have redux track what survey is currently being used when in the survey user.
    currentSurveyId: -1,
    //This is the biggest quiz table to managing the quiz wizard builder of the quiz
    megaQuizTable: [],
    megaSurveyTable: [],
    // I have all this information that could be uploaded from the question wizard for here for who knows what.
    currentQuizInfo: {},
    currentQuizQuestionsInfo: [],
    currentQuizAnswersInfo: [],
    currentSurveyInfo: {},
    currentSelectedQuestionAnswerCount: -1,
    //This is the state that will be used to setup a store of variables in an array while the quiz is being taken.
    resultsTemporaryStore: [],
    //This is the state that will store what was put in the quiz results
    quizResultsFromResultsForUser: [],
    surveyResultsFromResultsForUser: [],
    quizResultsUltraJoinedTable: [],
    surveyResultsUltraJoinedTable: [],
    resultsSurTemporaryStore: [],
    scaleValueForSurveysSave: 5
}
//User Types
const GET_USER = 'GET_USER';
const GET_USER_BY_ID = 'GET_USER_BY_ID';
const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_SURVEY_ADMINS = 'GET_SURVEY_ADMINS';

const SET_CURRENT_PATHNAME = 'SET_CURRENT_PATHNAME';
const RESET_REDUX_TO_INITIAL_STATE = 'RESET_REDUX_TO_INITIAL_STATE';

//Quiz Types
const SET_QUIZ_ID = 'SET_QUIZ_ID';
const SET_CURRENT_QUIZ_INFO = 'SET_CURRENT_QUIZ_INFO';
const SET_CURRENT_QUIZ_QUESTIONS_INFO = 'SET_CURRENT_QUIZ_QUESTIONS_INFO';
const SET_CURRENT_QUIZ_ANSWERS_INFO = 'SET_CURRENT_QUIZ_ANSWERS_INFO';
const GET_QUIZ_TABLE = 'GET_QUIZ_TABLE';
// const GET_QUIZ_QUESTIONS_TABLE = 'GET_QUIZ_QUESTIONS_TABLE';
// const GET_QUIZ_ANSWERS_TABLE = 'GET_QUIZ_ANSWERS_TABLE';
const GET_MEGA_QUIZ_TABLE = 'GET_MEGA_QUIZ_TABLE';
const INSERT_NEW_QUIZ_ANS_RESULT = 'INSERT_NEW_QUIZ_ANS_RESULT';
const GET_NEW_QUIZ_JUST_CREATED = 'GET_NEW_QUIZ_JUST_CREATED';
const GET_QUIZ_RESULTS_JUST_POSTED_AFTER_QUIZ = 'GET_QUIZ_RESULTS_JUST_POSTED_AFTER_QUIZ';
const GET_QUIZ_RESULTS_JOINED_ULTRA_TABLE = 'GET_QUIZ_RESULTS_JOINED_ULTRA_TABLE';
const GET_QUIZ_RESULTS_JOINED_ULTRA_TABLE_BY_AXIOS = 'GET_QUIZ_RESULTS_JOINED_ULTRA_TABLE_BY_AXIOS';

//Survey Types
const SET_SURVEY_ID = 'SET_SURVEY_ID';
const SET_CURRENT_SURVEY_INFO = 'SET_CURRENT_SURVEY_INFO';
const GET_SURVEY_TABLE = 'GET_SURVEY_TABLE';
const GET_MEGA_SURVEY_TABLE = 'GET_MEGA_SURVEY_TABLE';
const GET_CURRENT_SCALE_IN_SURVEY = 'GET_CURRENT_SCALE_IN_SURVEY';
const INSERT_NEW_SURVEY_ANS_RESULT = 'INSERT_NEW_SURVEY_ANS_RESULT';
const GET_SURVEY_RESULTS_JUST_POSTED_AFTER_SURVEY = 'GET_SURVEY_RESULTS_JUST_POSTED_AFTER_SURVEY';
const GET_SURVEY_RESULTS_ULTRA_JOINED_TABLE = 'GET_SURVEY_RESULTS_ULTRA_JOINED_TABLE';

//Action Creators
//-------------------------------------------------VarieousPaths Actions----------------------------------------------------------------------
export function setCurrentPathname(newPathname) {
    return {
        type: SET_CURRENT_PATHNAME,
        payload: newPathname
    }
}
export function resetReduxToInitialState(){
    return {
        type: RESET_REDUX_TO_INITIAL_STATE,
    }
}
//-------------------------------------------------Quiz Actions----------------------------------------------------------------------
//Setting Current Quiz Id
export function setSelectedQuiz(quizId) {
    // console.log(`From reducer: quiz number: ${quizId}`)
    return {
        type: SET_QUIZ_ID,
        payload: quizId
    }
}
//Setting Current Quiz Info for quiz start page.
export function setCurrentQuizInfo(quizInfoObject) {
    return {
        type: SET_CURRENT_QUIZ_INFO,
        payload: quizInfoObject
    }
}
export function setCurrentQuizQuestionsInfo(quizQuestions) {
    return {
        type: SET_CURRENT_QUIZ_QUESTIONS_INFO,
        payload: quizQuestions
    }
}
export function setCurrentQuizAnswersInfo(quizAnswers) {
    return {
        type: SET_CURRENT_QUIZ_ANSWERS_INFO,
        payload: quizAnswers
    }
}
// Retrieve Quiz Table from Database
export function getQuizTable() {
    let newQuizTable = axios.get('/api/quizmain').then(resDat => {
        return resDat.data
    })
    return {
        type: GET_QUIZ_TABLE,
        payload: newQuizTable
    }
}
export function getMegaQuizTable() {
    let theMegaTable = axios.get('/api/quizmain/getmegaquiztable').then(theMassiveTable => {
        return theMassiveTable.data
        // this.props.getMegaQuizTable(theMassiveTable.data)
    }).catch(err => { console.log(`Failure on entry with getting the massive table: ${err}`) })
    return {
        type: GET_MEGA_QUIZ_TABLE,
        payload: theMegaTable
    }
}
export function insertNewQuizAnswerIntoResultsArray(newAnswer) {
    return {
        type: INSERT_NEW_QUIZ_ANS_RESULT,
        payload: newAnswer
    }
}
export function getQuizResultsJustPostedAfterQuiz(quizResults) {
    return {
        type: GET_QUIZ_RESULTS_JUST_POSTED_AFTER_QUIZ,
        payload: quizResults
    }
}
export function getQuizResultsUltraJoinedTableThroughAxios() {
        let quizResultsMega = axios.get('/api/quizresults/joinedtable').then(tableReturned => {
            return tableReturned.data
        }).catch(err => console.log(err))
    return {
        type: GET_QUIZ_RESULTS_JOINED_ULTRA_TABLE_BY_AXIOS,
        payload: quizResultsMega
    }
}
export function getQuizResultsInJoinedTable(quizJoinedTable) {
    return {
        type: GET_QUIZ_RESULTS_JOINED_ULTRA_TABLE,
        payload: quizJoinedTable
    }
}
export function getNewQuizJustCreated(newQuiz){
    return {
        type: GET_NEW_QUIZ_JUST_CREATED,
        payload: newQuiz
    }
}
//Survey Actions
export function setSelectedSurvey(surveyId) {
    return {
        type: SET_SURVEY_ID,
        payload: surveyId
    }
}
//Setting Current Survey Info for Survey start page.
export function setCurrentSurveyInfo(surveyInfoObject) {
    return {
        type: SET_CURRENT_SURVEY_INFO,
        payload: surveyInfoObject
    }
}
export function getSurveyTable() {
    let newSurveyTable = axios.get('/api/surveymain').then(resDat => {
        return resDat.data
    })
    return {
        type: GET_SURVEY_TABLE,
        payload: newSurveyTable
    }
}
export function getMegaSurveyTable() {
    let theMegaTable = axios.get('/api/surveymain/getmegasurveytable').then(theMassiveTable => {
        return theMassiveTable.data
    }).catch(err => { console.log(`Failure on entry with getting the massive table: ${err}`) })
    return {
        type: GET_MEGA_SURVEY_TABLE,
        payload: theMegaTable
    }
}
export function getSurveyResultsJustPostedAfterSurvey(surveyRes){
    return {
        type: GET_SURVEY_RESULTS_JUST_POSTED_AFTER_SURVEY,
        payload: surveyRes
    }
}
export function getSurveyResultsUltraJoinedTable(ultraTable){
    return {
        type: GET_SURVEY_RESULTS_ULTRA_JOINED_TABLE,
        payload: ultraTable
    }
}
export function insertNewSurveyAnswerIntoResultsArray(newAnswer) {
    return {
        type: INSERT_NEW_SURVEY_ANS_RESULT,
        payload: newAnswer
    }
}
export function getCurrentScaleInSurvey(scaleValue) {
    return {
        type: GET_CURRENT_SCALE_IN_SURVEY,
        payload: scaleValue
    }
}

// THE REDUCER
export default function reducer(state = initialState, action) {
    switch (action.type) {
        //------------------------------------USER CASES-----------------------------------------
        case GET_USER:
            return Object.assign({}, state, { user: action.payload })
        // case GET_USER + '_FULFILLED':
        //     return Object.assign({}, state, { user: action.payload })
        // case GET_USER + '_PENDING':                                            //With pending you could animation for pending time when database is being accessed
        // case GET_USER + '_REJECTED': 
        //     return console.log(`${action.payload} did not make it for some reason`)
        case GET_USER_BY_ID:
            return Object.assign({}, state, { user: action.payload })
        case GET_ALL_USERS + '_FULFILLED':
            return Object.assign({}, state, { surveyUsersTable: action.payload })
        case GET_SURVEY_ADMINS + '_FULFILLED':
            return Object.assign({}, state, { surveyAdminsTable: action.payload })
        case SET_CURRENT_PATHNAME:
            return Object.assign({}, state, { pathnameCurrent: [action.payload] })
        case RESET_REDUX_TO_INITIAL_STATE:
            return initialState;
        //-------------------------------------QUIZ CASES-----------------------------------
        case SET_QUIZ_ID:
            return Object.assign({}, state, { currentQuizId: action.payload })
        case SET_CURRENT_QUIZ_INFO:
            return Object.assign({}, state, { currentQuizInfo: action.payload })
        case SET_CURRENT_QUIZ_QUESTIONS_INFO:
            return Object.assign({}, state, { currentQuizQuestionsInfo: action.payload })
        case SET_CURRENT_QUIZ_ANSWERS_INFO:
            return Object.assign({}, state, { currentQuizAnswersInfo: action.payload })
        case GET_QUIZ_TABLE + '_FULFILLED':
            return Object.assign({}, state, { quizTable: action.payload })
        case GET_MEGA_QUIZ_TABLE + '_FULFILLED':
            return Object.assign({}, state, { megaQuizTable: action.payload })
        case INSERT_NEW_QUIZ_ANS_RESULT:
            return Object.assign({}, state, {
                resultsTemporaryStore: [...state.resultsTemporaryStore,
                action.payload]
            })
        case GET_QUIZ_RESULTS_JUST_POSTED_AFTER_QUIZ:
            return Object.assign({}, state, {
                quizResultsFromResultsForUser: action.payload
                ,
                resultsTemporaryStore: []
            })
        case GET_QUIZ_RESULTS_JOINED_ULTRA_TABLE:
            return Object.assign({}, state, { quizResultsUltraJoinedTable: action.payload })
        case GET_QUIZ_RESULTS_JOINED_ULTRA_TABLE_BY_AXIOS + '_FULFILLED':
            return Object.assign({}, state, { quizResultsUltraJoinedTable: action.payload })
        case GET_NEW_QUIZ_JUST_CREATED:
        return Object.assign({}, state, { quizNewCreatedTable: action.payload } )
        // case GET_QUIZ_RESULTS_JUST_POSTED_AFTER_QUIZ + '_REJECTED':
        //     return console.log('Did not submit properly with axios.');
        // case GET_QUIZ_RESULTS_JUST_POSTED_AFTER_QUIZ + '_PENDING':
        //     return console.log('Still loading the results from the call.');
        //-----------------------------------SURVEY CASES-----------------------------------
        case SET_SURVEY_ID:
            return Object.assign({}, state, { currentSurveyId: action.payload })
        case SET_CURRENT_SURVEY_INFO:
            return Object.assign({}, state, { currentSurveyInfo: action.payload })
        case GET_SURVEY_TABLE + '_FULFILLED':
            return Object.assign({}, state, { surveyTable: action.payload })
        case GET_MEGA_SURVEY_TABLE + '_FULFILLED':
            return Object.assign({}, state, { megaSurveyTable: action.payload })
        case GET_SURVEY_RESULTS_JUST_POSTED_AFTER_SURVEY:
            return Object.assign({}, state, { surveyResultsFromResultsForUser: action.payload })
        case GET_SURVEY_RESULTS_ULTRA_JOINED_TABLE:
            return Object.assign({}, state, { surveyResultsUltraJoinedTable: action.payload })
        case INSERT_NEW_SURVEY_ANS_RESULT:
            return Object.assign({}, state, { resultsSurTemporaryStore: [...state.resultsSurTemporaryStore, action.payload] })
        case GET_CURRENT_SCALE_IN_SURVEY:
            return Object.assign({}, state, { scaleValueForSurveysSave: action.payload })
        //----------------------------------DEFAULT RETURN----------------------------------
        default:
            return state;
    }
}