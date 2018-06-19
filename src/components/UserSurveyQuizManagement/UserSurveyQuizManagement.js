import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import { connect } from 'react-redux';

import { getMegaQuizTable, getMegaSurveyTable, getQuizTable, getSurveyTable } from '../../ducks/reducer';

import UserSurveyList from './UserSurveyList/UserSurveyList';
import UserQuizList from './UserQuizList/UserQuizList';

class UserSurveyQuizManagement extends Component {
    componentDidMount() {
        if (this.props.megaQuizTable.length === 0) { this.props.getMegaQuizTable() }
        if (this.props.megaSurveyTable.length === 0) { this.props.getMegaSurveyTable() }
        if (this.props.quizTable.length === 0) { this.props.getQuizTable(); }
        if (this.props.surveyTable.length === 0) { this.props.getSurveyTable(); }
    }
    render() {
        return (
            <div className={css(Styles.pageStart, Styles.SurveyQuizMainBox)}>
                <div 
                className={css(Styles.titles)} 
                ><h1>{this.props.user.user_name}'s </h1><h2>Surveys/Quizzes</h2><h3>Maintenance and Management</h3><br />
                    <h2 className={css(Styles.underLiner)}>Quizzes</h2></div>
                <UserQuizList getUser={this.props.user} getQuizzes={this.props.quizTable} /><br />
                <h2 className={css(Styles.underLiner, Styles.titles)}>Surveys</h2>
                <UserSurveyList getUser={this.props.user} getSurveys={this.props.surveyTable} /><br />
            </div>
        )
    }
}
const initialOpacityKeyframes = { 'from': { opacity: 0 }, 'to': { opacity: 1 } }
const Styles = StyleSheet.create({
    titles: {
        // background: 'linear-gradient(to left,#330000, #330033, #330066, #330099, #3300CC, #3300FF)',
        textShadow: '1px 1px 2px #3300CC',
        paddingLeft: '0px',
        paddingRight: '0px',
        margin: '2px',
        marginTop: '0px',
        // boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.9)',
    },
    // textShadowing: {
    //     textShadow: '1px 1px 2px #3300CC',
    // },
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    tempBorder: {
        border: '1px solid black'
    },
    SurveyQuizMainBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center'
    },
    underLiner: {
        textDecorationLine: 'underline'
    }

})
let mapStateToProps = (state) => {
    return {
        user: state.user,
        quizTable: state.quizTable,
        surveyTable: state.surveyTable,
        megaQuizTable: state.megaQuizTable,
        megaSurveyTable: state.megaSurveyTable

    }
}
export default connect(mapStateToProps, { getMegaQuizTable, getMegaSurveyTable, getQuizTable, getSurveyTable })(UserSurveyQuizManagement);