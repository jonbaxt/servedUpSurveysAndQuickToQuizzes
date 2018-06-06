import React, { Component } from 'react';
import axios from 'axios';
import { css, StyleSheet } from 'aphrodite';
import { connect } from 'react-redux';

import { getMegaQuizTable, getMegaSurveyTable, getQuizTable, getSurveyTable } from '../../ducks/reducer';

import UserSurveyList from './UserSurveyList/UserSurveyList';
import UserQuizList from './UserQuizList/UserQuizList';

class UserSurveyQuizManagement extends Component {
    componentDidMount() {
        if (this.props.megaQuizTable.length === 0) {
            axios.get('/api/quizmain/getmegaquiztable').then(theMassiveTable => {
                // console.log(theMassiveTable.data);
                this.props.getMegaQuizTable(theMassiveTable.data)
            }).catch(err => { console.log(`Failure on entry with getting the massive table: ${err}`) })
        }
        if (this.props.megaSurveyTable.length === 0) {
            axios.get('/api/surveymain/getmegasurveytable').then(theMassiveTable => {
                // console.log(theMassiveTable.data);
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
        return (
            <div className={css(Styles.pageStart, Styles.SurveyQuizMainBox, Styles.tempBorder)}>
                <h1>{this.props.user.user_name}'s </h1><h2>Surveys/Quizzes</h2><h3>Maintenance and Management</h3>
                <br />
                <h2 className={css(Styles.underLiner)}>Quizzes</h2>
                <UserQuizList getUser={this.props.user} getQuizzes={this.props.quizTable} />
                <br />
                <h2 className={css(Styles.underLiner)}>Surveys</h2>
                <UserSurveyList getUser={this.props.user} getSurveys={this.props.surveyTable} />
                <br />

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

/*
h1{
  font-size: 40px;
  font-weight: bolder;
}
h2{
  font-size: 30px;
  font-weight: bolder;
}
h3{
  font-size: 20px;
  font-weight: bolder;
}
h4{
  font-size: 10px;
  font-weight: bolder;
}
h5{
  font-size: 5px;
  font-weight: bolder;
}
h6{
  font-size: 3px;
  font-weight: bolder;
}
*/

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