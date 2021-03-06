import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

export default function MultipleChoiceAnswer(props){
    const { nestedRoutes, propsObject, element, compiledAnswer, quesCount, nextRoute, decideImageAnswerArea } = props;
    return(<Link to={
                    quesCount <= nestedRoutes.quesId ?
                        `/quizDoneReDirect/${nestedRoutes.currentUserId}/${nestedRoutes.quizId}/${nestedRoutes.quesId}/complete`
                        : `/${nestedRoutes.currentUserId}/quiz/${nestedRoutes.quizId}/${nextRoute}`
                }
                    style={{ textDecoration: 'none' }}
                    >
                    <span className={css(styles.answerBoxes, styles.answerBoxesTablet, styles.answerBoxesLaptop, styles.answerBoxesBiggest, styles.hoverButton, styles.fuzzIn)} onClick={() => {
                        propsObject.insertNewQuizAnswerIntoResultsArray(compiledAnswer)
                        }} >
                        {decideImageAnswerArea(element.ans_img)}
                        <p className={css(styles.answerBoxText, styles.answerBoxTextTablet, styles.answerBoxTextLaptop, styles.answerBoxTextBiggest)} >{element.ans_text}</p>
                    </span>
                </Link>)
}
const initialOpacityKeyframes = { 'from': { opacity: 0, }, 'to': { opacity: 1, } }
const initialTranslateKeyframes = { '0%': { transform: 'translateY(100px)' }, '100%': { transform: 'translateY(0px)' } }
const styles = StyleSheet.create({
    answerBoxes: {
        margin: '2px',
        width: '140px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        background: 'lightblue',
        transition: '1s all ease',
        color: 'white',
        borderRadius: '2%',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.2)',
    },
    answerBoxesTablet: {
        '@media (min-width: 490px)': {
            width: '160px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            transition: '1s all ease',
        },
    },
    answerBoxesLaptop: {
        '@media (min-width: 700px)': {
            width: '180px',
            height: '140px',
            display: 'flex',
            alignItems: 'center',
            transition: '1s all ease',
        },
    },
    answerBoxesBiggest: {
        '@media (min-width: 1400px)': {
            width: '200px',
            height: '160px',
            display: 'flex',
            alignItems: 'center',
            transition: '1s all ease',
        },
    },
    answerBoxText: { marginLeft: '8px', fontSize: '15px', },
    answerBoxTextTablet: { '@media (min-width: 490px)': { marginLeft: '8px', fontSize: '20px', }, },
    answerBoxTextLaptop: { '@media (min-width: 700px)': { marginLeft: '8px', fontSize: '25px', }, },
    answerBoxTextBiggest: { '@media (min-width: 1400px)': { marginLeft: '8px', fontSize: '28px', }, },
    hoverButton: {
        ':hover': {
            color: '#00ccff',
            background: 'rgba(173, 216, 230, 0.6)',
            transition: 'all 1s ease',
            boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.9)',
        }
    },
    fuzzIn: {
        animationName: [initialOpacityKeyframes, initialTranslateKeyframes],
        animationDuration: '0.5s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'initial'
    },

})
