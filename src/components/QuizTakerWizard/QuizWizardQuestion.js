import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import QuestionBuild from './QuestionBuild';
import { getUser, getMegaQuizTable } from '../../ducks/reducer';

class QuizWizardQuestion extends Component {
    constructor() {
        super()
        this.state = {
            nextLinkActivity: 'enabled',
            backLinkActivity: 'disabled',
            countOfQuestions: -1
        }
    }
    componentDidMount() {
        // if (this.props.user) {
        //     axios.get(`/api/findSessionUser/${this.props.match.params.currentUserId}`).then(currentSessionUser => {
        //         this.props.getUser(currentSessionUser.data)
        //     }).catch(err => { console.log(err) })
        // console.log(`In compdidMount`,this.props.megaQuizTable);
        if (this.props.megaQuizTable.length === 0) {
            axios.get('/api/quizmain/getmegaquiztable').then(theMassiveTable => {
                this.props.getMegaQuizTable(theMassiveTable.data)
            }).catch(err => { console.log(`Failure on entry with getting the massive table: ${err}`) })
        }
    }
    handleNavigationErrors() {
        if (this.props.match.params.quesId === 1) {
            this.setState({ backLinkActivity: 'disabled' })
        }
    }

    render() {
        // let nextRoute = Number(this.props.match.params.quesId) + 1;
        let quesNumArray = this.props.megaQuizTable.filter((arrVal) => arrVal.quiz_id === Number(this.props.match.params.quizId)).map((el) => el.ques_num).filter((el, ind, orig) => el !== orig[ind - 1])
        let quesCount = Math.max(...quesNumArray)
        console.log(quesCount)
        // this.setState({ countOfQuestions: quesCount })
        return (
            <div className={css(quesStyles.quizWizQuesMain, quesStyles.pageStart)} >
                <div className={css(quesStyles.buttonDiv)} >
                    <Link className={css(quesStyles.bottomButtons)} to={`/${this.props.match.params.currentUserId}/quiz/${this.props.match.params.quizId}/start`} >Restart</Link>
                </div>
                <QuestionBuild sendTable={this.props.megaQuizTable} sendParams={this.props.match.params} />
                <div className='' >

                </div>
            </div >
        )
    }
}
const initialOpacityKeyframes = {
    'from': { opacity: 0 },
    'to': { opacity: 1 }
}
const quesStyles = StyleSheet.create({
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    mainArea: {
        background: 'linear-gradient(to left,#0000FF,#330099, #3300CC, #3300CC, #330099, #0000FF)'
    },
    quizWizQuesMain: {
        display: 'flex',
        flexDirection: 'column',
        height: '1300px',
    },
    bottomButtons: {
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
        megaQuizTable: state.megaQuizTable
    }
}
const mapDispatchToProps = {
    getUser,
    getMegaQuizTable
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizWizardQuestion);