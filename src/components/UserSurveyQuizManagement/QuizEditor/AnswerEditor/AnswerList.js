import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerEditor from './AnswerEditor';

class AnswerList extends Component {
    render() {
        // console.log(this.props.combineAnswers)
        let answerList = this.props.combineAnswers.map((element, ind  ) => < AnswerEditor key={element.answer_id} element={element} index={ind}
            // ques_id={element.ques_id} ques_num={element.ques_num}
             /> );
        return (
            <div>
                {answerList}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentQuizInfo: state.currentQuizInfo,
        currentQuizQuestionsInfo: state.currentQuizQuestionsInfo,
        currentQuizAnswersInfo: state.currentQuizAnswersInfo
    }
}
export default connect(mapStateToProps, null)(AnswerList);