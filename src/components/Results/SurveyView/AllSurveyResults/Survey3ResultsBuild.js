import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
    Bar, Line,
    Pie
} from 'react-chartjs-2';

import MultChoice5Answers from './SurveyResultsTableBuilders/MultChoice5Answers';
import MultChoice3Answers from './SurveyResultsTableBuilders/MultChoice3Answers';

function Survey3ResultBuild(props) {
    let table1 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
    let table2 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
    let table3 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
    let survey3Name = '';
    let survey3Image = '';
    let question1Text = '';
    let question2Text = '';
    let question3Text = '';
    if (props.giveUltraTable.length !== 0) {
        let surveyResultsSurvey3 = props.giveUltraTable.filter(el => el.survey_id === 3)
         survey3Name = surveyResultsSurvey3[0].title
         survey3Image = (<img src={surveyResultsSurvey3[0].survey_start_img} alt='' className={css(st.picResize)} />)

        let survey3MultipleChoiceQuestions = surveyResultsSurvey3.filter(el => el.ques_type === 'mult-choice')
        //QUESTION 1 BUILD
        let question1TextFilter = survey3MultipleChoiceQuestions.filter(el => el.ques_num === 1)
        question1Text = question1TextFilter[0].ques_text
        table1 = MultChoice5Answers(survey3MultipleChoiceQuestions, 1)
        //QUESTION 2 BUILD
        let question2TextFilter = survey3MultipleChoiceQuestions.filter(el => el.ques_num === 2)
        question2Text = question2TextFilter[0].ques_text
        table2 = MultChoice3Answers(survey3MultipleChoiceQuestions, 2)
        //QUESTION 3 BUILD
        let question3TextFilter = survey3MultipleChoiceQuestions.filter(el => el.ques_num === 3)
        question3Text = question3TextFilter[0].ques_text
        table3 = MultChoice3Answers(survey3MultipleChoiceQuestions, 3)

    }

    return (<div>
        <h2>{survey3Name}</h2>
        {survey3Image}
        <h3>Question 1</h3>
        <h3>{question1Text}</h3>
        <Pie data={table1} />
        <Bar data={table1} />
        <Line data={table1} />
        <h3>Question 2</h3>
        <h3>{question2Text}</h3>
        <Pie data={table2} />
        <Bar data={table2} />
        <Line data={table2} />
        <h3>Question 3</h3>
        <h3>{question3Text}</h3>
        <Pie data={table3} />
        <Bar data={table3} />
        <Line data={table3} />
    </div>)
}
const st = StyleSheet.create({
    mainResultsDiv: {
        textAlign: 'center',
    },
    flexMap: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
    },
    picResize: {
        width: '100%'
    },
    littlePic: {
        width: '80px',
    },
    containerBorder: {
        border: '1px solid rgba(255,99,132,1)'
    },
    responseList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px solid rgba(255,99,132,1)',
        background: 'rgba(255,99,132,0.6)',
    },
    responseInner: {
        display: 'flex',
        flexDirection: 'column',
    }
})
export default Survey3ResultBuild;