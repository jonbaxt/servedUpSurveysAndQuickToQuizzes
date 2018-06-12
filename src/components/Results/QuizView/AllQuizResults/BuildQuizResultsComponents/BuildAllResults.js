import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { Pie, 
    // Doughnut, Line, Radar, 
    Bar } from 'react-chartjs-2';

function BuildAllResults(props) {

    // console.log(props);
    // console.log(props.giveTable);
    return (
        <div>
            <h3>Results by user eventually</h3>

            {CreateFirstUserChartForQuiz1(props.giveTable)}

            {/* <Pie data={pieData} /> */}
            {/* <Pie data={data} /> */}
            {/* <Bar data={pieDataMultiTest} /> */}


            {/* <Pie data={pieDataMultiTest} /> */}
            {/* <Doughnut data={radarData} /> */}
            {/* <Pie data={radarData} /> */}
            {/* <Radar data={radarData} /> */}
            {/* <Bar data={bar2Data} />  */}
            {/* <Bar data={data2} /> */}
            {/* <Line data={data} /> */}
        </div>
    )

}

function CreateFirstUserChartForQuiz1(quizResultsUltraJoinedTable) {
    // let surveyTakerIds = quizResultsUltraJoinedTable.map(elem => elem.survey_taker_id).sort().filter((elem, ind, orig) => elem !== orig[ind - 1])
    let quizAnswersThatCanBeCharted = quizResultsUltraJoinedTable.filter(el => el.is_correct !== null)

    let user1Results = quizAnswersThatCanBeCharted.filter(el => el.survey_taker_id === 1 && el.quiz_id === 1).map(el => el.is_correct ? 1 : 0)
    // console.log(user1Results.length)
    // console.log(user1Results)
    let user2Results = quizAnswersThatCanBeCharted.filter(el => el.survey_taker_id === 2 && el.quiz_id === 1).map(el => el.is_correct ? 1 : 0)
    // console.log(user2Results.length)
    // console.log(user2Results)
    let user3Results = quizAnswersThatCanBeCharted.filter(el => el.survey_taker_id === 3 && el.quiz_id === 1).map(el => el.is_correct ? 1 : 0)
    // console.log(user3Results.length)
    // console.log(user3Results)
    let user4Results = quizAnswersThatCanBeCharted.filter(el => el.survey_taker_id === 4 && el.quiz_id === 1).map(el => el.is_correct ? 1 : 0)
    // console.log(user4Results.length)
    // console.log(user4Results)
    let user5Results = quizAnswersThatCanBeCharted.filter(el => el.survey_taker_id === 5 && el.quiz_id === 1).map(el => el.is_correct ? 1 : 0)
    // console.log(user5Results.length)
    // console.log(user5Results)
    let user6Results = quizAnswersThatCanBeCharted.filter(el => el.survey_taker_id === 6 && el.quiz_id === 1).map(el => el.is_correct ? 1 : 0)
    // console.log(user6Results.length)
    // console.log(user6Results)
    let user7Results = quizAnswersThatCanBeCharted.filter(el => el.survey_taker_id === 7 && el.quiz_id === 1).map(el => el.is_correct ? 1 : 0)
    // console.log(user7Results.length)
    // console.log(user7Results)
    let user9Results = quizAnswersThatCanBeCharted.filter(el => el.survey_taker_id === 9 && el.quiz_id === 1).map(el => el.is_correct ? 1 : 0)
    // console.log(user9Results.length)
    // console.log(user9Results)

    let surveyTakerNames = quizResultsUltraJoinedTable.map(elem => elem.user_name)
        .filter((elem, ind, orig) => elem !== orig[ind - 1])

    let chartingFirst = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '9', '10'],
        datasets: [
            {
                label: surveyTakerNames[0],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: user1Results
            },
            {
                label: surveyTakerNames[1],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: user2Results
            },
            {
                label: surveyTakerNames[2],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: user3Results
            },
            {
                label: surveyTakerNames[3],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: user4Results
            },
            {
                label: surveyTakerNames[4],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: user5Results
            },
            {
                label: surveyTakerNames[5],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: user6Results
            },
            {
                label: surveyTakerNames[6],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: user7Results
            },
            {
                label: surveyTakerNames[7],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: user9Results
            }

        ]
    }

    return (
        <div>

            <button onClick={() => console.log('Clicked Pie')}>Pie</button>
            <button onClick={() => console.log('Clicked Bar')}>Bar</button>
            <button onClick={() => console.log('Clicked Doughnut')}>Doughnut</button>
            <button onClick={() => console.log('Clicked Radar')}>Radar</button>
            <button onClick={() => console.log('Clicked Line')}>Line</button>
            <Pie className={css(onClickStyles.pieClick)} data={chartingFirst} /> 
            <Bar className={css(onClickStyles.barClick)} data={chartingFirst} />
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

const styles = StyleSheet.create({
    mainBoxForQuizDone: {
        width: '100%',
        height: '100%'
    },
    buttonClickArea: {
        margin: '2px',
        width: '60px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid 1px blue',
        background: 'lightblue',
        color: 'white',
        textDecoration: 'none'
    },
    noLine: {
        textDecoration: 'none'
    },
    chartTextColorMatch: {
        color: 'rgba(255,99,132,1)'
    },
    lessPinkText: {
        color: 'rgba(255,99,120,0.9)'
    },
    leastPinkText: {
        color: 'rgba(255,99,105,0.8)'
    },
    texCent: {
        textAlign: 'center'
    },
    fontSizMid: {
        fontSize: `15px`
    },
    fontSizSmall: {
        fontSize: '12px'
    },
    pinkBorder: {
        border: 'solid 1px rgba(255,99,132,1)'
    },
    marIndLeft: {
        marginLeft: '20px'
    },
    boxAreaUserTextResponses: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        marginTop: '10px'
    },
    picSize: {
        width: '100%',
        height: '100%'
    }
});


export default BuildAllResults;