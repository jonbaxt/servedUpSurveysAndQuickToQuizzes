import axios from 'axios';

//User Types
const GET_USER = 'GET_USER';
const GET_USER_BY_ID = 'GET_USER_BY_ID';
const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_SURVEY_ADMINS = 'GET_SURVEY_ADMINS';

export function getUser(userResult) {
    // let userResult = axios.get('/auth/me').then(res => {
    //     return res.data // this.props.getUser(res.data)
    // }).catch((err) => console.log('Didnt work', err))
    return {
        type: GET_USER,
        payload: userResult
    }
}
export function getUserById(id) {

    return {
        type: GET_USER_BY_ID,
        payload: id
    }
}
//Gets complete list of users from from app users database.
export function getAllUsers() {
    let surveyUserTable = axios.get('/api/getSurveyUsers').then(response => {
        return response.data
    }).catch((err) => console.log(`Problem when trying to get all the users into the place. ${err}`))
    return {
        type: GET_ALL_USERS,
        payload: surveyUserTable
    }
}
export function getSurveyAdmins() {
    let surveyAdminsTable =  axios.get('/api/getAdmins').then(response => {
        return response.data
    }).catch((err) => console.log(`Problem when trying to get all the users into the place. ${err}`))
    
    return {
        type: GET_SURVEY_ADMINS,
        payload: surveyAdminsTable
    }
}