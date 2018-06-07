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
            <div className={css(styles.surveyMainEnd, styles.pageStart)}>
                <h1 className={css(styles.h1Normal, styles.h1Tablet, styles.h1Laptop, styles.h1Biggest)}>End of Survey</h1><br/><br/>
                <p  className={css(styles.pNormal, styles.pTablet, styles.pLaptop, styles.pBiggest)}>You have completed the full Survey</p>
                <p  className={css(styles.pNormal, styles.pTablet, styles.pLaptop, styles.pBiggest)}>Congratulations {this.props.user.user_name}!!</p>
                <p  className={css(styles.pNormal, styles.pTablet, styles.pLaptop, styles.pBiggest)}>Click here to see your all opinions on survey</p><br/><br/>
                <Link to={`/results/afterSurveyTake/bySurveyNumber/${this.props.match.params.currentUserId}/survey/${this.props.match.params.surveyId}`}
                    className={css(styles.noLine)} >
                    <button className={css(styles.buttonClickArea, styles.hoverButton)}
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
const initialOpacityKeyframes = {
    'from': {
        opacity: 0,
    },

    'to': {
        opacity: 1,
    }
}
const styles = StyleSheet.create({
    h1Normal: { fontSize: '40px', transition: '1s all ease', },
    h1Tablet: { '@media (min-width: 490px)': { fontSize: '50px', transition: '1s all ease', }, },
    h1Laptop: { '@media (min-width: 700px)': { fontSize: '60px', transition: '1s all ease', }, },
    h1Biggest: { '@media (min-width: 1400px)': { fontSize: '70px', transition: '1s all ease', }, },
    pNormal: { fontSize: '18px', transition: '1s all ease', },
    pTablet: { '@media (min-width: 490px)': { fontSize: '28px', transition: '1s all ease', }, },
    pLaptop: { '@media (min-width: 700px)': { fontSize: '38px', transition: '1s all ease', }, },
    pBiggest: { '@media (min-width: 1400px)': { fontSize: '48px', transition: '1s all ease', }, },
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    surveyMainEnd: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        height: '600px'
    },
    buttonClickArea: {
        margin: '0 auto',
        fontSize: '20px',
        fontWeight: 'bold',
        width: '140px',
        height: '100px',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        background: 'lightblue',
        color: 'white',
        border: 'none',
        textDecoration: 'none',
        borderRadius: '5%',
        boxShadow: '4px 5px 6px rgba(173, 216, 230, 0.6)'
    },
    noLine: {
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        border: 'none'
    },
    hoverButton: {
        ':hover': {
            color: '#00ccff',
            background: 'rgba(173, 216, 230, 0.6)',
            boxShadow: '4px 5px 6px rgba(173, 216, 230, 0.8)',
            transition: 'all 1s ease'
        }
    }
});


export default connect(mapStateToProps, { getQuizResultsJustPostedAfterQuiz })(SurveyWizardEnd);