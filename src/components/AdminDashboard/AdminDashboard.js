import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { setCurrentPathname, getAllUsers, getSurveyAdmins, getQuizTable, getSurveyTable, getMegaQuizTable, getMegaSurveyTable } from '../../ducks/reducer';
import faPlusSquare from '@fortawesome/fontawesome-free-solid/faPlusSquare'
import faMinusSquare from '@fortawesome/fontawesome-free-solid/faMinusSquare'


import SurveyUsersManagement from './AdminComponents/SurveyUsersManagement/SurveyUsersManagement';
import SurveyPendingApproval from './AdminComponents/SurveyPendingApproval';
import AllSurveysManagement from './AdminComponents/AllSurveysManagement';
import QuizPendingApproval from './AdminComponents/QuizPendingApproval';

class AdminDashboard extends Component {
    constructor() {
        super()
        this.state = {
            surveyUserToggle: true,
            surveyApprovalToggle: false,
            quizApprovalToggle: false,
            surveyAllToggle: false,
            quizAllToggle: false,
        }
    }

    handleSurveyUserToggle = () => {
        this.setState({ surveyUserToggle: !this.state.surveyUserToggle })
    }
    handleSurveyApprovalToggle = () => {
        this.setState({ surveyApprovalToggle: !this.state.surveyApprovalToggle })
    }
    handleQuizApprovalToggle = () => {
        this.setState({ quizApprovalToggle: !this.state.quizApprovalToggle })
    }
    handleSurveyAllToggle = () => {
        this.setState({ surveyAllToggle: !this.state.surveyAllToggle })
    }
    handleQuizAllToggle = () => {
        this.setState({ quizAllToggle: !this.state.quizAllToggle })
    }

    componentDidMount() {
        if (this.props.pathnameCurrent.length !== 0) {
            this.props.setCurrentPathname(this.props.location.pathname)
        }
        if (this.props.surveyUsersTable.length === 0) {
            axios.get('/api/getSurveyUsers').then(response => {
                this.props.getAllUsers(response.data);
            }).catch((err) => console.log(`Problem when trying to get all the users into the place. ${err}`))
        }
        if (this.props.surveyAdminsTable.length === 0) {
            axios.get('/api/getAdmins').then(response => {
                this.props.getSurveyAdmins(response.data);
            }).catch((err) => console.log(`Problem when trying to get all the users into the place. ${err}`))
        }
        if (this.props.megaQuizTable.length === 0) {
            axios.get('/api/quizmain/getmegaquiztable').then(theMassiveTable => {
                this.props.getMegaQuizTable(theMassiveTable.data)
            }).catch(err => { console.log(`Failure on entry with getting the massive table: ${err}`) })
        }
        if (this.props.megaSurveyTable.length === 0) {
            axios.get('/api/surveymain/getmegasurveytable').then(theMassiveTable => {
                this.props.getMegaSurveyTable(theMassiveTable.data)
            }).catch(err => { console.log(`Failure on entry with getting the massive table: ${err}`) })
        }
        if (this.props.quizTable.length === 0) {
            axios.get('/api/quizmain').then(resDat => {
                this.props.getQuizTable(resDat.data);
            }).catch(err => console.log(err))
        }
        if (this.props.surveyTable.length === 0) {
            axios.get('/api/surveymain').then(resDat => {
                this.props.getSurveyTable(resDat.data);
            }).catch(err => console.log(err))
        }
    }
    render() {
        let changeIconSurveyUser = () => { return (this.state.surveyUserToggle ? <FontAwesomeIcon icon={faMinusSquare} /> : <FontAwesomeIcon icon={faPlusSquare} />) }
        let changeIconSurveyApproval = () => { return (this.state.surveyApprovalToggle ? <FontAwesomeIcon icon={faMinusSquare} /> : <FontAwesomeIcon icon={faPlusSquare} />) }
        let changeIconQuizApproval = () => { return (this.state.quizApprovalToggle ? <FontAwesomeIcon icon={faMinusSquare} /> : <FontAwesomeIcon icon={faPlusSquare} />) }
        let changeIconSurveyAll = () => { return (this.state.surveyAllToggle ? <FontAwesomeIcon icon={faMinusSquare} /> : <FontAwesomeIcon icon={faPlusSquare} />) }
        let changeIconQuizAll = () => { return (this.state.surveyAllToggle ? <FontAwesomeIcon icon={faMinusSquare} /> : <FontAwesomeIcon icon={faPlusSquare} />) }
        return (
            <div className={css(st.pageStart, st.mainAdmin)}>
                <h1 className={css(st.underline, st.tcent)}>Admin Dashboard</h1><br /><br />

                <div className={css(st.outUsers)} >
                    <div className={css(st.spBet, anim.whHov)} onClick={() => this.handleSurveyUserToggle()} ><h2>Survey Users</h2> {changeIconSurveyUser()}</div><br />
                    <div className={this.state.surveyUserToggle ? css(anim.dropDown) :
                        css(anim.dropDown, anim.hide)} >
                        <SurveyUsersManagement />
                    </div>
                </div><br />


                <div className={css(st.outUsers)} >
                    <div className={css(st.spBet, anim.whHov)} onClick={() => this.handleSurveyApprovalToggle()} ><h2>Surveys to Approve</h2> {changeIconSurveyApproval()}</div><br />
                    <div className={this.state.surveyApprovalToggle ? css(anim.dropDownSurvApprov) :
                        css(anim.dropDownSurvApprov, anim.hide)} >
                        <SurveyPendingApproval giveSurveys={this.props.surveyTable} /><br />
                    </div>
                </div>
                <br /><br />

                <div className={css(st.outUsers)} >
                    <div className={css(st.spBet, anim.whHov)} onClick={() => this.handleQuizApprovalToggle()} ><h2>Quizzes to Approve</h2> {changeIconQuizApproval()}</div><br />
                    <div className={this.state.quizApprovalToggle ? css(anim.dropDownQuizApprov) :
                        css(anim.dropDownQuizApprov, anim.hide)} >
                        <br />
                        <QuizPendingApproval giveQuizzes={this.props.quizTable} />
                    </div>
                </div><br /><br />

                <div className={css(st.outUsers)} >
                    <div className={css(st.spBet, anim.whHov)} onClick={() => this.handleSurveyAllToggle()} ><h2>All Surveys</h2> {changeIconSurveyAll()}</div><br />
                    <div className={this.state.surveyAllToggle ? css(anim.dropDownSurvAll) :
                        css(anim.dropDownSurvAll, anim.hide)} >
                        <AllSurveysManagement giveSurveys={this.props.megaSurveyTable} /><br />
                    </div>
                </div><br /><br />

                <div className={css(st.outUsers)} >
                    <div className={css(st.spBet, anim.whHov)} onClick={() => this.handleQuizAllToggle()} ><h2>All Quizzes</h2> {changeIconQuizAll()}</div><br />
                    <div className={this.state.quizAllToggle ? css(anim.dropDownQuizAll) :
                        css(anim.dropDownQuizAll, anim.hide)} >
                        {/* Place for  */}

                        <br />
                    </div>
                </div><br /><br />
                <div>
                </div>
            </div>
        )
    }
}
const initialOpacityKeyframes = { 'from': { opacity: 0, }, 'to': { opacity: 1, } }
const anim = StyleSheet.create({
    dropDown: {
        overflow: 'auto',
        transition: '1s all ease',
        height: '330px',
    },
    dropDownSurvApprov: {
        overflow: 'hidden',
        transition: '1s all ease',
        height: '330px',
    },
    dropDownQuizApprov: {
        overflow: 'hidden',
        transition: '1s all ease',
        height: '330px',
    },
    dropDownSurvAll: {
        overflow: 'hidden',
        transition: '1s all ease',
        height: '330px',
    },
    dropDownQuizAll: {
        overflow: 'hidden',
        transition: '1s all ease',
        height: '330px',
    },
    hide: {
        height: '0px'
    },
    whHov: {
        ':hover': {
            transition: '1s all ease',
            // color: 'rgb(160, 152, 152)',
        }
    }
})
const st = StyleSheet.create({
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    mainAdmin: {
        background: 'rgba(255, 234, 165, 0.8)',
        margin: '0 auto',
        width: '310px',
        color: 'black',
        borderRadius: '2%',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.5)',
        transition: '1s all ease',
    },
    outUsers: {
        background: 'rgba(255, 234, 165, 0.6)',

    },
    spBet: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '10px',
        marginRight: '10px',
    },
    underline: {
        textDecorationLine: 'underline',
    },
    tcent: {
        textAlign: 'center',
    },
})

function mapStateToProps(state) {
    return {
        pathnameCurrent: state.pathnameCurrent,
        user: state.user,
        surveyUsersTable: state.surveyUsersTable,
        surveyAdminsTable: state.surveyAdminsTable,
        quizTable: state.quizTable,
        surveyTable: state.surveyTable,
        megaQuizTable: state.megaQuizTable,
        megaSurveyTable: state.megaSurveyTable,
    }
}
let mapDispatchToProps = {
    setCurrentPathname,
    getAllUsers,
    getSurveyAdmins,
    getQuizTable,
    getSurveyTable,
    getMegaQuizTable,
    getMegaSurveyTable
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);