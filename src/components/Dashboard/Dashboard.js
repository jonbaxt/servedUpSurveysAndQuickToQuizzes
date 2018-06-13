import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { css, StyleSheet } from 'aphrodite';

import './Dashboard.css'
import QuizListHOC from './QuizList';
import SurveyListHOC from './SurveyList';

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
        this.props.getAllUsers();
        this.props.getSurveyAdmins();
        //Gets query to show quizzes
        this.props.getQuizTable();
        this.props.getSurveyTable();
        //Gets the mega table.
        this.props.getMegaQuizTable();
        this.props.getMegaSurveyTable();
    }
    render() {  
        // console.log(this.props.surveyUsersTable)
        // console.log(this.props.surveyAdminsTable)
        // console.log(this.props.megaQuizTable)
        // console.log(this.props.megaSurveyTable)
        return (
            <div className={css(Styles.pageStart, Styles.dashMain)} >
                <div className='body'>
                    <div className='AvailableSurveysBox'>
                        <div className='titles'>
                            <p className='boxTitles' >Surveys</p>
                        </div>
                        <SurveyListHOC surveyTable={this.props.surveyTable} user={this.props.user} loading={this.props.surveyTable.length === 0} />
                    </div>
                    <div className='AvailableQuizzesBox' >
                        <div className='titles'>
                            <p className='boxTitles' >Quizzes</p>
                        </div>
                        <QuizListHOC quizTable={this.props.quizTable} user={this.props.user} loading={this.props.quizTable.length === 0} />
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