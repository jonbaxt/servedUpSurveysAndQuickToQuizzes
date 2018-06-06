import React from 'react';
// import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';


import {
    insertNewSurveyAnswerIntoResultsArray, 
    getMegaSurveyTable, getCurrentScaleInSurvey
} from '../../ducks/reducer';
import { Link } from 'react-router-dom';

function SurveyWizardQuestionBuild(props) {
    // console.log(props)
    // console.log(props.sendParams)
    // console.log(props.sendTable)
    return (
        <div>
            {dealWithMegaSurvey(props.sendTable, props.sendParams, props)}
        </div>
    )
}
function dealWithMegaSurvey(MegaSurvey, nestedRoutes, propsObject) {
    // console.log(MegaSurvey)
    // console.log(nestedRoutes)
    let handleProps = MegaSurvey.filter(arrayValue => arrayValue.survey_id === Number(nestedRoutes.surveyId) && arrayValue.ques_num === Number(nestedRoutes.quesId))
    // console.log(handleProps)
    let quesNumArray = MegaSurvey.filter(arrayValue => arrayValue.survey_id === Number(nestedRoutes.surveyId)).map(element => element.ques_num).filter((element, index, origin) => element !== origin[index - 1])
    let quesCount = Math.max(...quesNumArray)    // Get the number of questions
    // console.log(quesCount)
    let qType = MegaSurvey.filter(el => el.survey_id === Number(nestedRoutes.surveyId) && el.ques_num === Number(nestedRoutes.quesId)).map(el => el.ques_type).filter((el, ind, orig) => el !== orig[ind - 1])
    let qT = qType[0];      //Get the question type for logic statement.
    // console.log(qT)
    let currentsurveyTitle = MegaSurvey.filter(el => el.survey_id === Number(nestedRoutes.surveyId)).map(el => el.title).filter((val, ind, orig) => val !== orig[ind - 1])
    let surveyTitle = currentsurveyTitle[0];    //survey Title for display
    // console.log(surveyTitle)
    let currentQuesNum = MegaSurvey.filter(el => el.survey_id === Number(nestedRoutes.surveyId) && el.ques_num === Number(nestedRoutes.quesId)).map(el => el.ques_num).filter((val, ind, orig) => val !== orig[ind - 1])
    let questionNumber = currentQuesNum[0]; //Question Number
    let currentQuesImg = MegaSurvey.filter(el => el.survey_id === Number(nestedRoutes.surveyId) && el.ques_num === Number(nestedRoutes.quesId)).map(el => el.ques_img).filter((val, ind, orig) => val !== orig[ind - 1])
    let questionImage = currentQuesImg[0]; //Question Image
    let currentQuesText = MegaSurvey.filter(el => el.survey_id === Number(nestedRoutes.surveyId) && el.ques_num === Number(nestedRoutes.quesId)).map(el => el.ques_text).filter((val, ind, orig) => val !== orig[ind - 1])
    let questionText = currentQuesText[0]; //Question Text
    let possibleAnswers = handleProps.map(element => {  //Possible answers to map through
        return { ques_image: element.ques_image, ans_id: element.ans_id, ans_num: element.ans_num, ans_text: element.ans_text, ans_img: element.ans_img, ans_special: element.ans_special, is_correct: element.is_correct }
    })
    let mapAnswersToScreen = null;
    let nextRoute = Number(nestedRoutes.quesId) + 1;
    if (qT === "mult-choice") {
        mapAnswersToScreen = possibleAnswers.map((element, index) => {
            const compiledAnswer = {
                Survey_Ques_Id: handleProps[0].ques_id, Answer_Id: element.ans_id, Takers_Answer: element.ans_text, Taken_Count: 1, Survey_Taker_Id: nestedRoutes.currentUserId
            }
            return (
                <Link to={
                    quesCount <= nestedRoutes.quesId ?
                        `/surveyDoneReDirect/${nestedRoutes.currentUserId}/${nestedRoutes.surveyId}/${nestedRoutes.quesId}/complete`
                        : `/${nestedRoutes.currentUserId}/survey/${nestedRoutes.surveyId}/${nextRoute}`
                }
                    style={{ textDecoration: 'none' }}
                    key={element.ans_id}>
                    <span className={css(styles.answerBoxes)} onClick={() => {
                        propsObject.insertNewSurveyAnswerIntoResultsArray(compiledAnswer)
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
                    <textarea onChange={(e) => textAreaText = e.target.value} />
                    <Link to={
                        quesCount <= nestedRoutes.quesId ?
                            `/surveyDoneReDirect/${nestedRoutes.currentUserId}/${nestedRoutes.surveyId}/${nestedRoutes.quesId}/complete`
                            : `/${nestedRoutes.currentUserId}/survey/${nestedRoutes.surveyId}/${nextRoute}`
                    }
                        style={{ textDecoration: 'none' }}
                        key={element.ans_id}>
                        <button className={css(styles.answerBoxes)} onClick={() => {
                            // console.log(`Hello, the Ans_Id# is ${element.ans_id}  ${textAreaText}`)
                            let compiledAnswer = {
                                Survey_Ques_Id: handleProps[0].ques_id,
                                Answer_Id: element.ans_id,
                                Takers_Answer: textAreaText,
                                Taken_Count: 1,
                                Survey_Taker_Id: nestedRoutes.currentUserId
                            }
                            propsObject.insertNewSurveyAnswerIntoResultsArray(compiledAnswer)
                        }}>Submit Text Entry</button>
                    </Link>
                </span>
            )
        })
    } else if (qT === 'scale10') {
        let answerId = possibleAnswers.map((element, index) => element.ans_id)
        mapAnswersToScreen =
            (
                
                <div>
                <div className={css(styles.scaleArea)}>
                    {/* <div > */}
                    <p>1</p>
                    <input
                        style={{ width: '200px' }}
                        type='range'
                        min='1'
                        max='10'
                        value={propsObject.scaleValueForSurveysSave}
                        onChange={(e) => {propsObject.getCurrentScaleInSurvey(e.target.value)}} />
                    <p>10</p>
                    </div>
                    <div className={css(styles.scaleArea)}>
                        <p>Your Answer: {propsObject.scaleValueForSurveysSave}</p>
                        <Link to={
                        quesCount <= nestedRoutes.quesId ?
                            `/surveyDoneReDirect/${nestedRoutes.currentUserId}/${nestedRoutes.surveyId}/${nestedRoutes.quesId}/complete`
                            : `/${nestedRoutes.currentUserId}/survey/${nestedRoutes.surveyId}/${nextRoute}`
                    }
                        style={{ textDecoration: 'none' }}
                        key={answerId[0]}>
                        <span className={css(styles.rangeButton)} onClick={() => {
                            // console.log(propsObject.scaleValueForSurveysSave)
                            
                            let compiledAnswer = {
                                Survey_Ques_Id: handleProps[0].ques_id,
                                Answer_Id: answerId[0],
                                Takers_Answer: propsObject.scaleValueForSurveysSave,
                                Taken_Count: 1,
                                Survey_Taker_Id: nestedRoutes.currentUserId
                            }
                            // console.log(compiledAnswer)
                            propsObject.insertNewSurveyAnswerIntoResultsArray(compiledAnswer)
                        }}>Submit Number</span>
                        </Link>
                    </div>
                </div>
            )
    }else if (qT === 'scale5') {
        let answerId = possibleAnswers.map((element, index) => element.ans_id)
        mapAnswersToScreen =
            (
                
                <div>
                <div className={css(styles.scaleArea)}>
                    {/* <div > */}
                    <p>1</p>
                    <input
                        style={{ width: '200px' }}
                        type='range'
                        min='1'
                        max='5'
                        value={propsObject.scaleValueForSurveysSave}
                        onChange={(e) => { propsObject.getCurrentScaleInSurvey(e.target.value)}} />
                    <p>5</p>
                    </div>
                    <div className={css(styles.scaleArea)}>
                        <p>Your Answer: {propsObject.scaleValueForSurveysSave}</p>
                        <Link to={
                        quesCount <= nestedRoutes.quesId ?
                            `/surveyDoneReDirect/${nestedRoutes.currentUserId}/${nestedRoutes.surveyId}/${nestedRoutes.quesId}/complete`
                            : `/${nestedRoutes.currentUserId}/survey/${nestedRoutes.surveyId}/${nextRoute}`
                    }
                        style={{ textDecoration: 'none' }}
                        key={answerId[0]}>
                        <span className={css(styles.rangeButton)} onClick={() => {
                            // console.log(propsObject.scaleValueForSurveysSave)
                            
                            let compiledAnswer = {
                                Survey_Ques_Id: handleProps[0].ques_id,
                                Answer_Id: answerId[0],
                                Takers_Answer: propsObject.scaleValueForSurveysSave,
                                Taken_Count: 1,
                                Survey_Taker_Id: nestedRoutes.currentUserId
                            }
                            // console.log(compiledAnswer)
                            propsObject.insertNewSurveyAnswerIntoResultsArray(compiledAnswer)
                        }}>Submit Number</span>
                        </Link>
                    </div>
                </div>
            )
    } else if (qT === 'scale3') {
        let answerId = possibleAnswers.map((element, index) => element.ans_id)
        mapAnswersToScreen =
            (
                
                <div>
                <div className={css(styles.scaleArea)}>
                    {/* <div > */}
                    <p>1</p>
                    <input
                        style={{ width: '200px' }}
                        type='range'
                        min='1'
                        max='3'
                        value={propsObject.scaleValueForSurveysSave}
                        onChange={(e) => { propsObject.getCurrentScaleInSurvey(e.target.value)}}/>
                    <p>3</p>
                    </div>
                    <div className={css(styles.scaleArea)}>
                        <p>Your Answer: {propsObject.scaleValueForSurveysSave}</p>
                        <Link to={
                        quesCount <= nestedRoutes.quesId ?
                            `/surveyDoneReDirect/${nestedRoutes.currentUserId}/${nestedRoutes.surveyId}/${nestedRoutes.quesId}/complete`
                            : `/${nestedRoutes.currentUserId}/survey/${nestedRoutes.surveyId}/${nextRoute}`
                    }
                        style={{ textDecoration: 'none' }}
                        key={answerId[0]}>
                        <span className={css(styles.rangeButton)} onClick={() => {
                            // console.log(propsObject.scaleValueForSurveysSave)
                            
                            let compiledAnswer = {
                                Survey_Ques_Id: handleProps[0].ques_id,
                                Answer_Id: answerId[0],
                                Takers_Answer: propsObject.scaleValueForSurveysSave,
                                Taken_Count: 1,
                                Survey_Taker_Id: nestedRoutes.currentUserId
                            }
                            // console.log(compiledAnswer)
                            propsObject.insertNewSurveyAnswerIntoResultsArray(compiledAnswer)
                        }}>Submit Number</span>
                        </Link>
                    </div>
                </div>
            )
    }
    return (
        <div className={css(styles.quizBodyContainer
            // , styles.testBorder
        )}>
            <div 
            // className={css(styles.testBorder)} 
            >
                <h2>{surveyTitle}</h2>
                <h3>{`Question #${questionNumber}`}</h3>
                {questionImage ? <img className={css(styles.imageResize)} src={questionImage} alt='' /> : null}
            </div>
            <div 
            // className={css(styles.testBorder)} 
            >
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

// const styles = StyleSheet.create({
//     sliderWrapper: {
//         display: 'inline-block',
//         width: '20px',
//         height: '150px',
//         borderRadius: '50%',
//         padding: '10px'
//       },
//       sliderWrapperInput: {
//         width: '150px',
//         height: '20px',
//         margin: '0',
//         transformOrigin: '75px 75px'
//         // ,
//         // transform: 'rotate(-90deg)'
//       }
// })

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
        border: 'solid 1px blue',
        background: 'lightblue',
        color: 'white'
    },
    rangeButton: {
        margin: '2px',
        width: '95px',
        height: '25px',
        display: 'flex',
        alignItems: 'center',
        border: 'solid 1px blue',
        background: 'lightblue',
        color: 'white'
    },
    bottomButtons: {
        border: '1px solid green',
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
    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    },
    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    },
    scaleArea: {
        display: 'flex', flexDirection: 'row'
    }
});

function mapStateToProps(state) {
    return {
        megaSurveyTable: state.megaSurveyTable,
        resultsSurTemporaryStore: state.resultsSurTemporaryStore,
        scaleValueForSurveysSave: state.scaleValueForSurveysSave
    }
}
export default connect(mapStateToProps, {
    insertNewSurveyAnswerIntoResultsArray, 
    getMegaSurveyTable, 
    getCurrentScaleInSurvey
})(SurveyWizardQuestionBuild);
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