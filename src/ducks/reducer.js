// import axios from 'axios';

const initialState = {
    //Main app use variables
    //User information of who is currently logged in.

    //FIXME: This will need to be not hardcoded after building project
    user: {
        id: 1,
        user_name: "Jonathan Baxter",
        img: "https://lh5.googleusercontent.com/-JLfHGi69FlQ/AAAAAAAAAAI/AAAAAAAAAT8/MvFrMrA3hi8/photo.jpg",
        auth0_id: "google-oauth2|114719994213853202721"
        // id: 2,
        // user_name: "Knuckles",
        // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_SzzNsQosujngZ1WL7hZi7WmpHZlLCQ3_htoFhYUb1PMb4-g",
        // auth0_id: "Autho_id_awes"
        // id: 3,
        // user_name: "The Brain",
        // img: "https://img.etsystatic.com/il/c12f23/1276523468/il_570xN.1276523468_3td0.jpg?version=1",
        // auth0_id: "TheBrainCommandsAll"
        // id: 4,
        // user_name: "Jerry Springer",
        // img: "https://imagecdn.wciu.com/Ocau6-1477409965-7-show-JerrySpringer-760x400.png",
        // auth0_id: "AuthorizedPig"
        // id: 5,
        // user_name: "Jerry Seinfeld",
        // auth0_id: "AuthorizedComic",
        // img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Jerry_Seinfeld.jpg/250px-Jerry_Seinfeld.jpg"
        // id: 6,
        // user_name: "Jerry Lewis",
        // img: "https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2017/08/20140023/Jerry-Lewis-nutty-professor-700x380.jpg",
        // auth0_id: "AuthorizNutProfessor"
        // id: 7,
        // user_name: "Leroy Jenkins",
        // img: "https://ih1.redbubble.net/image.43363301.5311/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg",
        // auth0_id: "AuthorizJENKINS!!"
        // id: 8,
        // user_name: "Jonathan Baxter",
        // img: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
        // auth0_id: "google-oauth2|113917534783401720882"
        // id: 9,
        // user_name: "Jon Baxter",
        // img: "https://lh3.googleusercontent.com/-Ac4DWJ6TAv8/AAAAAAAAAAI/AAAAAAAAAAc/GGCx7TN9ERY/photo.jpg",
        // auth0_id: "google-oauth2|104198879589231371430"
    },


    //SurveyUsersTable is the table of all users who are currently registered to the app as a whole.
    surveyUsersTable: [],
    surveyAdminsTable: [],
    //This is the table of quizzes to be used on the dashboard page.
    quizTable: [],
    surveyTable: [],
    //All of this is for people who are currently taking quizzes
    //Logic stores for dashboard to store for app to use to figure out which quiz being used.
    currentQuizId: -1,
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
    quizResultsUltraJoinedTable: [],
    resultsSurTemporaryStore: [],
    scaleValueForSurveysSave: 5
}




//User Types
const GET_USER = 'GET_USER';
const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_SURVEY_ADMINS = 'GET_SURVEY_ADMINS';

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
const GET_QUIZ_RESULTS_JUST_POSTED_AFTER_QUIZ = 'GET_QUIZ_RESULTS_JUST_POSTED_AFTER_QUIZ';
const GET_QUIZ_RESULTS_JOINED_ULTRA_TABLE = 'GET_QUIZ_RESULTS_JOINED_ULTRA_TABLE';

//Survey Types
const SET_SURVEY_ID = 'SET_SURVEY_ID';
const SET_CURRENT_SURVEY_INFO = 'SET_CURRENT_SURVEY_INFO';
const GET_SURVEY_TABLE = 'GET_SURVEY_TABLE';
const GET_MEGA_SURVEY_TABLE = 'GET_MEGA_SURVEY_TABLE';
const GET_CURRENT_SCALE_IN_SURVEY = 'GET_CURRENT_SCALE_IN_SURVEY';
const INSERT_NEW_SURVEY_ANS_RESULT = 'INSERT_NEW_SURVEY_ANS_RESULT';



//Action Creators

//-------------------------------------------------User Actions----------------------------------------------------------------------
//Gets the current user from login cycle.
export function getUser(userData) {

    return {
        type: GET_USER,
        payload: userData
    }
}
//Gets complete list of users from from app users database.
export function getAllUsers(surveyUserTable) {
    // console.log(surveyUserTable)
    return {
        type: GET_ALL_USERS,
        payload: surveyUserTable
    }
}
export function getSurveyAdmins(surveyAdminsTable) {
    return {
        type: GET_SURVEY_ADMINS,
        payload: surveyAdminsTable
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
export function getQuizTable(newTable) {
    // let newQuizTable = axios.get('/api/quizmain').then(resDat => {
    //     console.log(resDat.data);
    //     return resDat.data
    // })

    // console.log(newTable);
    return {
        type: GET_QUIZ_TABLE,
        payload: newTable
    }
}
export function getMegaQuizTable(theMegaTable) {
    // let theMegaTable = axios.get('/api/quizmain/getmegaquiztable').then( theMassiveTable => {
    //     console.log(theMassiveTable.data);
    //     return theMassiveTable.data;
    // }).catch( err => { console.log(`Failure on entry with getting the massive table: ${err}`)})
    // console.log( theMegaTable );
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

//Axios way
// export function getQuizResultsJustPostedAfterQuiz(userId) {
//     let quizResults = axios.get(`/api/quizResultsByUser/${userId}`).then(userQuizResults => userQuizResults.data )
//     // .catch(err => console.log('unable to retrieve table for user', err))
//     console.log(quizResults);

//     return {
//         type: GET_QUIZ_RESULTS_JUST_POSTED_AFTER_QUIZ,
//         payload: quizResults
//     }
// }
export function getQuizResultsJustPostedAfterQuiz(quizResults) {
    return {
        type: GET_QUIZ_RESULTS_JUST_POSTED_AFTER_QUIZ,
        payload: quizResults
    }
}
export function getQuizResultsInJoinedTable(quizJoinedTable) {
    return {
        type: GET_QUIZ_RESULTS_JOINED_ULTRA_TABLE,
        payload: quizJoinedTable
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
export function getSurveyTable(newTable) {
    // let newSurveyTable = axios.get('/api/surveymain').then(resDat => {
    //     return resDat.data
    // })
    return {
        type: GET_SURVEY_TABLE,
        payload: newTable
    }
}
export function getMegaSurveyTable(theMegaTable) {
    // let theMegaTable = axios.get('/api/quizmain/getmegaquiztable').then( theMassiveTable => {
    //     console.log(theMassiveTable.data);
    //     return theMassiveTable.data;
    // }).catch( err => { console.log(`Failure on entry with getting the massive table: ${err}`)})
    // console.log( theMegaTable );
    return {
        type: GET_MEGA_SURVEY_TABLE,
        payload: theMegaTable
    }
}
export function insertNewSurveyAnswerIntoResultsArray(newAnswer) {
    return {
        type: INSERT_NEW_SURVEY_ANS_RESULT,
        payload: newAnswer
    }
}
export function getCurrentScaleInSurvey(scaleValue) {
    // let theMegaTable = axios.get('/api/quizmain/getmegaquiztable').then( theMassiveTable => {
    //     console.log(theMassiveTable.data);
    //     return theMassiveTable.data;
    // }).catch( err => { console.log(`Failure on entry with getting the massive table: ${err}`)})
    // console.log( theMegaTable );
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
        case GET_ALL_USERS:
            return (
                // console.log(action.payload),
                Object.assign({}, state, { surveyUsersTable: action.payload })
            )
        // case GET_ALL_USERS + '_FULFILLLED':
        // return( console.log(action.payload),
        //      Object.assign({}, state, { surveyUsersTable: action.payload })
        //         )
        case GET_SURVEY_ADMINS:
            return Object.assign({}, state, { surveyAdminsTable: action.payload })
        //-------------------------------------QUIZ CASES------------------------------------
        case SET_QUIZ_ID:
            return Object.assign({}, state, { currentQuizId: action.payload })
        case SET_CURRENT_QUIZ_INFO:
            return Object.assign({}, state, { currentQuizInfo: action.payload })
        case SET_CURRENT_QUIZ_QUESTIONS_INFO:
            return Object.assign({}, state, { currentQuizQuestionsInfo: action.payload })
        case SET_CURRENT_QUIZ_ANSWERS_INFO:
            return Object.assign({}, state, { currentQuizAnswersInfo: action.payload })
        case GET_QUIZ_TABLE:
            return Object.assign({}, state, { quizTable: action.payload })
        case GET_MEGA_QUIZ_TABLE:
            return Object.assign({}, state, { megaQuizTable: action.payload })
        case INSERT_NEW_QUIZ_ANS_RESULT:
            return Object.assign({}, state, {
                resultsTemporaryStore: [...state.resultsTemporaryStore,
                action.payload]
            })
        case GET_QUIZ_RESULTS_JUST_POSTED_AFTER_QUIZ:
            return Object.assign({}, state, {
                quizResultsFromResultsForUser: action.payload
                // ,
                // resultsTemporaryStore: []
            })
        case GET_QUIZ_RESULTS_JOINED_ULTRA_TABLE:
            return Object.assign({}, state, { quizResultsUltraJoinedTable: action.payload })
        // case GET_QUIZ_RESULTS_JUST_POSTED_AFTER_QUIZ + '_REJECTED':
        //     return console.log('Did not submit properly with axios.');
        // case GET_QUIZ_RESULTS_JUST_POSTED_AFTER_QUIZ + '_PENDING':
        //     return console.log('Still loading the results from the call.');
        // case GET_QUIZ_RESULTS_JUST_POSTED_AFTER_QUIZ + '_FULFILLED':
        //     return Object.assign({}, state, { resultsTemporaryStore: initialState.resultsTemporaryStore, quizResultsFromResultsForUser: action.payload })
        //-----------------------------------SURVEY CASES-----------------------------------
        case SET_SURVEY_ID:
            return Object.assign({}, state, { currentSurveyId: action.payload })
        case SET_CURRENT_SURVEY_INFO:
            return Object.assign({}, state, { currentSurveyInfo: action.payload })
        case GET_SURVEY_TABLE:
            return Object.assign({}, state, { surveyTable: action.payload })
        case GET_MEGA_SURVEY_TABLE:
            return Object.assign({}, state, { megaSurveyTable: action.payload })
        case INSERT_NEW_SURVEY_ANS_RESULT:
            return Object.assign({}, state, {
                resultsSurTemporaryStore: [...state.resultsSurTemporaryStore,
                action.payload]
            })
        case GET_CURRENT_SCALE_IN_SURVEY:
            return Object.assign({}, state, { scaleValueForSurveysSave: action.payload })
        //----------------------------------DEFAULT RETURN----------------------------------
        default:
            return state;
    }
}