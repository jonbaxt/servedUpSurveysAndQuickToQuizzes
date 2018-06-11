import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
    Bar, Line,
    Pie
} from 'react-chartjs-2';

import MultChoice3Answers from './SurveyResultsTableBuilders/MultChoice3Answers';
import Scale5Results from './SurveyResultsTableBuilders/Scale5Results'

class Survey1ResultsBuild extends React.Component {
    constructor(){
        super()
        this.state ={
            question1Display: 'pie',
            question2Display: 'pie',
            question3Display: 'pie',
            question4Dislay: 'pie',
            question5Dislay: 'pie',
        }
    }
    handleQuestion1ViewPie = () => {
        this.setState({ question1Display: 'pie' })
    }
    handleQuestion1ViewBar = () => {
        this.setState({ question1Display: 'bar' })
    }
    handleQuestion1ViewLine = () => {
        this.setState({ question1Display: 'line' })
    }
    handleQuestion2ViewPie = () => {
        this.setState({ question2Display: 'pie' })
    }
    handleQuestion2ViewBar = () => {
        this.setState({ question2Display: 'bar' })
    }
    handleQuestion2ViewLine = () => {
        this.setState({ question2Display: 'line' })
    }
    handleQuestion3ViewPie = () => {
        this.setState({ question3Display: 'pie' })
    }
    handleQuestion3ViewBar = () => {
        this.setState({ question3Display: 'bar' })
    }
    handleQuestion3ViewLine = () => {
        this.setState({ question3Display: 'line' })
    }
    handleQuestion4ViewPie = () => {
        this.setState({ question4Display: 'pie' })
    }
    handleQuestion4ViewBar = () => {
        this.setState({ question4Display: 'bar' })
    }
    handleQuestion4ViewLine = () => {
        this.setState({ question4Display: 'line' })
    }
    handleQuestion5ViewPie = () => {
        this.setState({ question5Display: 'pie' })
    }
    handleQuestion5ViewBar = () => {
        this.setState({ question5Display: 'bar' })
    }
    handleQuestion5ViewLine = () => {
        this.setState({ question5Display: 'line' })
    }
    render(){

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
    if (this.props.giveUltraTable.length !== 0) {
        let surveyResultsSurvey1 = this.props.giveUltraTable.filter(el => el.survey_id === 1)
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

    let ques1ResultsView = () => {
        if(this.state.question1Display === 'pie'){
            return <Pie data={table1MultChoiceQuesOne} />
        } else if(this.state.question1Display === 'bar'){
            return <Bar data={table1MultChoiceQuesOne} />
        } else if(this.state.question1Display === 'line'){
            return <Line data={table1MultChoiceQuesOne} />
        } else {
            return <Pie data={table1MultChoiceQuesOne} />
        }
    }
    let ques2ResultsView = () => {
        if(this.state.question2Display === 'pie'){
            return <Pie data={table2MultChoiceQuesTwo} />
        } else if(this.state.question2Display === 'bar'){
            return <Bar data={table2MultChoiceQuesTwo} />
        } else if(this.state.question2Display === 'line'){
            return <Line data={table2MultChoiceQuesTwo} />
        } else {
            return <Pie data={table2MultChoiceQuesTwo} />
        }
    }
    let ques3ResultsView = () => {
        if(this.state.question3Display === 'pie'){
            return <Pie data={table3Scale5QuesThree} />
        } else if(this.state.question3Display === 'bar'){
            return <Bar data={table3Scale5QuesThree} />
        } else if(this.state.question3Display === 'line'){
            return <Line data={table3Scale5QuesThree} />
        } else {
            return <Bar data={table3Scale5QuesThree} />
        }
    }
    let ques4ResultsView = () => {
        if(this.state.question4Display === 'pie'){
            return   <Pie data={table4Scale5QuesFour} />
        } else if(this.state.question4Display === 'bar'){
            return <Bar data={table4Scale5QuesFour} />
        } else if(this.state.question4Display === 'line'){
            return  <Line data={table4Scale5QuesFour} />
        }else{
            return <Bar data={table4Scale5QuesFour} />
        }
    }
    let ques5ResultsView = () => {
        if(this.state.question5Display === 'pie'){
            return    <Pie data={table5Scale5QuesFive} />
        } else if(this.state.question5Display === 'bar'){
            return    <Bar data={table5Scale5QuesFive} />
        } else if(this.state.question5Display === 'line'){
            return <Line data={table5Scale5QuesFive} />
        }
        else{
            return    <Bar data={table5Scale5QuesFive} />
        }
    }
    return (<div>
        <h1>{survey1Name}</h1><br />
        {survey1Image}<br />
        <h3>Question 1</h3>
        <h3>{questionOneText}</h3>
        {/* <Pie data={table1MultChoiceQuesOne} /> */}
        <button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion1ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion1ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion1ViewLine()}>Line</button>
        {ques1ResultsView()}
        <h3>Question 2</h3>
        <h3>{questionTwoText}</h3>
        <button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion2ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion2ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion2ViewLine()}>Line</button>
        {ques2ResultsView()}
        <h3>Question 3</h3>
        <h3>{questionThreeText}</h3>
        <button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion3ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion3ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion3ViewLine()}>Line</button>
        {ques3ResultsView()}
        <h3>Question 4</h3>
        <h3>{questionFourText}</h3>
        <button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion4ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion4ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion4ViewLine()}>Line</button>
      {ques4ResultsView()}
        <h3>Question 5</h3>
        <h3>{questionFiveText}</h3>
        <button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion5ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion5ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={()=>this.handleQuestion5ViewLine()}>Line</button>
       {ques5ResultsView()}
        <h3>Question 6</h3>
        <h3>{question6Text}</h3>
        <div className={css(st.containerBorder)}>
            {mapResponsesTable}
        </div>
    </div>)
    }
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
        width: '70%'
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
    },
    surveyButtons: {
        width: '50px',
        height: '20px',
        background: 'rgba(0, 204, 255, 0.6)',
        // border: 'none',
        // borderRadius: '5%',
        fontWeight: 'bold',
        color: 'white',
        border: '1px solid rgba(255,99,132,1)',
        transition: '1s all ease',
        boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.4)',
    },
    buttonsHover: {
        ':hover': {
            boxShadow: '2px 6px 4px rgba(0, 204, 255, 0.9)',
            transition: '1s all ease',
        },
    },  
})

export default Survey1ResultsBuild;