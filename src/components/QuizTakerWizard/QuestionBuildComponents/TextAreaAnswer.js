import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

export default function TextAreaAnswer(props){
    const { nestedRoutes, propsObject, element, quesCount, nextRoute, handleProps } = props;
    let { textAreaText } = props;
    return (
        <span>
                    <textarea onChange={(e) => textAreaText = e.target.value} className={css(styles.fuzzIn)} />
                    <Link to={
                        quesCount <= nestedRoutes.quesId ?
                            `/quizDoneReDirect/${nestedRoutes.currentUserId}/${nestedRoutes.quizId}/${nestedRoutes.quesId}/complete`
                            : `/${nestedRoutes.currentUserId}/quiz/${nestedRoutes.quizId}/${nextRoute}`
                    }
                        style={{ textDecoration: 'none' }}
                        key={element.ans_id}>
                        <button className={css(styles.answerBoxes, styles.hoverButton, styles.fuzzIn)} onClick={() => {
                            let compiledAnswer = {
                                Quiz_Ques_Id: handleProps[0].ques_id,
                                Answer_Id: element.ans_id,
                                Takers_Answer: textAreaText,
                                Taken_Count: 1,
                                Survey_Taker_Id: nestedRoutes.currentUserId
                            }
                            propsObject.insertNewQuizAnswerIntoResultsArray(compiledAnswer)
                        }}>Submit Text Entry</button>
                    </Link>
                </span>
    )
}
const initialOpacityKeyframes = { 'from': { opacity: 0, }, 'to': { opacity: 1, } }
const initialTranslateKeyframes = { '0%': { transform: 'translateY(100px)' }, '100%': { transform: 'translateY(0px)' } }
const styles = StyleSheet.create({
    fuzzIn: {
        animationName: [initialOpacityKeyframes, initialTranslateKeyframes],
        animationDuration: '0.5s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'initial'
    },
    hoverButton: {
        ':hover': {
            color: '#00ccff',
            background: 'rgba(173, 216, 230, 0.6)',
            transition: 'all 1s ease',
            boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.9)',
        }
    },
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
})