import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getQuizResultsInJoinedTable } from '../../../../ducks/reducer';
import QuesEditor from './QuesEditor';

class QuesList extends Component {
    render() {
        let quesList = this.props.currentQuizQuestionsInfo.map(element => < QuesEditor key={element.ques_id} ques_id={element.ques_id} ques_num={element.ques_num} /> );
        return (
            <div>
                {quesList}
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
export default connect(mapStateToProps, null)(QuesList);