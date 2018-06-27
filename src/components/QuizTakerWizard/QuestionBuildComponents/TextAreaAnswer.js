import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import { insertNewQuizAnswerIntoResultsArray } from '../../../ducks/reducer';

// export default function TextAreaAnswer(props){
class TextAreaAnswer extends React.Component {
    constructor(){
        super()
        this.state = {
            textAreaText: '',
        }
    }
    handleTextChange = (e) => {
        this.setState({ textAreaText: e})
    } 
    render(){
    return (
        <span>
                    <textarea onChange={(e) => {this.handleTextChange(e.target.value)}} className={css(styles.fuzzIn)} />
                     <Link to={
                        this.props.quesCount <= this.props.nestedRoutes.quesId ?
                            `/quizDoneReDirect/${this.props.nestedRoutes.currentUserId}/${this.props.nestedRoutes.quizId}/${this.props.nestedRoutes.quesId}/complete`
                            : `/${this.props.nestedRoutes.currentUserId}/quiz/${this.props.nestedRoutes.quizId}/${this.props.nextRoute}`
                    }
                        style={{ textDecoration: 'none' }}
                        key={this.props.element.ans_id}>
                        <button className={css(styles.answerBoxes, styles.hoverButton, styles.fuzzIn)} onClick={() => {
                            let compiledAnswer = {
                                Quiz_Ques_Id: this.props.propsObject.sendParams.quesId,
                                Answer_Id: this.props.element.ans_id,
                                Takers_Answer: this.state.textAreaText,
                                Taken_Count: this.props.current_taken_number,
                                Survey_Taker_Id: this.props.nestedRoutes.currentUserId
                            }
                            this.props.insertNewQuizAnswerIntoResultsArray(compiledAnswer)
                        }}>Submit Text Entry</button>
                    </Link> 
                </span>
    )
}

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


export default connect(null, { insertNewQuizAnswerIntoResultsArray } )(TextAreaAnswer);