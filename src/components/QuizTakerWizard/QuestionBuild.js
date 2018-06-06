import React from 'react';
// import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { insertNewQuizAnswerIntoResultsArray, getMegaQuizTable } from '../../ducks/reducer';
import { Link } from 'react-router-dom';

function QuestionBuild(props) {
    // console.log(props)
    // console.log(props.sendParams)
    // console.log(props.sendTable)
    return (
        <div className={css(styles.fuzzIn)} >
            {dealWithMegaTable(props.sendTable, props.sendParams, props)}
        </div>
    )
}
function dealWithMegaTable(megaTable, nestedRoutes, propsObject) {
    // if (megaTable === undefined) {
    //     axios.get('/api/quizmain/getmegaquiztable').then(theMassiveTable => {
    //         megaTable = theMassiveTable.data
    //         propsObject.getMegaQuizTable(theMassiveTable.data)
    //     }).catch(err => { console.log(`Failure on entry with getting the massive table: ${err}`) })
    // }
    let handleProps = megaTable.filter(arrayValue => arrayValue.quiz_id === Number(nestedRoutes.quizId) && arrayValue.ques_num === Number(nestedRoutes.quesId))
    let quesNumArray = megaTable.filter(arrayValue => arrayValue.quiz_id === Number(nestedRoutes.quizId)).map(element => element.ques_num).filter((element, index, origin) => element !== origin[index - 1])
    let quesCount = Math.max(...quesNumArray)    // Get the number of questions
    let qType = megaTable.filter(el => el.quiz_id === Number(nestedRoutes.quizId) && el.ques_num === Number(nestedRoutes.quesId)).map(el => el.ques_type).filter((el, ind, orig) => el !== orig[ind - 1])
    let qT = qType[0];      //Get the question type for logic statement.
    let currentQuizTitle = megaTable.filter(el => el.quiz_id === Number(nestedRoutes.quizId)).map(el => el.title).filter((val, ind, orig) => val !== orig[ind - 1])
    let quizTitle = currentQuizTitle[0];    //Quiz Title for display
    let currentQuesNum = megaTable.filter(el => el.quiz_id === Number(nestedRoutes.quizId) && el.ques_num === Number(nestedRoutes.quesId)).map(el => el.ques_num).filter((val, ind, orig) => val !== orig[ind - 1])
    let questionNumber = currentQuesNum[0]; //Question Number
    let currentQuesImg = megaTable.filter(el => el.quiz_id === Number(nestedRoutes.quizId) && el.ques_num === Number(nestedRoutes.quesId)).map(el => el.ques_img).filter((val, ind, orig) => val !== orig[ind - 1])
    let questionImage = currentQuesImg[0]; //Question Image
    let currentQuesText = megaTable.filter(el => el.quiz_id === Number(nestedRoutes.quizId) && el.ques_num === Number(nestedRoutes.quesId)).map(el => el.ques_text).filter((val, ind, orig) => val !== orig[ind - 1])
    let questionText = currentQuesText[0]; //Question Text
    let possibleAnswers = handleProps.map(element => {  //Possible answers to map through
        return { ques_image: element.ques_image, ans_id: element.ans_id, ans_num: element.ans_num, ans_text: element.ans_text, ans_img: element.ans_img, ans_special: element.ans_special, is_correct: element.is_correct }
    })
    let mapAnswersToScreen = null;
    let nextRoute = Number(nestedRoutes.quesId) + 1;
    if (qT === "mult-choice") {
        mapAnswersToScreen = possibleAnswers.map((element, index) => {
            const compiledAnswer = {
                Quiz_Ques_Id: handleProps[0].ques_id, Answer_Id: element.ans_id, Takers_Answer: element.ans_text, Taken_Count: 1, Survey_Taker_Id: nestedRoutes.currentUserId
            }
            return (
                // `/quizDoneReDirect/${nestedRoutes.currentUserId}/quiz/${nestedRoutes.quizId}/complete`
                // '/quizDoneReDirect/complete'
                <Link to={
                    quesCount <= nestedRoutes.quesId ?
                        `/quizDoneReDirect/${nestedRoutes.currentUserId}/${nestedRoutes.quizId}/${nestedRoutes.quesId}/complete`
                        : `/${nestedRoutes.currentUserId}/quiz/${nestedRoutes.quizId}/${nextRoute}`
                }
                    style={{ textDecoration: 'none' }}
                    key={element.ans_id}>
                    <span className={css(styles.answerBoxes, styles.hoverButton, styles.fuzzIn)} onClick={() => {
                        propsObject.insertNewQuizAnswerIntoResultsArray(compiledAnswer)
                        // console.log(`I was clicked ${element.ans_id} and ${element.ans_text}`)
                    }} >
                        {decideImageAnswerArea(element.ans_img)}
                        <p style={{ marginLeft: '8px' }} >{element.ans_text}</p>
                    </span>
                </Link>
            )
        })
    } else if (qT === 'text-area') {
        mapAnswersToScreen = possibleAnswers.map((element, index) => {
            let textAreaText = ''
            return (
                <span key={element.ans_id}>
                    <textarea onChange={(e) => textAreaText = e.target.value} className={css(styles.fuzzIn)}/>
                    <Link to={
                        quesCount <= nestedRoutes.quesId ?
                            `/quizDoneReDirect/${nestedRoutes.currentUserId}/${nestedRoutes.quizId}/${nestedRoutes.quesId}/complete`
                            : `/${nestedRoutes.currentUserId}/quiz/${nestedRoutes.quizId}/${nextRoute}`
                    }
                        style={{ textDecoration: 'none' }}
                        key={element.ans_id}>
                        <button className={css(styles.answerBoxes, styles.hoverButton, styles.fuzzIn)} onClick={() => {
                            // console.log(`Hello, the Ans_Id# is ${element.ans_id}  ${textAreaText}`)
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
        })
    }
    return (
        <div className={css(styles.quizBodyContainer
            // , styles.testBorder
        )}>
            <div className={css(styles.fuzzIn)} >
                <h2>{quizTitle}</h2>
                <h3>{`Question #${questionNumber}`}</h3>
                {questionImage ? <img className={css(styles.imageResize)} src={questionImage} alt='' /> : null}
            </div>
            <div className={css(styles.fuzzIn)} >
                <h3>{`${questionText}`}</h3>
            </div>
            <div className={css(styles.answerArea)}>
                {mapAnswersToScreen}
            </div>
        </div>
    )
}
function decideImageAnswerArea(AnswerImage) {
    if (AnswerImage) {
        return (<img className={css(styles.imageInAnswer)} src={AnswerImage} alt='' />)
    } else {
        return null;
    }
}
const translateKeyframes = {
    '0%': {
        // transform: 'rotate(0deg)'
        // transform: 'translate(-150px, 0px)'
        transform: 'translate(-150px)'
    },
    '25%': {
        // transform: 'rotate(360deg)'
        // transform: 'translate(0px, 100px)'
        transform: 'translate(-75px)'

    },
    '50%': {
        // transform: 'rotate(0deg)'
        // transform: 'translate(150px, 0px)'
        transform: 'translate(0px)'

    },
    '75%': {
        // transform: 'rotate(360deg)'
        // transform: 'translate(0px, -100px)'
        transform: 'translate(75px)'

    },
    '100%': {
        // transform: 'rotate(-360deg)'
        // transform: 'translate(-150px, 0px)'
        transform: 'translate(150px)'
    }
};
const opacityKeyframes = {
    '0%': {
        opacity: 0
    },
    '5%': {
        opacity: 1

    },
    // '50%': {

    // },
    '95%': {
        opacity: 1
    },
    '100%': {
        opacity: 0
    }
};

const initialOpacityKeyframes = {
    'from': {
        opacity: 0,
    },

    'to': {
        opacity: 1,
    }
}
const initialTranslateKeyframes = {
    '0%': {
        transform: 'translateY(100px)'
    },
    '100%': {
        transform: 'translateY(0px)'
    }
}
const outOpacityKeyframes = {
    'from': {
        opacity: 1,
    },

    'to': {
        opacity: 0,
    }
}
const outTranslateKeyframes = {
    '0%': {
        transform: 'translateY(0px)'
    },
    '100%': {
        transform: 'translateY(100px)'
    }
}

const styles = StyleSheet.create({
    testBorder: {
        border: '1px solid black'
    },
    quizBodyContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    },
    answerArea: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    answerBoxes: {
        margin: '2px',
        width: '140px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        // border: 'solid 1px blue',
        background: 'lightblue',
        color: 'white'
    },
    bottomButtons: {
        // border: '1px solid green',
        background: 'lightgreen',
        color: 'white',
        textDecoration: 'none'
    },
    imageResize: {
        width: '300px'
    },
    imageInAnswer: {
        width: '50px'
    },
    red: {
        backgroundColor: 'red'
    },
    blue: {
        backgroundColor: 'blue'
    },
    hoverButton: {
        ':hover': {
            color: '#00ccff',
            background: 'rgba(173, 216, 230, 0.6)',
            transition: 'all 1s ease'
        }
    },
    twirlyText: {
        animationName: [translateKeyframes, opacityKeyframes],
        // animationName: translateKeyframes,
        animationDuration: '5s',
        // animationDuration: '3s, 1500ms',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
        // animation-iteration-count: initial;
        //   animation-iteration-count: inherit;
        //   animation-iteration-count: unset;
    },
    fuzzIn: {
        animationName: [initialOpacityKeyframes, initialTranslateKeyframes],
        animationDuration: '0.5s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'initial'
    },
    fuzzOut: {
        animationName: [outOpacityKeyframes, outTranslateKeyframes],
        animationDuration: '0.5s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'unset'
    },
    hoverFont: {
        ':hover': {
            transition: '1s ease',
            color: 'white'
            // '@keyframes': {

            // }
        }

    }
});

function mapStateToProps(state) {
    return {
        megaQuizTable: state.megaQuizTable
    }
}
export default connect(mapStateToProps, { insertNewQuizAnswerIntoResultsArray, getMegaQuizTable })(QuestionBuild);
    // let questionCriteria = handleProps.map((arrayValue, index, originalArray) => {
    //     return ({
    //         questionType: arrayValue.ques_type,
    //         questionFeatureCount: arrayValue.ques_feat_count,
    //         questionFeatures: arrayValue.question_features,
    //         timing: {
    //             quizTimed: arrayValue.timed,
    //             timeAllotted: arrayValue.time_limit
    //         }
    //     })
    // })
    // let quizStarterStuff = handleProps.map((arrayValue, index, originalArray) => {
    //     return ({
    //         quizId: arrayValue.quiz_id,
    //         quesId: arrayValue.ques_id,
    //         quizTitle: arrayValue.title,
    //         quizDescription: arrayValue.description,
    //         quizFrontImg: arrayValue.start_img
    //     })
    // })
    // let ownerObject = handleProps.map((arrayValue, index, originalArray) => {
    //     return ({
    //         quiz_owner: arrayValue.quiz_owner,
    //         ownerProfilePic: arrayValue.quiz_owner_profile_img,
    //         siteApproval: arrayValue.site_approval,
    //         originalCreateDate: arrayValue.created_on,
    //         lastUpdated: arrayValue.updated_on
    //     })
    // })