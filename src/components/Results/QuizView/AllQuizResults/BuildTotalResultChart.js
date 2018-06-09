import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import {
    Pie
    // ,
    // Doughnut, Line, Radar, 
    // Bar
} from 'react-chartjs-2';

function BuildTotalResultsChart(props) {
    // console.log(props);
    // console.log(props.giveTable);
    return (
        <div>
            <h3 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid)}>Results by Totals By Question</h3>

            {CreateTotalChart(props.giveTable)}
        </div>
    )

}

function CreateTotalChart(quizResultsUltraJoinedTable) {
    let quizAnswersThatCanBeCharted = quizResultsUltraJoinedTable.filter(el => el.is_correct !== null)
    let mapQuizTitles = quizResultsUltraJoinedTable.map(el => el.title).sort()
        .filter((elem, ind, orig) => elem !== orig[ind - 1])
    let quiz1Title = mapQuizTitles[2]
    let quiz2Title = mapQuizTitles[1]
    let quiz3Title = mapQuizTitles[0]
    let totalSurveyTakersQuiz1 = quizResultsUltraJoinedTable.filter(el => el.quiz_id === 1).map(elem => elem.survey_taker_id).sort().filter((elem, ind, orig) => elem !== orig[ind - 1]).length
    let totalSurveyTakersQuiz2 = quizResultsUltraJoinedTable.filter(el => el.quiz_id === 2).map(elem => elem.survey_taker_id).sort().filter((elem, ind, orig) => elem !== orig[ind - 1]).length
    let totalSurveyTakersQuiz3 = quizResultsUltraJoinedTable.filter(el => el.quiz_id === 3).map(elem => elem.survey_taker_id).sort().filter((elem, ind, orig) => elem !== orig[ind - 1]).length
    let quiz1QuestionText = [
        '#1: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 1).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#2: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 2).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#3: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 3).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#4: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 4).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#5: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 5).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#6: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 6).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#7: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 7).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#9: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 9).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#10: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 10).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1])
    ]
    let quiz2QuestionText = [
        '#1: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 2 && el.ques_num === 1).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#2: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 2 && el.ques_num === 2).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1])
    ]
    let quiz3QuestionText = [
        '#1: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 3 && el.ques_num === 1).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#2: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 3 && el.ques_num === 2).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#3: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 3 && el.ques_num === 3).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#4: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 3 && el.ques_num === 4).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1])
    ]
    // let surveyTakerNames = quizResultsUltraJoinedTable.map(elem => elem.user_name)
    //     .filter((elem, ind, orig) => elem !== orig[ind - 1])
    let quiz1Results = []
    if (quizAnswersThatCanBeCharted.length !== 0) {
        quiz1Results = [
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 1).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 2).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 3).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 4).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 5).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 6).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 7).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 9).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 1 && el.ques_num === 10).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal)
        ]
    }
    let quiz2Results = []
    if (quizAnswersThatCanBeCharted.length !== 0) {
        quiz2Results = [
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 2 && el.ques_num === 1).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 2 && el.ques_num === 2).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal)
        ]
    }
    let quiz3Results = []
    if (quizAnswersThatCanBeCharted.length !== 0) {
        quiz3Results = [
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 3 && el.ques_num === 1).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 3 && el.ques_num === 2).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 3 && el.ques_num === 3).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
            quizAnswersThatCanBeCharted.filter(el => el.quiz_id === 3 && el.ques_num === 4).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal)
        ]
    }
    let chartingTotal = {
        labels: ['Ques #1', 'Ques #2', 'Ques #3', 'Ques #4', 'Ques #5', 'Ques #6', 'Ques #7', 'Ques #9', 'Ques #10'],
        datasets: [
            {
                label: 'Total Results Correct By Question',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: quiz1Results
            }
        ]
    }
    let chartingTotalQuiz2 = {
        labels: ['Ques #1', 'Ques #2'],
        datasets: [
            {
                label: 'Total Results Correct By Question',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: quiz2Results
            }
        ]
    }
    let chartingTotalQuiz3 = {
        labels: ['Ques #1', 'Ques #2', 'Ques #3', 'Ques #4'],
        datasets: [
            {
                label: 'Total Results Correct By Question',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: quiz3Results
            }
        ]
    }
    let mapQuiz1Questions = quiz1QuestionText.map((el, index) => {
        return (
            <div key={index}>
                <p className={css(Styles.tabletSizeFontSmall, Styles.smallLaptopSizeFontSmall)} >{el}</p>
                <br />
            </div>
        )
    })
    let mapQuiz2Questions = quiz2QuestionText.map((el, index) => {
        return (
            <div key={index}>
                <p className={css(Styles.tabletSizeFontSmall, Styles.smallLaptopSizeFontSmall)} >{el}</p>
                <br />
            </div>
        )
    })
    let mapQuiz3Questions = quiz3QuestionText.map((el, index) => {
        return (
            <div key={index}>
                <p className={css(Styles.tabletSizeFontSmall, Styles.smallLaptopSizeFontSmall)} >{el}</p>
                <br />
            </div>
        )
    })
    return (
        <div>
            <h1 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid)}>Quiz: {quiz1Title}</h1>
            <p className={css(Styles.tabletSizeFontSmall, Styles.smallLaptopSizeFontSmall)}>How many have taken quiz: {totalSurveyTakersQuiz1}</p>
            <h3 className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid)}>Questions</h3>
            {mapQuiz1Questions}
            <Pie className={css(onClickStyles.pieClick)} data={chartingTotal} />
            {/* <Bar className={css(onClickStyles.barClick)} data={chartingTotal} /> */}
            <h1  className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid)} >Quiz: {quiz2Title}</h1>
            <p className={css(Styles.tabletSizeFontSmall, Styles.smallLaptopSizeFontSmall)}>How many have taken quiz: {totalSurveyTakersQuiz2}</p>
            <h3  className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid)}>Questions</h3>
            {mapQuiz2Questions}
            <Pie className={css(onClickStyles.pieClick)} data={chartingTotalQuiz2} />
            <h1  className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid)}>Quiz: {quiz3Title}</h1>
            <p className={css(Styles.tabletSizeFontSmall, Styles.smallLaptopSizeFontSmall)}>How many have taken quiz: {totalSurveyTakersQuiz3}</p>
            <h3  className={css(Styles.tabletSizeFontMid, Styles.smallLaptopSizeFontMid)}>Questions</h3>
            {mapQuiz3Questions}
            <Pie className={css(onClickStyles.pieClick)} data={chartingTotalQuiz3} />
            
            {/* <button onClick={() => console.log('Clicked Pie')}>Pie</button>
            <button onClick={() => console.log('Clicked Bar')}>Bar</button>
            <button onClick={() => console.log('Clicked Doughnut')}>Doughnut</button>
            <button onClick={() => console.log('Clicked Radar')}>Radar</button>
            <button onClick={() => console.log('Clicked Line')}>Line</button> */}
        </div>
    )

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
    tabletSizeFontMid: {
        '@media (min-width: 490px)': {
            fontSize: '40px'
        }
    },
    tabletSizeFontSmall: {
        '@media (min-width: 490px)': {
            fontSize: '30px'
        }
    },
    smallLaptopSizeFontMid: {
        '@media (min-width: 700px)': {
            fontSize: '60px'
        }
    },
    smallLaptopSizeFontSmall: {
        '@media (min-width: 700px)': {
            fontSize: '40px'
        }
    },
    tabletSizeButton: {
        '@media (min-width: 490px)': {
            width: '130px',
            height:  '110px',
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
});

export default BuildTotalResultsChart;