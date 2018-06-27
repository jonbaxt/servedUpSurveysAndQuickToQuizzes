import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { insertNewQuizAnswerIntoResultsArray, getMegaQuizTable } from '../../ducks/reducer';
import { handleProp, calcQuesCount, calcQuestionType, calcQuizTitle, calcQuesNum, calcQuesImage, calcQuesText } from './QuestionBuildComponents/BuildQuestionData';
import MultipleChoiceAnswer from './QuestionBuildComponents/MultipleChoiceAnswer';
import TextAreaAnswer from './QuestionBuildComponents/TextAreaAnswer';
function QuestionBuild(props) {
    return (<div className={css(styles.fuzzIn)} >
        {dealWithMegaTable(props.sendTable, props.sendParams, props)}
    </div>)
}
function dealWithMegaTable(megaTable, nestedRoutes, propsObject) {
    let handleProps = handleProp(megaTable, nestedRoutes.quizId, nestedRoutes.quesId)
    let quesCount = calcQuesCount(megaTable, nestedRoutes.quizId)
    let qT = calcQuestionType(megaTable, nestedRoutes.quizId, nestedRoutes.quesId)
    let quizTitle = calcQuizTitle(megaTable, nestedRoutes.quizId)
    let questionNumber = calcQuesNum(megaTable, nestedRoutes.quizId, nestedRoutes.quesId)
    let questionImage = calcQuesImage(megaTable, nestedRoutes.quizId, nestedRoutes.quesId)
    let questionText = calcQuesText(megaTable, nestedRoutes.quizId, nestedRoutes.quesId)
    let desctructureTable = -2
    let beforeCount = -2;
    if (propsObject.quizResultsUltraJoinedTable.length !== 0) {
        desctructureTable = propsObject.quizResultsUltraJoinedTable.filter((el) => el.survey_taker_id === Number(nestedRoutes.currentUserId) && el.quiz_id === Number(nestedRoutes.quizId)).map(el => el.taken_count).reduce((a, b) => a === b ? a : -1)
        beforeCount = Number(desctructureTable)
    }
    let current_taken_number = ++beforeCount;
    let possibleAnswers = handleProps.map(element => {  //Possible answers to map through
        return { ques_image: element.ques_image, ans_id: element.ans_id, ans_num: element.ans_num, ans_text: element.ans_text, ans_img: element.ans_img, ans_special: element.ans_special, is_correct: element.is_correct }
    })
    let mapAnswersToScreen = null;
    let nextRoute = Number(nestedRoutes.quesId) + 1;
    if (qT === "mult-choice") {
        mapAnswersToScreen = possibleAnswers.map((element, index) => {
            const compiledAnswer = {
                Quiz_Ques_Id: handleProps[0].ques_id, Answer_Id: element.ans_id, Takers_Answer: element.ans_text, Taken_Count: current_taken_number, Survey_Taker_Id: nestedRoutes.currentUserId
            }
            return (
                <MultipleChoiceAnswer key={element.ans_id} nestedRoutes={nestedRoutes} propsObject={propsObject} element={element} compiledAnswer={compiledAnswer} quesCount={quesCount} nextRoute={nextRoute} decideImageAnswerArea={decideImageAnswerArea}
                    handleProps={handleProps} />
            )
        })
    }

    else if (qT === 'text-area') {
        mapAnswersToScreen = possibleAnswers.map((element, index) => {
            let textAreaText = ''
            return (
                <TextAreaAnswer key={element.ans_id} nestedRoutes={nestedRoutes} propsObject={propsObject} element={element} quesCount={quesCount} nextRoute={nextRoute} textAreaText={textAreaText} current_taken_number={current_taken_number} />
            )
        })
    } else if (qT === 'pic_guess') {
        mapAnswersToScreen = possibleAnswers.map((element, index) => {
            const compiledAnswer = {
                Quiz_Ques_Id: handleProps[0].ques_id, Answer_Id: element.ans_id, Takers_Answer: element.ans_text, Taken_Count: current_taken_number, Survey_Taker_Id: nestedRoutes.currentUserId
            }
            return (
                <Link to={
                    quesCount <= nestedRoutes.quesId ?
                        `/quizDoneReDirect/${nestedRoutes.currentUserId}/${nestedRoutes.quizId}/${nestedRoutes.quesId}/complete`
                        : `/${nestedRoutes.currentUserId}/quiz/${nestedRoutes.quizId}/${nextRoute}`
                }
                    style={{ textDecoration: 'none' }}
                    key={element.ans_id}>
                    <span className={css(styles.answerBoxesPicGuess, styles.hoverButton, styles.fuzzIn)} onClick={() => {
                        propsObject.insertNewQuizAnswerIntoResultsArray(compiledAnswer)
                    }} >
                        <img className={css(styles.imageInAnswerPicGuess, styles.imageInAnswerTabletPicGuess, styles.imageInAnswerLaptopPicGuess, styles.imageInAnswerBiggestPicGuess)} src={element.ans_img} alt='' />)
                    </span>
                </Link>
            )
        })
    }
    return (
        <div className={css(styles.quizBodyContainer, styles.pageStart)}>
            <div className={css(styles.fuzzIn)} >
                <br /><h2 className={css(styles.h2Normal, styles.h2Tablet, styles.h2Laptop, styles.h2Biggest)}>{quizTitle}</h2><br />
                <h3 className={css(styles.h3Normal, styles.h3Tablet, styles.h3Laptop, styles.h3Biggest)}>{`Question #${questionNumber}`}</h3><br />
                {questionImage ? <img className={css(styles.imageResize, styles.imageResizeTablet, styles.imageResizeLaptop, styles.imageResizeBiggest)} src={questionImage} alt='' /> : null}
            </div>
            <div className={css(styles.fuzzIn)} >
                <br /><h3 className={css(styles.h3Normal, styles.h3Tablet, styles.h3Laptop, styles.h3Biggest)}>{`${questionText}`}</h3><br />
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
    } else { return null; }
}
const translateKeyframes = {
    '0%': { transform: 'translate(-150px)' }, '25%': { transform: 'translate(-75px)' },
    '50%': { transform: 'translate(0px)' },
    '75%': { transform: 'translate(75px)' },
    '100%': { transform: 'translate(150px)' }
};
const opacityKeyframes = { '0%': { opacity: 0 }, '5%': { opacity: 1 }, '95%': { opacity: 1 }, '100%': { opacity: 0 } };
const initialOpacityKeyframes = { 'from': { opacity: 0, }, 'to': { opacity: 1, } }
const initialTranslateKeyframes = { '0%': { transform: 'translateY(100px)' }, '100%': { transform: 'translateY(0px)' } }
const outOpacityKeyframes = { 'from': { opacity: 1, }, 'to': { opacity: 0, } }
const outTranslateKeyframes = { '0%': { transform: 'translateY(0px)' }, '100%': { transform: 'translateY(100px)' } }
const styles = StyleSheet.create({
    pageStart: { animationName: initialOpacityKeyframes, animationDuration: '1s', transition: 'ease all', animationIterationCount: 'initial' },
    testBorder: { border: '1px solid black' },
    quizBodyContainer: { transition: '1s all ease', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' },
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
    answerBoxesPicGuess: {
        margin: '2px',
        display: 'flex',
        alignItems: 'center',
        transition: '1s all ease',
        borderRadius: '2%',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.2)',
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
    imageResizeTablet: { '@media (min-width: 490px)': { width: '400px', transition: '1s all ease' } },
    imageResizeLaptop: { '@media (min-width: 700px)': { width: '500px', transition: '1s all ease' } },
    imageResizeBiggest: { '@media (min-width: 1400px)': { width: '600px', transition: '1s all ease' } },
    imageInAnswer: { width: '50px', transition: '1s all ease' },
    imageInAnswerTablet: { '@media (min-width: 490px)': { width: '60px', transition: '1s all ease' } },
    imageInAnswerLaptop: { '@media (min-width: 700px)': { width: '70px', transition: '1s all ease' } },
    imageInAnswerBiggest: { '@media (min-width: 1400px)': { width: '80px', transition: '1s all ease' } },
    imageInAnswerPicGuess: { width: '150px', transition: '1s all ease' },
    imageInAnswerTabletPicGuess: { '@media (min-width: 490px)': { width: '200px', transition: '1s all ease' } },
    imageInAnswerLaptopPicGuess: { '@media (min-width: 700px)': { width: '300px', transition: '1s all ease' } },
    imageInAnswerBiggestPicGuess: { '@media (min-width: 1400px)': { width: '500px', transition: '1s all ease' } },
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
    hoverFont: { ':hover': { transition: '1s ease', color: 'white' } }
});
function mapStateToProps(state) {
    return {
        megaQuizTable: state.megaQuizTable,
        quizResultsUltraJoinedTable: state.quizResultsUltraJoinedTable,
    }
}
export default connect(mapStateToProps, { insertNewQuizAnswerIntoResultsArray, getMegaQuizTable })(QuestionBuild);