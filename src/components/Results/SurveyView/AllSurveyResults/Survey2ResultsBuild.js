import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
    Bar, Line,
    Pie
} from 'react-chartjs-2';
import Scale10Results from './SurveyResultsTableBuilders/Scale10Results';

function Survey2ResultBuild(props) {
    let table1Scale10Ques1 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
    let table2Scale10Ques2 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
    let table3Scale10Ques3 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
    let table4Scale10Ques4 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
    let table5Scale10Ques5 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
    let table6Scale10Ques6 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
    let table7Scale10Ques7 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
    let table8Scale10Ques8 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
    let table9Scale10Ques9 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
    let table10Scale10Ques10 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
    let table11Scale10Ques11 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
    let survey2Name = '';
    let survey2Image = '';
    let question1Text = '';
    let question2Text = '';
    let question3Text = '';
    let question4Text = '';
    let question5Text = '';
    let question6Text = '';
    let question7Text = '';
    let question8Text = '';
    let question9Text = '';
    let question10Text = '';
    let question11Text = '';
    let question12Text = '';
    let mapResponsesTable = '';
    if (props.giveUltraTable.length !== 0) {
        let surveyResultsSurvey2 = props.giveUltraTable.filter(el => el.survey_id === 2)
        survey2Name = surveyResultsSurvey2[0].title
        survey2Image = surveyResultsSurvey2[0].survey_start_img
        let survey2Scale10Questions = surveyResultsSurvey2.filter(el => el.ques_type === 'scale10')
        let survey2TextAreaQuestions = surveyResultsSurvey2.filter(el => el.ques_type === 'text-area')
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 1 Ques 1
        let question1TextFilter = survey2Scale10Questions.filter(el => el.ques_num === 1).map(el => el.ques_text)
        question1Text = question1TextFilter[0];
        table1Scale10Ques1 = Scale10Results(survey2Scale10Questions, 1);
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 2 Ques 2
        let question2TextFilter = survey2Scale10Questions.filter(el => el.ques_num === 2).map(el => el.ques_text)
        question2Text = question2TextFilter[0];
        table2Scale10Ques2 = Scale10Results(survey2Scale10Questions, 2);
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 3 Ques 3
        let question3TextFilter = survey2Scale10Questions.filter(el => el.ques_num === 3).map(el => el.ques_text)
        question3Text = question3TextFilter[0];
        table3Scale10Ques3 = Scale10Results(survey2Scale10Questions, 3);
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 4 Ques 4
        let question4TextFilter = survey2Scale10Questions.filter(el => el.ques_num === 4).map(el => el.ques_text)
        question4Text = question4TextFilter[0];
        table4Scale10Ques4 = Scale10Results(survey2Scale10Questions, 4);
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 5 Ques 5
        let question5TextFilter = survey2Scale10Questions.filter(el => el.ques_num === 5).map(el => el.ques_text)
        question5Text = question5TextFilter[0];
        table5Scale10Ques5 = Scale10Results(survey2Scale10Questions, 5);
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 6 Ques 6
        let question6TextFilter = survey2Scale10Questions.filter(el => el.ques_num === 6).map(el => el.ques_text)
        question6Text = question6TextFilter[0];
        table6Scale10Ques6 = Scale10Results(survey2Scale10Questions, 6);
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 7 Ques 7
        let question7TextFilter = survey2Scale10Questions.filter(el => el.ques_num === 7).map(el => el.ques_text)
        question7Text = question7TextFilter[0];
        table7Scale10Ques7 = Scale10Results(survey2Scale10Questions, 7);
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 8 Ques 8
        let question8TextFilter = survey2Scale10Questions.filter(el => el.ques_num === 8).map(el => el.ques_text)
        question8Text = question8TextFilter[0];
        table8Scale10Ques8 = Scale10Results(survey2Scale10Questions, 8);
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 9 Ques 9
        let question9TextFilter = survey2Scale10Questions.filter(el => el.ques_num === 9).map(el => el.ques_text)
        question9Text = question9TextFilter[0];
        table9Scale10Ques9 = Scale10Results(survey2Scale10Questions, 9);
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 10 Ques 10
        let question10TextFilter = survey2Scale10Questions.filter(el => el.ques_num === 9).map(el => el.ques_text)
        question10Text = question10TextFilter[0];
        table10Scale10Ques10 = Scale10Results(survey2Scale10Questions, 10);
        //EVERYTHING NEEDED TO BUILD THE DATA IN TABLE 11 Ques 11
        let question11TextFilter = survey2Scale10Questions.filter(el => el.ques_num === 11).map(el => el.ques_text)
        question11Text = question11TextFilter[0];
        table11Scale10Ques11 = Scale10Results(survey2Scale10Questions, 11);
        //EVERYTHING NEEDED TO BUILD THE DATA FOR QUES 12
        let question12TextFilter = survey2TextAreaQuestions.filter(el => el.ques_num === 12).map(el => el.ques_text)
        question12Text = question12TextFilter[0];

        mapResponsesTable = survey2TextAreaQuestions.map((el, ind ) => {
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
        <h2>{survey2Name}</h2>
        <img src={survey2Image} alt='' className={css(st.picResize)} />
        <h3>Question 1</h3>
        <h3>{question1Text}</h3>
        <Pie data={table1Scale10Ques1} />
        <Bar data={table1Scale10Ques1} />
        <Line data={table1Scale10Ques1} />
        <h3>Question 2</h3>
        <h3>{question2Text}</h3>
        <Pie data={table2Scale10Ques2} />
        <Bar data={table2Scale10Ques2} />
        <Line data={table2Scale10Ques2} />
        <h3>Question 3</h3>
        <h3>{question3Text}</h3>
        <Pie data={table3Scale10Ques3} />
        <Bar data={table3Scale10Ques3} />
        <Line data={table3Scale10Ques3} />
        <h3>Question 4</h3>
        <h3>{question4Text}</h3>
        <Pie data={table4Scale10Ques4} />
        <Bar data={table4Scale10Ques4} />
        <Line data={table4Scale10Ques4} />
        <h3>Question 5</h3>
        <h3>{question5Text}</h3>
        <Pie data={table5Scale10Ques5} />
        <Bar data={table5Scale10Ques5} />
        <Line data={table5Scale10Ques5} />
        <h3>Question 6</h3>
        <h3>{question6Text}</h3>
        <Pie data={table6Scale10Ques6} />
        <Bar data={table6Scale10Ques6} />
        <Line data={table6Scale10Ques6} />
        <h3>Question 7</h3>
        <h3>{question7Text}</h3>
        <Pie data={table7Scale10Ques7} />
        <Bar data={table7Scale10Ques7} />
        <Line data={table7Scale10Ques7} />
        <h3>Question 8</h3>
        <h3>{question8Text}</h3>
        <Pie data={table8Scale10Ques8} />
        <Bar data={table8Scale10Ques8} />
        <Line data={table8Scale10Ques8} />
        <h3>Question 9</h3>
        <h3>{question9Text}</h3>
        <Pie data={table9Scale10Ques9} />
        <Bar data={table9Scale10Ques9} />
        <Line data={table9Scale10Ques9} />
        <h3>Question 10</h3>
        <h3>{question10Text}</h3>
        <Pie data={table10Scale10Ques10} />
        <Bar data={table10Scale10Ques10} />
        <Line data={table10Scale10Ques10} />
        <h3>Question 11</h3>
        <h3>{question11Text}</h3>
        <Pie data={table11Scale10Ques11} />
        <Bar data={table11Scale10Ques11} />
        <Line data={table11Scale10Ques11} />
        <h3>Question 12</h3>
        <h3>{question12Text}</h3>
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
export default Survey2ResultBuild;