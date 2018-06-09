import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { css, StyleSheet } from 'aphrodite';
import { Link } from 'react-router-dom';

// import NavMenu from '../NavMenu/NavMenu';
import './Dashboard.css'
import { getUser, getUserById, getAllUsers, getSurveyAdmins, getQuizTable, getMegaQuizTable, getMegaSurveyTable, setSelectedQuiz, setSelectedSurvey, getSurveyTable, setCurrentPathname } from '../../ducks/reducer';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        if(this.props.pathnameCurrent.length !== 0){
            this.props.setCurrentPathname(this.props.location.pathname)
        }
        //Gets currently logged in user
        // if(this.props.user.id === -1 ){
        // this.props.getUser();
        // }
        axios.get('/auth/me').then(res => {
            this.props.getUser(res.data)
        }).catch((err) => console.log('Didnt work', err))
        //Gets user table
        axios.get('/api/getSurveyUsers').then(response => {
            this.props.getAllUsers(response.data);
        }).catch((err) => console.log(`Problem when trying to get all the users into the place. ${err}`))
        axios.get('/api/getAdmins').then(response => {
            this.props.getSurveyAdmins(response.data);
        }).catch((err) => console.log(`Problem when trying to get all the users into the place. ${err}`))
        
        //Gets query to show quizzes
        axios.get('/api/quizmain').then(resDat => {
            this.props.getQuizTable(resDat.data);
        }).catch(err => console.log(err))
        axios.get('/api/surveymain').then(resDat => {
            this.props.getSurveyTable(resDat.data);
        }).catch(err => console.log(err))
        //Gets the mega table.
        axios.get('/api/quizmain/getmegaquiztable').then(theMassiveTable => {
            // console.log(theMassiveTable.data);
            this.props.getMegaQuizTable(theMassiveTable.data)
        }).catch(err => { console.log(`Failure on entry with getting the massive table: ${err}`) })
        axios.get('/api/surveymain/getmegasurveytable').then(theMassiveTable => {
            // console.log(theMassiveTable.data);
            this.props.getMegaSurveyTable(theMassiveTable.data)
        }).catch(err => { console.log(`Failure on entry with getting the massive table: ${err}`) })
    }
    render() {
        // console.log(this.props.match.params)
        let showSurveyList = this.props.surveyTable.filter(el => el.site_approval === true ).map((element, index) => {
            // let anonymous = 'not anonymous';
            // element.anonymous ? anonymous = 'anonymous' : anonymous = 'not anonymous'
            return (
                <Link to={`/${this.props.user.id}/survey/${element.survey_id}/start`} key={element.survey_id} onClick={() => this.props.setSelectedSurvey(element.survey_id)}
                    className='noLineUnderneath'
                    style={{ textDecoration: 'none' }} >
                    <div className='displayBox'  >
                        <div className='rightSide'>
                            <div className='leftSide'>
                                <img className='linkPicture' src={element.start_img} alt='' />
                            </div>
                            <div className='marBot'>
                                <h4>{element.title}</h4>
                            </div>
                            <div>
                                <p className='underline'>Description</p>
                                <p>{element.description}</p>
                            </div>
                            <div className='centerBox'>
                                <p className='underline'>Created by</p> <p>{element.survey_creator}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })

        let showQuizList = this.props.quizTable.filter(el => el.site_approval === true ).map((element, index) => {
            // let timedString = 'not timed'
            // if (element.timed) {
            //     timedString = 'timed'
            // } else {
            //     timedString = 'not timed'
            // }
            return (
                <Link to={`/${this.props.user.id}/quiz/${element.quiz_id}/start`} key={element.quiz_id} onClick={() => this.props.setSelectedQuiz(element.quiz_id)} style={{ textDecoration: 'none' }} className='noLineUnderneath' >
                    <div className='displayBox'  >

                        <div className='rightSide'>

                            <div className='leftSide'>
                                <img className='linkPicture' src={element.start_img} alt='' />
                            </div>
                            <div className='marBot'>
                                <h4>{element.title}</h4>
                            </div>

                            <div
                            // className='border'
                            >
                                <p className='underline'>Description</p>
                                <p>{element.description}</p>
                            </div>
                            <div className='centerBox'>
                                <p className='underline'>Created by</p><p>{element.quiz_creator}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
        return (
            <div className={css(Styles.pageStart, Styles.dashMain)} >
                {/* <NavMenu /> */}
                <div className='body'>
                    <div className='AvailableQuizzesBox' >
                        <div>
                            <p className='boxTitles' >Quizzes</p>
                        </div>
                        <div className='wrapWhenBig'>
                        {showQuizList}
                        </div>
                    </div>
                    <div className='AvailableSurveysBox'>
                        <div>
                            <p className='boxTitles' >Surveys</p>
                        </div>
                        <div className='wrapWhenBig'>
                        {showSurveyList}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const initialOpacityKeyframes = {
    'from': { opacity: 0 },
    'to': { opacity: 1 }
}
const Styles = StyleSheet.create({
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    dashMain: {
        display: 'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        width: '100%',
        transition: '2s all ease'
    }
});

function mapStateToProps(state) {
    return {
        user: state.user,
        surveyUsersTable: state.surveyUsersTable,
        surveyAdminsTable: state.surveyAdminsTable,
        quizTable: state.quizTable,
        megaQuizTable: state.megaQuizTable,
        megaSurveyTable: state.megaSurveyTable,
        surveyTable: state.surveyTable,
        pathnameCurrent: state.pathnameCurrent
    }
}
const mapDispatchToProps = {
    getUser,
    getUserById,
    getAllUsers,
    getSurveyAdmins,
    getQuizTable,
    getMegaQuizTable,
    getMegaSurveyTable,
    setSelectedQuiz,
    setSelectedSurvey,
    getSurveyTable,
    setCurrentPathname    
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);