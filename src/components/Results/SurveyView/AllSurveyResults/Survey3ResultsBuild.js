import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
    Bar, Line,
    Pie
} from 'react-chartjs-2';

import MultChoice5Answers from './SurveyResultsTableBuilders/MultChoice5Answers';
import MultChoice3Answers from './SurveyResultsTableBuilders/MultChoice3Answers';

class Survey3ResultBuild extends React.Component {
    constructor() {
        super()
        this.state = {
            question1Display: 'pie',
            question2Display: 'pie',
            question3Display: 'pie',
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


    render() {
        let table1 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
        let table2 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
        let table3 = { labels: ['Ques #1'], datasets: [{ label: 'Total', backgroundColor: 'rgba(255,99,132,0.2)', data: [0] }] };
        let survey3Name = '';
        let survey3Image = '';
        let question1Text = '';
        let question2Text = '';
        let question3Text = '';
        if (this.props.giveUltraTable.length !== 0) {
            let surveyResultsSurvey3 = this.props.giveUltraTable.filter(el => el.survey_id === 3)
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
        let ques1ResultsView = () => {
            if (this.state.question1Display === 'pie') {
                return <Pie data={table1} />
            } else if (this.state.question1Display === 'bar') {
                return <Bar data={table1} />
            } else if (this.state.question1Display === 'line') {
                return <Line data={table1} />
            } else {
                return <Bar data={table1} />
            }
        }
        let ques2ResultsView = () => {
            if (this.state.question2Display === 'pie') {
                return <Pie data={table2} />
            } else if (this.state.question2Display === 'bar') {
                return <Bar data={table2} />
            } else if (this.state.question2Display === 'line') {
                return <Line data={table2} />
            } else {
                return <Bar data={table2} />
            }
        }
        let ques3ResultsView = () => {
            if (this.state.question3Display === 'pie') {
                return <Pie data={table3} />
            } else if (this.state.question3Display === 'bar') {
                return <Bar data={table3} />
            } else if (this.state.question3Display === 'line') {
                return <Line data={table3} />
            } else {
                return <Bar data={table3} />
            }
        }
        return (<div>
            <h2 className={css(st.shad)}>{survey3Name}</h2>
            {survey3Image}
            <h3 className={css(st.shad)}>Question 1</h3>
            <h3 className={css(st.shad)}>{question1Text}</h3>
            <button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion1ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion1ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion1ViewLine()}>Line</button>
            {ques1ResultsView()}
            <h3 className={css(st.shad)}>Question 2</h3>
            <h3 className={css(st.shad)}>{question2Text}</h3>
            <button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion2ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion2ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion2ViewLine()}>Line</button>
            {ques2ResultsView()}
            <h3 className={css(st.shad)}>Question 3</h3>
            <h3 className={css(st.shad)}>{question3Text}</h3>
            <button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion3ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion3ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion3ViewLine()}>Line</button>
            {ques3ResultsView()}
        </div>)
    }
}
const st = StyleSheet.create({
    shad: {
        textShadow: '1px 1px 2px #3300CC',
    },
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
export default Survey3ResultBuild;