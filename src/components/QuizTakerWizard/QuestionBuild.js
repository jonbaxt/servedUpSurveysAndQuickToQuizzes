import React from 'react';
// import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { insertNewQuizAnswerIntoResultsArray, getMegaQuizTable } from '../../ducks/reducer';
import { Link } from 'react-router-dom';

function QuestionBuild(props) {
    return (
        <div className={css(styles.fuzzIn)} >
            {dealWithMegaTable(props.sendTable, props.sendParams, props)}
        </div>
    )
}
function dealWithMegaTable(megaTable, nestedRoutes, propsObject) {
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
            //TODO: 
            //TODO: 
            //TODO: Need to fix the Taken count to increment properly.
            //TODO: 
            //TODO: 
            //TODO: 
            const compiledAnswer = {
                Quiz_Ques_Id: handleProps[0].ques_id, Answer_Id: element.ans_id, Takers_Answer: element.ans_text, Taken_Count: 1, Survey_Taker_Id: nestedRoutes.currentUserId
            }
            return (
                <Link to={
                    quesCount <= nestedRoutes.quesId ?
                        `/quizDoneReDirect/${nestedRoutes.currentUserId}/${nestedRoutes.quizId}/${nestedRoutes.quesId}/complete`
                        : `/${nestedRoutes.currentUserId}/quiz/${nestedRoutes.quizId}/${nextRoute}`
                }
                    style={{ textDecoration: 'none' }}
                    key={element.ans_id}>
                    <span className={css(styles.answerBoxes, styles.answerBoxesTablet, styles.answerBoxesLaptop, styles.answerBoxesBiggest, styles.hoverButton, styles.fuzzIn)} onClick={() => {
                        propsObject.insertNewQuizAnswerIntoResultsArray(compiledAnswer)
                        // console.log(`I was clicked ${element.ans_id} and ${element.ans_text}`)
                    }} >
                        {decideImageAnswerArea(element.ans_img)}
                        <p className={css(styles.answerBoxText, styles.answerBoxTextTablet, styles.answerBoxTextLaptop, styles.answerBoxTextBiggest)} >{element.ans_text}</p>
                    </span>
                </Link>
            )
        })
    } else if (qT === 'text-area') {
        mapAnswersToScreen = possibleAnswers.map((element, index) => {
            let textAreaText = ''
            return (
                <span key={element.ans_id}>
                    <textarea onChange={(e) => textAreaText = e.target.value} className={css(styles.fuzzIn)} />
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

    //FIXME:
    return (
        <div className={css(styles.quizBodyContainer, styles.pageStart
            // , styles.testBorder
        )}>
            <div className={css(styles.fuzzIn)} >
            <br/><h2 className={css(styles.h2Normal, styles.h2Tablet, styles.h2Laptop, styles.h2Biggest)}>{quizTitle}</h2><br/>
                <h3 className={css(styles.h3Normal, styles.h3Tablet, styles.h3Laptop, styles.h3Biggest)}>{`Question #${questionNumber}`}</h3><br/>
                {questionImage ? <img className={css(styles.imageResize, styles.imageResizeTablet, styles.imageResizeLaptop, styles.imageResizeBiggest)} src={questionImage} alt='' /> : null}
            </div>
            <div className={css(styles.fuzzIn)} >
                <br/><h3 className={css(styles.h3Normal, styles.h3Tablet, styles.h3Laptop, styles.h3Biggest)}>{`${questionText}`}</h3><br/>
            </div>
            <div className={css(styles.answerArea, styles.answerAreaTablet, styles.answerAreaLaptop, styles.answerAreaBiggest)}>
                {mapAnswersToScreen}
            </div>
        </div>
    )
}
function decideImageAnswerArea(AnswerImage) {
    if (AnswerImage) {
        return (<img className={css(styles.imageInAnswer, styles.imageInAnswerTablet, styles.imageInAnswerLaptop, styles.imageInAnswerBiggest)} src={AnswerImage} alt='' />)
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
    pageStart: {
        animationName: initialOpacityKeyframes,
        animationDuration: '1s',
        transition: 'ease all',
        // animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    testBorder: {
        border: '1px solid black'
    },
    quizBodyContainer: {
        transition: '1s all ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    },
    h2Normal: { fontSize: '30px', transition: '1s all ease', },
    h2Tablet: { '@media (min-width: 490px)': { fontSize: '40px', transition: '1s all ease', }, },
    h2Laptop: { '@media (min-width: 700px)': { fontSize: '50px', transition: '1s all ease', }, },
    h2Biggest: { '@media (min-width: 1400px)': { fontSize: '60px', transition: '1s all ease', }, },
    h3Normal: { fontSize: '20px', transition: '1s all ease', },
    h3Tablet: { '@media (min-width: 490px)': { fontSize: '30px', transition: '1s all ease', }, },
    h3Laptop: { '@media (min-width: 700px)': { fontSize: '40px', transition: '1s all ease', }, },
    h3Biggest: { '@media (min-width: 1400px)': { fontSize: '50px', transition: '1s all ease', }, },
    answerArea: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    answerAreaTablet: {
        '@media (min-width: 490px)': {
            flexDirection: 'row',
            flexWrap: 'wrap',
            transition: '1s all ease',
        },
    },
    answerAreaLaptop: {
        '@media (min-width: 700px)': {
            flexDirection: 'row',
            flexWrap: 'wrap',
            transition: '1s all ease',
        },
    },
    answerAreaBiggest: {
        '@media (min-width: 1400px)': {
            flexDirection: 'row',
            flexWrap: 'wrap',
            transition: '1s all ease',
        },
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
    answerBoxText: { marginLeft: '8px', fontSize: '15px', },
    answerBoxTextTablet: { '@media (min-width: 490px)': { marginLeft: '8px', fontSize: '20px', }, },
    answerBoxTextLaptop: { '@media (min-width: 700px)': { marginLeft: '8px', fontSize: '25px', }, },
    answerBoxTextBiggest: { '@media (min-width: 1400px)': { marginLeft: '8px', fontSize: '28px', }, },
    bottomButtons: { background: 'lightgreen', color: 'white', textDecoration: 'none' },
    imageResize: { width: '300px', transition: '1s all ease', },
    imageResizeTablet: { '@media (min-width: 490px)': { width: '400px', transition: '1s all ease' }},
    imageResizeLaptop: { '@media (min-width: 700px)': { width: '500px', transition: '1s all ease' }},
    imageResizeBiggest: { '@media (min-width: 1400px)': { width: '600px', transition: '1s all ease' }},
    imageInAnswer: { width: '50px', transition: '1s all ease' },
    imageInAnswerTablet: { '@media (min-width: 490px)': { width: '60px', transition: '1s all ease' }},
    imageInAnswerLaptop: { '@media (min-width: 700px)': { width: '70px', transition: '1s all ease' }},
    imageInAnswerBiggest: { '@media (min-width: 1400px)': { width: '80px', transition: '1s all ease' }},
    red: { backgroundColor: 'red' },
    blue: { backgroundColor: 'blue' },
    hoverButton: {
        ':hover': {
            color: '#00ccff',
            background: 'rgba(173, 216, 230, 0.6)',
            transition: 'all 1s ease',
            boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.9)',
        }
    },
    twirlyText: {
        animationName: [translateKeyframes, opacityKeyframes],
        animationDuration: '5s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
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