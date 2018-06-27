import React, { Component } from 'react';
import axios from 'axios';
import { css, StyleSheet } from 'aphrodite';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import { setCurrentQuizInfo, setCurrentQuizQuestionsInfo, setCurrentQuizAnswersInfo, getQuizTable } from '../../../ducks/reducer';
import QuizBuild3 from './QuizEditBuildV3/QuizBuildV3';
import QuesList from './QuesEditor/QuesList';

// http://localhost:3000/#/createnew/1/quiz/quizquestionssetup

class QuizEditor extends Component {
    componentDidMount(){
        axios.get(`/api/quiztaker/getQuizInfo/${this.props.match.params.quizId}`).then((quizInfo) => {
            this.props.setCurrentQuizInfo(quizInfo.data[0])
        }).catch(err => console.log(err))
        axios.get(`/api/quiztaker/getQuizQuestionsInfo/${this.props.match.params.quizId}`).then((quizQuestions) => {
            this.props.setCurrentQuizQuestionsInfo(quizQuestions.data)
        })
        axios.get(`/api/quiztaker/getQuizAnswersInfo/${this.props.match.params.quizId}`).then((quizAnswers) => {
            this.props.setCurrentQuizAnswersInfo(quizAnswers.data)
        })
        this.props.getQuizTable();
    }
       render() {
        console.log(this.props.match)
        return (
            <div  className={css(st.mainArea)}>
                <h1  className={css(st.textShadowing)}>Quiz Editor</h1>
                <QuizBuild3 match={this.props.match} />
                <br />
                <QuesList match={this.props.match} />

                <h4>Quiz Originally Created On: {this.props.currentQuizInfo.created_on}</h4>
                <h4>Quiz Last Updated On: {this.props.currentQuizInfo.updated_on}</h4>
                <h4>Approved to be taken on site by Admin: {this.props.currentQuizInfo.site_approval ? 'Site Approved' : 'Site Not Approved Yet'}</h4>
            </div>
        )
    }
}
// console.log(this.props.c)
// created_on(pin): "2018-05-22T06:00:00.000Z"
// updated_on(pin): "2018-06-23T06:00:00.000Z"
// site_approval(pin): true
// ===================ANIMATION VAIRABLE===============================================================================================

// REGULAR STYLES=================================================================================================================
const st = StyleSheet.create({
    textShadowing: {
        textShadow: '1px 1px 2px #3300CC',
    },
    mainArea: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    },
})
function mapStateToProps(state) {
    return {
        currentQuizInfo: state.currentQuizInfo,
        currentQuizQuestionsInfo: state.currentQuizQuestionsInfo,
        currentQuizAnswersInfo: state.currentQuizAnswersInfo
    }
}
export default connect(mapStateToProps, { setCurrentQuizInfo, setCurrentQuizQuestionsInfo, setCurrentQuizAnswersInfo, getQuizTable })(QuizEditor);