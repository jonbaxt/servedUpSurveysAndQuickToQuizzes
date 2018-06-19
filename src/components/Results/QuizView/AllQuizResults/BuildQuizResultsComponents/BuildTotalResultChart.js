import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import {
    Pie
    // ,
    // Doughnut, 
    // Line, 
    // Radar, 
    // Bar
} from 'react-chartjs-2';

import TotalQuizTakerBuild from './Builders/TotalQuizTakerBuild';
import QuesTextBuild10Questions from './Builders/QuesTextBuild10Questions';
import QuesTextBuild2Questions from './Builders/QuesTextBuild2Questions';
import QuesTextBuild4Questions from './Builders/QuesTextBuild4Questions';
import QuizResultsBuild from './Builders/QuizResultsBuild';

class BuildTotalResultChart extends React.Component {
    constructor() {
        super()
        this.state = {
            quiz1Display: 'show',
            quiz2Display: 'hide',
            quiz3Display: 'hide',
        }
    }

    handleQuiz1Display = () => {
        this.setState({
            quiz1Display: 'show',
            quiz2Display: 'hide',
            quiz3Display: 'hide',
        })
    }
    handleQuiz2Display = () => {
        this.setState({
            quiz1Display: 'hide',
            quiz2Display: 'show',
            quiz3Display: 'hide',
        })
    }
    handleQuiz3Display = () => {
        this.setState({
            quiz1Display: 'hide',
            quiz2Display: 'hide',
            quiz3Display: 'show',
        })
    }
    render() {
        let quizResultsUltraJoinedTable = this.props.giveTable;
        let quizAnswersThatCanBeCharted = quizResultsUltraJoinedTable.filter(el => el.is_correct !== null)
        let mapQuizTitles = quizResultsUltraJoinedTable.map(el => el.title).sort()
            .filter((elem, ind, orig) => elem !== orig[ind - 1])
        let quiz1Title = mapQuizTitles[2]
        let quiz2Title = mapQuizTitles[1]
        let quiz3Title = mapQuizTitles[0]
        let totalSurveyTakersQuiz1 = TotalQuizTakerBuild(quizResultsUltraJoinedTable, 1);
        let totalSurveyTakersQuiz2 = TotalQuizTakerBuild(quizResultsUltraJoinedTable, 2);
        let totalSurveyTakersQuiz3 = TotalQuizTakerBuild(quizResultsUltraJoinedTable, 3);
        let quiz1QuestionText = QuesTextBuild10Questions(quizAnswersThatCanBeCharted, 1);
        let quiz2QuestionText = QuesTextBuild2Questions(quizAnswersThatCanBeCharted, 2);
        let quiz3QuestionText = QuesTextBuild4Questions(quizAnswersThatCanBeCharted, 3);

        // let surveyTakerNames = quizResultsUltraJoinedTable.map(elem => elem.user_name)
        //     .filter((elem, ind, orig) => elem !== orig[ind - 1])
        let quiz1Results = []
        let quiz2Results = []
        let quiz3Results = []
        let chartingTotal = {
            labels: ['Ques #1', 'Ques #2', 'Ques #3', 'Ques #4', 'Ques #5', 'Ques #6', 'Ques #7', 'Ques #9', 'Ques #10'],
            datasets: [{
                label: 'Total Results Correct By Question',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: ['rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)'],
                data: [1, 2, 3, 4, 5, 6, 7, 9, 10]}]
        }
        let chartingTotalQuiz2 = {
            labels: ['Ques #1'], datasets: [{
                label: 'Total Results Correct By Question',
                backgroundColor: ['red', 'green'],
                // backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                data: [1]
            }]
        }
        let chartingTotalQuiz3 = {
            labels: ['Ques #1'], datasets: [{
                label: 'Total Results Correct By Question',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                data: [1]
            }]
        }
        if (quizAnswersThatCanBeCharted.length !== 0) {
            quiz1Results = QuizResultsBuild(quizAnswersThatCanBeCharted, 1, 9);
            quiz2Results = QuizResultsBuild(quizAnswersThatCanBeCharted, 2, 2);
            quiz3Results = QuizResultsBuild(quizAnswersThatCanBeCharted, 3, 4);
            chartingTotal = {
                labels: ['Ques #1', 'Ques #2', 'Ques #3', 'Ques #4', 'Ques #5', 'Ques #6', 'Ques #7', 'Ques #9', 'Ques #10'],
                datasets: [{
                        label: 'Total Results Correct By Question',
                        backgroundColor: ['	rgba(255,0,0.4)', 'rgba(0,128,0, 0.4)', 
                        'rgba(255, 255, 102, 0.4)', 'rgba(255, 102, 255, 0.4)', 'rgba(255, 178, 102, 0.4)', 'rgba(0, 0, 255, 0.4)', 'rgba(102, 0, 102, 0.4)','rgba(153, 76, 0, 0.4)','rgba(0, 102, 102, 0.4)'],
                        pointBackgroundColor: ['rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)','rgba(255,99,132,1)' ], 
                        data: quiz1Results}]
            }
            chartingTotalQuiz2 = {
                labels: ['Ques #1', 'Ques #2'],
                datasets: [{
                        label: 'Total Results Correct By Question',
                        backgroundColor: ['	rgba(255,0,0.4)', 'rgba(0,128,0, 0.4)'],
                        data: quiz2Results}]
            }
            chartingTotalQuiz3 = {
                labels: ['Ques #1', 'Ques #2', 'Ques #3', 'Ques #4'],
                datasets: [{
                        label: 'Total Results Correct By Question',
                        backgroundColor: ['	rgba(255,0,0.4)', 'rgba(0,128,0, 0.4)', 'rgba(255, 255, 102, 0.4)', 'rgba(255, 102, 255, 0.4)'],
                        data: quiz3Results}]
            }
        }
        let mapQuiz1Questions = quiz1QuestionText.map((el, index) => {
            return (
                <div key={index}>
                    <p className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.blackText)} >{el}</p>
                    <br />
                </div>
            )
        })
        let mapQuiz2Questions = quiz2QuestionText.map((el, index) => {
            return (
                <div key={index}>
                    <p className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.blackText)} >{el}</p>
                    <br />
                </div>
            )
        })
        let mapQuiz3Questions = quiz3QuestionText.map((el, index) => {
            return (
                <div key={index}>
                    <p className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.blackText)} >{el}</p>
                    <br />
                </div>
            )
        })

        let quizSwitch = () => {
            if (this.state.quiz1Display === 'show') {
                return (<div><br />
                    <h3 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.textCen, Styles.shadow)}>Quiz: {quiz1Title}</h3>
                    <h3 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.textCen, Styles.shadow)}>How many have taken quiz: {totalSurveyTakersQuiz1}</h3>
                    <Pie className={css(onClickStyles.pieClick)} data={chartingTotal} />
                    {/* <Bar className={css(onClickStyles.pieClick)} data={chartingTotal}/>
                    <Line className={css(onClickStyles.pieClick)} data={chartingTotal} /> */}
                    <h3 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.textCen, Styles.blackText)}>Questions</h3>
                    {mapQuiz1Questions}
                </div>)
            } else if (this.state.quiz2Display === 'show') {
                return (<div><br />
                    <h3 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.textCen, Styles.shadow)} >Quiz: {quiz2Title}</h3>
                    <p className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.textCen, Styles.shadow)}>How many have taken quiz: {totalSurveyTakersQuiz2}</p>
                    <Pie className={css(onClickStyles.pieClick)} data={chartingTotalQuiz2} />
                    <h3 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.textCen, Styles.blackText)}>Questions</h3>
                    {mapQuiz2Questions}
                </div>)
            } else if (this.state.quiz3Display === 'show') {
                return (<div><br />
                    <h3 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.textCen, Styles.shadow)}>Quiz: {quiz3Title}</h3>
                    <p className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.textCen, Styles.shadow)}>How many have taken quiz: {totalSurveyTakersQuiz3}</p>
                    <Pie className={css(onClickStyles.pieClick)} data={chartingTotalQuiz3} />
                    <h3 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.textCen, Styles.blackText)}>Questions</h3>
                    {mapQuiz3Questions}
                </div>)
            } else {
                return (<div><br />
                    <h3 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.textCen, Styles.shadow)}>Quiz: {quiz1Title}</h3>
                    <h3 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.textCen, Styles.shadow)}>How many have taken quiz: {totalSurveyTakersQuiz1}</h3>
                    <Pie className={css(onClickStyles.pieClick)} data={chartingTotal} />
                    <h3 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.textCen)}>Questions</h3>
                    {mapQuiz1Questions}
                </div>)
            }
        }
        return (
            <div><br />
                <h3 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid, Styles.shadow)}>Charts Display The number of users who each got the right answer by question.</h3><br />
                <div className={css(Styles.mar0)} >
                    <button className={css(Styles.surveyButtons, Styles.buttonsHover)} onClick={() => this.handleQuiz1Display()}>Quiz 1</button><button className={css(Styles.surveyButtons, Styles.buttonsHover)} onClick={() => this.handleQuiz2Display()} >Quiz 2</button><button className={css(Styles.surveyButtons, Styles.buttonsHover)} onClick={() => this.handleQuiz3Display()} >Quiz 3</button></div>
                {quizSwitch()}
            </div>
        )
    }
}



const onClickStyles = StyleSheet.create({
    pieClick: {
        display: 'block'
    },
    barClick: {
        display: 'block'
    }
})

const Styles = StyleSheet.create({
    shadow: {
        textShadow: '1px 1px 2px #3300CC',
    },
    blackText: {
        color: 'black',
    },
    mar0: {
        display: 'flex',
        justifyContent: 'center'
        // margin:'0 auto'
    },
    textCen: {
        textAlign: 'center',
    },
    tabletSizeFontMid: {
        '@media (min-width: 490px)': {
            fontSize: '15px'
        }
    },
    tabletSizeFontSmall: {
        '@media (min-width: 490px)': {
            fontSize: '14px'
        }
    },
    smallLaptopSizeFontMid: {
        '@media (min-width: 700px)': {
            fontSize: '20px'
        }
    },
    smallLaptopSizeFontSmall: {
        '@media (min-width: 700px)': {
            fontSize: '18px'
        }
    },
    tabletSizeButton: {
        '@media (min-width: 490px)': {
            width: '130px',
            height: '110px',
            fontSize: '35px'
        },
        fontSizMid: {
            fontSize: `15px`
        },
        fontSizSmall: {
            fontSize: '12px'
        },
    },
    smallLaptopSizeButton: {
        '@media (min-width: 700px)': {
            width: '160x',
            height: '110px',
            fontSize: '45px'
        }
    },
    surveyButtons: {
        width: '90px',
        height: '40px',
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
});

export default BuildTotalResultChart;