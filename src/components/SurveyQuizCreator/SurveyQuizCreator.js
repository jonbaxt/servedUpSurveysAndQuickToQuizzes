import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

function SurveyQuizCreator(props) {
    // console.log(props)
        return (
            <div className={css(createStartPageStyle.mainCreateHome, createStartPageStyle.pageStart)} >
                <h1>Quiz/Survey Creator</h1>
                <br /><br />
                <h3>Quiz or Survey?</h3>
                <br /><br /><br /><br />
                <div className={css(createStartPageStyle.buttArea)} >
                    <Link to={`/createnew/${props.match.params.currentUserId}/quiz/quizsetup`} className={css(createStartPageStyle.removeLine)} >
                    <span className={css(createStartPageStyle.buttDesign, createStartPageStyle.buttDesignHover)}>Quiz</span>
                    </Link>
                    <Link to={`/createnew/${props.match.params.currentUserId}/survey/surveysetup`} className={css(createStartPageStyle.removeLine)} >
                    <span className={css(createStartPageStyle.buttDesign, createStartPageStyle.buttDesignHover)}>Survey</span>
                    </Link>
                </div>
            </div>
        )
    }
const initialOpacityKeyframes = { 'from': { opacity: 0 }, 'to': { opacity: 1 } }
const createStartPageStyle = StyleSheet.create({
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    mainCreateHome: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        transition: '1s ease all',
    },
    constructionBorders: {
        border: '1px solid black',
        transition: '1s ease all',
    },
    buttArea: {
        display: 'flex',
        justifyContent: 'space-around',
        transition: '1s ease all',
    },
    removeLine: {
        textDecorationLine: 'none',
        color: '#00ccff'
    },
    buttDesign: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100px',
        height: '80px',
        background: 'rgba(51, 0, 204, 0.9)',
        borderRadius: '5%',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.2)',
        transition: '1s ease all',
    },
    buttDesignHover: {
        ':hover': {
            background: 'rgba(51, 0, 51, 0.9)',
            boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.8)',
            transition: '1s ease all',
            color: 'rgba(0, 204, 255, 0.8)',
        }
    }
})

export default SurveyQuizCreator;