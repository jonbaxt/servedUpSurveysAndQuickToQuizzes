import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
//FIXME: Get new post created to survey results
import { getQuizResultsJustPostedAfterQuiz } from '../../ducks/reducer';


class SurveyWizardEnd extends React.Component {
    handleSubmissionToDatabase = () => {
        const { resultsSurTemporaryStore } = this.props;
        axios.get(`/api/findSessionUser/${this.props.match.params.currentUserId}`).then( resBack => { console.log('I went into database', resBack) }).catch( err => console.log('Couldnt make it to the database'))
        axios.post('/api/surveyAnswerSubmission/SubmitToSurveyResultsTable', resultsSurTemporaryStore).then(resBack => {
            console.log('I went into database', resBack.data);
        }).catch(err => console.log('Couldnt make it to the database'))

        // axios.get(`/api/quizResultsByUser/${currentId}`).then(userQuizResults => {
        //     this.props.getQuizResultsJustPostedAfterQuiz( userQuizResults.data )
        // }).catch(err => console.log('unable to retrieve table for user', err))
    }
    render() {
        // console.log(this.props.resultsSurTemporaryStore)
        // console.log(this.props.user.user_name)
        return (
            <div className='quizWizStartMain'>
                <h1>End of Survey</h1>
                <p>You have completed the full Survey</p>
                <p>Congratulations {this.props.user.user_name}!!</p>
                <p>Click here to see your all opinions on survey</p>
                <Link to={`/results/afterSurveyTake/bySurveyNumber/${this.props.match.params.currentUserId}/survey/${this.props.match.params.surveyId}`}
                    className={css(styles.noLine)} >
                    <button className={css(styles.buttonClickArea)}
                        onClick={this.handleSubmissionToDatabase} >GET YOUR RESULTS</button>
                </Link>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
        megaQuizTable: state.megaQuizTable,
        resultsSurTemporaryStore: state.resultsSurTemporaryStore
    }
}

const styles = StyleSheet.create({
    buttonClickArea: {
        margin: '2px',
        width: '140px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        border: 'solid 1px blue',
        background: 'lightblue',
        color: 'white',
        textDecoration: 'none'
    },
    noLine: {
        textDecoration: 'none'
    }
});


export default connect(mapStateToProps, { getQuizResultsJustPostedAfterQuiz })(SurveyWizardEnd);