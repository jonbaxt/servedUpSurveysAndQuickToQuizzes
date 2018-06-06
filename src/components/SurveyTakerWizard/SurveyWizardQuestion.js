import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import SurveyWizardQuestionBuild from './SurveyWizardQuestionBuild';
import { getUser, getMegaSurveyTable } from '../../ducks/reducer';

class SurveyWizardQuestion extends Component {
    constructor() {
        super()
        this.state = {
            nextLinkActivity: 'enabled',
            backLinkActivity: 'disabled',
            countOfQuestions: -1
        }
    }
    // componntWillMount() {
        componentDidMount() {
        // if (this.props.user) {
        //     axios.get(`/api/findSessionUser/${this.props.match.params.currentUserId}`).then(currentSessionUser => {
        //         this.props.getUser(currentSessionUser.data)
        //     }).catch(err => { console.log(err) })
        // console.log(`In compdidMount`,this.props.megaQuizTable);
     //FIXME:
        if (this.props.megaSurveyTable.length === 0) {
            axios.get('/api/surveymain/getmegasurveytable').then(theMassiveTable => {
                this.props.getMegaSurveyTable(theMassiveTable.data)
            }).catch(err => { console.log(`Failure on entry with getting the massive table: ${err}`) })
        }
    }
    handleNavigationErrors() {
        if (this.props.match.params.surveyId === 1) {
            this.setState({ backLinkActivity: 'disabled' })
        }
    }
    
    render() {
        // console.log(this.props.user)
        // console.log(this.props.match.params)
        // console.log(this.props.megaQuizTable)     
        let nextRoute = Number(this.props.match.params.quesId) + 1;
        // let lastRoute = Number(this.props.match.params.quesId) - 1;
             //FIXME:
        let quesNumArray = this.props.megaSurveyTable.filter((arrVal) => arrVal.survey_id === Number(this.props.match.params.surveyId)).map((el) => el.ques_num).filter((el, ind, orig) => el !== orig[ind - 1])
        let quesCount = Math.max(...quesNumArray)
        // console.log(quesCount)
        // this.setState({ countOfQuestions: quesCount })
        return (
            <div className={css(quesStyles.quizWizQuesMain)} >
                
                <div className={css(quesStyles.buttonDiv)} >
                    <Link className={css(quesStyles.bottomButtons)} to={`/${this.props.match.params.currentUserId}/survey/${this.props.match.params.surveyId}/start`} >Restart</Link>
                <Link to={quesCount <= this.props.match.params.quesId ?`/${this.props.match.params.currentUserId}/survey/${this.props.match.params.surveyId}/complete`: `/${this.props.match.params.currentUserId}/survey/${this.props.match.params.surveyId}/${nextRoute}`}
                    className={css(quesStyles.bottomButtons)}
                    style={{ textDecoration: 'none' }}
                >Submit Answer</Link>
                </div>
                <div className='' >
                <SurveyWizardQuestionBuild sendTable={this.props.megaSurveyTable} sendParams={this.props.match.params} />
                </div>
            </div >
        )
    }
}
const quesStyles = StyleSheet.create({
    quizWizQuesMain: {
        display: 'flex',
        flexDirection: 'column'
    },
    bottomButtons: {
        // border: '1px solid green',
        background: 'lightgreen',
        color: 'white',
        textDecoration: 'none'
    },
    buttonDiv: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})
let mapStateToProps = (state) => {
    return {
        user: state.user,
        resultsSurTemporaryStore: state.resultsSurTemporaryStore,
        megaSurveyTable: state.megaSurveyTable
    }
}
const mapDispatchToProps = {
    getUser,
    getMegaSurveyTable
}
export default connect(mapStateToProps, mapDispatchToProps)(SurveyWizardQuestion);