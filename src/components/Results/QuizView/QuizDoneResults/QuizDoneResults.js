import React, { Component } from 'react';
import axios from 'axios';
import { css, StyleSheet } from 'aphrodite';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Pie,
    // Doughnut, 
    // Line, 
    // Radar, 
    Bar
} from 'react-chartjs-2';

import { getQuizResultsJustPostedAfterQuiz, setCurrentQuizInfo } from '../../../../ducks/reducer';


// import { Bar } from 'react-chartjs-2';
// import axios from 'axios';
// import { getQuizResultsJustPostedAfterQuiz } from '../../../../ducks/reducer';
class QuizDoneResults extends Component {

    componentDidMount() {
        const currentId = Number(this.props.match.params.currentUserId);
        if (this.props.quizResultsFromResultsForUser.length === 0) {
            axios.get(`/api/quizResultsByUser/${currentId}`).then(userQuizResults => {
                this.props.getQuizResultsJustPostedAfterQuiz(userQuizResults.data)
            }).catch(err => console.log('unable to retrieve table for user', err))
        }
        

        // if(){
        axios.get(`/api/quiztaker/getQuizInfo/${this.props.match.params.quizId}`).then((quizInfo) => {
            this.props.setCurrentQuizInfo(quizInfo.data[0])
        })
    // }
}
// }
render() {
    // console.log(this.props.currentQuizInfo)
    // console.log(this.props.currentQuizInfo === {})

    // this.props.quizResultsFromResultsForUser
    let createAChartCorrectTogether = this.props.quizResultsFromResultsForUser.filter((el, ind, orig) => el.quiz_id === Number(this.props.match.params.quizId)).filter(el => el.is_correct !== null).map(el => el.is_correct).sort()
    // .filter( el =>  [el.ques_text] )
    let falseAnswers = createAChartCorrectTogether.filter(el => el === false)
    let correctAnswers = createAChartCorrectTogether.filter(el => el === true)
    let pieData = {
        labels: ['Correct', 'Incorrect'],
        datasets: [
            {
                label: 'Quiz Multiple Choice Results',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [correctAnswers.length, falseAnswers.length]
            }
        ]
    }
    let pieDataMultiTest = {
        labels: ['Correct', 'Incorrect'],
        datasets: [
            {
                label: `${this.props.user.user_name}'s Results`,
                // backgroundColor: [ '#FF6384','#36A2EB','#FFCE56' ],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                // hoverBackgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ],
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [correctAnswers.length, falseAnswers.length]
            },
            {
                label: 'Freds Results',
                backgroundColor: 'rgba(255,99,132,0.6)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.8)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [8, 1]
                // data: [correctAnswers.length, falseAnswers.length]
            },
            {
                label: 'Bobs Results',
                backgroundColor: 'rgba(255,99,126,0.4)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,126,0.6)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [4, 5]
                // data: [correctAnswers.length, falseAnswers.length]
            },
            {
                label: 'Sonics Results',
                backgroundColor: 'rgba(255,96,130,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,96,130,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [9, 0]
                // data: [correctAnswers.length, falseAnswers.length]
            }
        ]
    }
    let nonScoredQues = this.props.quizResultsFromResultsForUser.filter(el => el.quiz_id === Number(this.props.match.params.quizId) && el.is_correct === null)
        .map((el, ind) => {
            return (
                <div key={ind} className={css(styles.boxAreaUserTextResponses, styles.pinkBorder)} >
                    <p className={css(styles.lessPinkText, styles.fontSizMid)}>{el.ques_text}</p>
                    <p className={css(styles.leastPinkText, styles.fontSizSmall, styles.marIndLeft)}>{el.takers_answer}</p>
                </div>
            )
        })
    // console.log('From Props.Match.Params: User Quiz Results All->', this.props.match.params)
    // console.log('From Redux: User Quiz Results All->', this.props.quizResultsFromResultsForUser)

    return (
        <div className={css(styles.mainBoxForQuizDone)} >
            <h2 className={css(styles.texCent)} >{this.props.currentQuizInfo.title}</h2><h2 className={css(styles.texCent)}>Quiz Results</h2>
            <img className={css(styles.picSize)} src={this.props.currentQuizInfo.start_img} alt='' />
            <h3 className={css(styles.chartTextColorMatch, styles.texCent)} >{this.props.user.user_name}`s Quiz Results</h3>
            {/* <h4>{this.props.quizResultsFromResultsForUser}</h4> */}

            <Pie data={pieData} />
            {/* <Pie data={radarData} /> */}
            <h3 className={css(styles.chartTextColorMatch, styles.texCent)} >How everyone did with this Quiz</h3>
            <Bar data={pieDataMultiTest} />


            <h3 className={css(styles.chartTextColorMatch, styles.texCent)} >{this.props.user.user_name}'s Text Responses to quiz </h3>
            {nonScoredQues}


            {/* <Pie data={pieDataMultiTest} /> */}
            {/* <Doughnut data={radarData} /> */}

            {/* <Pie data={radarData} />
                <Radar data={radarData} />
                <Bar data={bar2Data} /> 
                <Bar data={data2} />
                <Line data={data} /> */}

            <Link to='/Dashboard' className={css(styles.buttonClickArea)} >Finished</Link>
        </div>
    )
}
}

/*
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'red',
            borderColor: 'darkred',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const data3 = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const radarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};
*/

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
        // margin: '0 auto'
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
        // color: 'rgba(255,99,132,0.4)'
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
        // height: '100px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        marginTop: '10px'
        // alignItems: 'center'
        // justifyContent: 'center'
    },
    picSize: {
        width: '100%',
        height: '100%'
    }
});
function mapStateToProps(state) {
    return {
        user: { id: state.user.id, user_name: state.user.user_name, img: state.user.img },
        currentQuizInfo: state.currentQuizInfo,
        quizResultsFromResultsForUser: state.quizResultsFromResultsForUser
    }
}
// export default connect(mapStateToProps, { getQuizResultsJustPostedAfterQuiz })(QuizDoneResults);
export default connect(mapStateToProps, { getQuizResultsJustPostedAfterQuiz, setCurrentQuizInfo })(QuizDoneResults);