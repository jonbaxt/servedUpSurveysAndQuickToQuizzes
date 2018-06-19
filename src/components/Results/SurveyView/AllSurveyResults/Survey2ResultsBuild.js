import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
    Bar, Line,
    Pie
} from 'react-chartjs-2';
import Scale10Results from './SurveyResultsTableBuilders/Scale10Results';

class Survey2ResultBuild extends React.Component {
    constructor() {
        super()
        this.state = {
            question1Display: 'bar',
            question2Display: 'bar',
            question3Display: 'bar',
            question4Dislay: 'bar',
            question5Dislay: 'bar',
            question6Dislay: 'bar',
            question7Dislay: 'bar',
            question8Dislay: 'bar',
            question9Dislay: 'bar',
            question10Dislay: 'bar',
            question11Dislay: 'bar',
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
    handleQuestion6ViewPie = () => {
        this.setState({ question6Display: 'pie' })
    }
    handleQuestion6ViewBar = () => {
        this.setState({ question6Display: 'bar' })
    }
    handleQuestion6ViewLine = () => {
        this.setState({ question6Display: 'line' })
    }
    handleQuestion7ViewPie = () => {
        this.setState({ question7Display: 'pie' })
    }
    handleQuestion7ViewBar = () => {
        this.setState({ question7Display: 'bar' })
    }
    handleQuestion7ViewLine = () => {
        this.setState({ question7Display: 'line' })
    }
    handleQuestion8ViewPie = () => {
        this.setState({ question8Display: 'pie' })
    }
    handleQuestion8ViewBar = () => {
        this.setState({ question8Display: 'bar' })
    }
    handleQuestion8ViewLine = () => {
        this.setState({ question8Display: 'line' })
    }
    handleQuestion9ViewPie = () => {
        this.setState({ question9Display: 'pie' })
    }
    handleQuestion9ViewBar = () => {
        this.setState({ question9Display: 'bar' })
    }
    handleQuestion9ViewLine = () => {
        this.setState({ question9Display: 'line' })
    }
    handleQuestion10ViewPie = () => {
        this.setState({ question10Display: 'pie' })
    }
    handleQuestion10ViewBar = () => {
        this.setState({ question10Display: 'bar' })
    }
    handleQuestion10ViewLine = () => {
        this.setState({ question10Display: 'line' })
    }
    handleQuestion11ViewPie = () => {
        this.setState({ question11Display: 'pie' })
    }
    handleQuestion11ViewBar = () => {
        this.setState({ question11Display: 'bar' })
    }
    handleQuestion11ViewLine = () => {
        this.setState({ question11Display: 'line' })
    }
    render() {
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
        if (this.props.giveUltraTable.length !== 0) {
            let surveyResultsSurvey2 = this.props.giveUltraTable.filter(el => el.survey_id === 2)
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

            mapResponsesTable = survey2TextAreaQuestions.map((el, ind) => {
                return (<div key={ind} className={css(st.responseList)} >
                    <div className={css(st.responseInner)}>
                        <img src={el.taker_img} alt='' className={css(st.littlePic)} />
                        <p className={css(st.shad)}>{el.taker_name}</p>
                    </div>
                    <p className={css(st.shad)}>{el.takers_answer}</p>
                </div>)
            })
        }
        let ques1ResultsView = () => {
            if (this.state.question1Display === 'pie') {
                return <Pie data={table1Scale10Ques1} />
            } else if (this.state.question1Display === 'bar') {
                return <Bar data={table1Scale10Ques1} />
            } else if (this.state.question1Display === 'line') {
                return <Line data={table1Scale10Ques1} />
            } else {
                return <Bar data={table1Scale10Ques1} />
            }
        }
        let ques2ResultsView = () => {
            if (this.state.question2Display === 'pie') {
                return <Pie data={table2Scale10Ques2} />
            } else if (this.state.question2Display === 'bar') {
                return <Bar data={table2Scale10Ques2} />
            } else if (this.state.question2Display === 'line') {
                return <Line data={table2Scale10Ques2} />
            } else {
                return <Bar data={table2Scale10Ques2} />
            }
        }
        let ques3ResultsView = () => {
            if (this.state.question3Display === 'pie') {
                return <Pie data={table3Scale10Ques3} />
            } else if (this.state.question3Display === 'bar') {
                return <Bar data={table3Scale10Ques3} />
            } else if (this.state.question3Display === 'line') {
                return <Line data={table3Scale10Ques3} />
            } else {
                return <Bar data={table3Scale10Ques3} />
            }
        }
        let ques4ResultsView = () => {
            if (this.state.question4Display === 'pie') {
                return <Pie data={table4Scale10Ques4} />
            } else if (this.state.question4Display === 'bar') {
                return <Bar data={table4Scale10Ques4} />
            } else if (this.state.question4Display === 'line') {
                return <Line data={table4Scale10Ques4} />
            } else {
                return <Bar data={table4Scale10Ques4} />
            }
        }
        let ques5ResultsView = () => {
            if (this.state.question5Display === 'pie') {
                return <Pie data={table5Scale10Ques5} />
            } else if (this.state.question5Display === 'bar') {
                return <Bar data={table5Scale10Ques5} />
            } else if (this.state.question5Display === 'line') {
                return <Line data={table5Scale10Ques5} />
            }
            else {
                return <Bar data={table5Scale10Ques5} />
            }
        }
        let ques6ResultsView = () => {
            if (this.state.question6Display === 'pie') {
                return <Pie data={table6Scale10Ques6} />
            } else if (this.state.question6Display === 'bar') {
                return <Bar data={table6Scale10Ques6} />
            } else if (this.state.question6Display === 'line') {
                return <Line data={table6Scale10Ques6} />
            }
            else {
                return <Bar data={table6Scale10Ques6} />
            }
        }
        let ques7ResultsView = () => {
            if (this.state.question7Display === 'pie') {
                return <Pie data={table7Scale10Ques7} />
            } else if (this.state.question7Display === 'bar') {
                return <Bar data={table7Scale10Ques7} />
            } else if (this.state.question7Display === 'line') {
                return <Line data={table7Scale10Ques7} />
            }
            else {
                return <Bar data={table7Scale10Ques7} />
            }
        }
        let ques8ResultsView = () => {
            if (this.state.question8Display === 'pie') {
                return <Pie data={table8Scale10Ques8} />
            } else if (this.state.question8Display === 'bar') {
                return <Bar data={table8Scale10Ques8} />
            } else if (this.state.question8Display === 'line') {
                return <Line data={table8Scale10Ques8} />
            }
            else {
                return <Bar data={table8Scale10Ques8} />
            }
        }
        let ques9ResultsView = () => {
            if (this.state.question9Display === 'pie') {
                return <Pie data={table9Scale10Ques9} />
            } else if (this.state.question9Display === 'bar') {
                return <Bar data={table9Scale10Ques9} />
            } else if (this.state.question9Display === 'line') {
                return <Line data={table9Scale10Ques9} />
            }
            else {
                return <Bar data={table9Scale10Ques9} />
            }
        }
        let ques10ResultsView = () => {
            if (this.state.question10Display === 'pie') {
                return <Pie data={table10Scale10Ques10} />
            } else if (this.state.question10Display === 'bar') {
                return <Bar data={table10Scale10Ques10} />
            } else if (this.state.question10Display === 'line') {
                return <Line data={table10Scale10Ques10} />
            }
            else {
                return <Bar data={table10Scale10Ques10} />
            }
        }
        let ques11ResultsView = () => {
            if (this.state.question11Display === 'pie') {
                return <Pie data={table11Scale10Ques11} />
            } else if (this.state.question11Display === 'bar') {
                return <Bar data={table11Scale10Ques11} />
            } else if (this.state.question11Display === 'line') {
                return <Line data={table11Scale10Ques11} />
            }
            else {
                return <Bar data={table11Scale10Ques11} />
            }
        }


        return (<div>
            <h2 className={css(st.shad)}>{survey2Name}</h2>
            <img src={survey2Image} alt='' className={css(st.picResize)} />
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
            <h3 className={css(st.shad)}>Question 4</h3>
            <h3 className={css(st.shad)}>{question4Text}</h3>
            <button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion4ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion4ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion4ViewLine()}>Line</button>
            {ques4ResultsView()}
            <h3 className={css(st.shad)}>Question 5</h3>
            <h3 className={css(st.shad)}>{question5Text}</h3>
            <button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion5ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion5ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion5ViewLine()}>Line</button>
            {ques5ResultsView()}
            <h3 className={css(st.shad)}>Question 6</h3>
            <h3 className={css(st.shad)}>{question6Text}</h3>
            <button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion6ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion6ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion6ViewLine()}>Line</button>
            {ques6ResultsView()}
            <h3 className={css(st.shad)}>Question 7</h3>
            <h3 className={css(st.shad)}>{question7Text}</h3>
            <button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion7ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion7ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion7ViewLine()}>Line</button>
            {ques7ResultsView()}
            <h3 className={css(st.shad)}>Question 8</h3>
            <h3 className={css(st.shad)}>{question8Text}</h3>
            <button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion8ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion8ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion8ViewLine()}>Line</button>
            {ques8ResultsView()}
            <h3 className={css(st.shad)}>Question 9</h3>
            <h3 className={css(st.shad)}>{question9Text}</h3>
            <button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion9ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion9ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion9ViewLine()}>Line</button>
            {ques9ResultsView()}
            <h3 className={css(st.shad)}>Question 10</h3>
            <h3 className={css(st.shad)}>{question10Text}</h3>
            <button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion10ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion10ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion10ViewLine()}>Line</button>
            {ques10ResultsView()}
            <h3 className={css(st.shad)}>Question 11</h3>
            <h3 className={css(st.shad)}>{question11Text}</h3>
            <button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion11ViewPie()}>Pie</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion11ViewBar()}>Bar</button><button className={css(st.surveyButtons, st.buttonsHover)} onClick={() => this.handleQuestion11ViewLine()}>Line</button>
            {ques11ResultsView()}
            <h3 className={css(st.shad)}>Question 12</h3>
            <h3 className={css(st.shad)}>{question12Text}</h3>
            <div className={css(st.containerBorder)}>
                {mapResponsesTable}
            </div>

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
export default Survey2ResultBuild;