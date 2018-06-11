import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
    Bar, Line,
    Pie
} from 'react-chartjs-2';

import MultChoice3Answers from './SurveyResultsTableBuilders/MultChoice3Answers';
import Scale5Results from './SurveyResultsTableBuilders/Scale5Results'

function Survey1ResultsBuild(props) {
    // console.log(props)
    let table1MultChoiceQuesOne =  { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0]}]};
    let table2MultChoiceQuesTwo =  { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0]}]};
    let table3Scale5QuesThree =  { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0]}]};
    let table4Scale5QuesFour =  { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0]}]};
    let table5Scale5QuesFive =  { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0]}]};
    let mapResponsesTable = '';
    let survey1Name = '';
    let survey1Image = '';
    let questionOneText = '';
    let questionTwoText = '';
    let questionThreeText = '';
    let questionFourText = '';
    let questionFiveText = '';
    let question6Text = '';
    if (props.giveUltraTable.length !== 0) {
        let surveyResultsSurvey1 = props.giveUltraTable.filter(el => el.survey_id === 1)
        survey1Name = surveyResultsSurvey1[0].title
        survey1Image = (<img src={surveyResultsSurvey1[0].survey_start_img} alt='' className={css(st.picResize)} />)
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 1
        let survey1MultChoiceQuestions = surveyResultsSurvey1.filter(el => el.ques_type === 'mult-choice')
        let questionOneTextFilter = survey1MultChoiceQuestions.filter(el => el.ques_num === 1).map(el => el.ques_text);
        questionOneText = questionOneTextFilter[0];
        table1MultChoiceQuesOne = MultChoice3Answers(survey1MultChoiceQuestions, 1)  
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 2
        let questionTwoTextFilter = survey1MultChoiceQuestions.filter(el => el.ques_num === 1).map(el => el.ques_text);
        questionTwoText = questionTwoTextFilter[0];
        table2MultChoiceQuesTwo = MultChoice3Answers(survey1MultChoiceQuestions, 2) 
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 3
        let survey1Scale5Questions = surveyResultsSurvey1.filter(el => el.ques_type === 'scale5')
        let questionThreeTextFilter = survey1Scale5Questions.filter(el => el.ques_num === 3).map(el => el.ques_text);
        questionThreeText = questionThreeTextFilter[0];
        table3Scale5QuesThree = Scale5Results(survey1Scale5Questions, 3)
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 4
        let questionFourTextFilter = survey1Scale5Questions.filter(el => el.ques_num === 4).map(el => el.ques_text)
        questionFourText = questionFourTextFilter[0];
        table4Scale5QuesFour = Scale5Results(survey1Scale5Questions, 4)
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 5
        let questionFiveTextFilter = survey1Scale5Questions.filter(el => el.ques_num === 5).map(el => el.ques_text)
        questionFiveText = questionFiveTextFilter[0];
        table5Scale5QuesFive = Scale5Results(survey1Scale5Questions, 5)
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 6
        let survey1TextAreaQuestions = surveyResultsSurvey1.filter(el => el.ques_type === 'text-area')
        let question6TextFilter = survey1TextAreaQuestions.filter(el => el.ques_num === 6).map(el => el.ques_text)
        question6Text = question6TextFilter[0];
       mapResponsesTable = survey1TextAreaQuestions.map((el, ind) => {
            return (<div key={ind} className={css(st.responseList)} >
            <div className={css(st.responseInner)}>
                      <img src={el.taker_img} alt='' className={css(st.littlePic)} />
                         <p>{el.taker_name}</p>
                         </div>
                         <p>{el.takers_answer}</p>
                     </div>)
        })
    }

    return (<div>
        <h1>{survey1Name}</h1><br />
        {survey1Image}<br />
        <h3>Question 1</h3>
        <h3>{questionOneText}</h3>
        <Pie data={table1MultChoiceQuesOne} />
        <h3>Question 2</h3>
        <h3>{questionTwoText}</h3>
        <Pie data={table2MultChoiceQuesTwo} />
        <h3>Question 3</h3>
        <h3>{questionThreeText}</h3>
        <Bar data={table3Scale5QuesThree} />
        <Line data={table3Scale5QuesThree} />
        <h3>Question 4</h3>
        <h3>{questionFourText}</h3>
        <Bar data={table4Scale5QuesFour} />
        <Line data={table4Scale5QuesFour} />
        <h3>Question 5</h3>
        <h3>{questionFiveText}</h3>
        <Bar data={table5Scale5QuesFive} />
        <Line data={table5Scale5QuesFive} />

        <h3>Question 6</h3>
        <h3>{question6Text}</h3>
        <div className={css(st.containerBorder)}>
            {mapResponsesTable}
        </div>
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
        width: '40px',
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

export default Survey1ResultsBuild;