// import React from 'react';

export default function Scale5Results(surveyScale5Filters, questionNumber){
    let ques1Scale1 = surveyScale5Filters.filter(el => el.ques_num === questionNumber).map(el => { let one = 0; if (el.takers_answer === '1') { one++ } return one }).reduce((prev, curr) => prev + curr)
    let ques1Scale2 = surveyScale5Filters.filter(el => el.ques_num === questionNumber).map(el => {
        let two = 0;
        if (el.takers_answer === '2') {
            two++
        }
        return two
    }).reduce((prev, curr) => prev + curr)

    let ques1Scale3 = surveyScale5Filters.filter(el => el.ques_num === questionNumber).map(el => {
        let three = 0;
        if (el.takers_answer === '3') {
            three++
        }
        return three
    }).reduce((prev, curr) => prev + curr)
    let ques1Scale4 = surveyScale5Filters.filter(el => el.ques_num === questionNumber).map(el => {
        let four = 0;
        if (el.takers_answer === '4') {
            four++
        }
        return four
    }).reduce((prev, curr) => prev + curr)
    let ques1Scale5 = surveyScale5Filters.filter(el => el.ques_num === questionNumber).map(el => {
        let five = 0;
        if (el.takers_answer === '5') {
            five++
        }
        return five
    }).reduce((prev, curr) => prev + curr)
    
    let table1Scale5Ques = {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            label: 'Total Results By Survey Taker Reponses',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [ques1Scale1, ques1Scale2, ques1Scale3, ques1Scale4, ques1Scale5]
        }]
    }

    return table1Scale5Ques;

}

// export default Scale10Results;


        // let one = 0;
        // let two = 0;
        // let three = 0;
        // let four = 0;
        // let five = 0;
        // let six = 0;
        // let seven = 0;
        // let eight = 0;
        // let nine = 0;
        // let ten = 0;
        // if (el.takers_answer === '1') {
        //     one++
        // } else if (el.takers_answer === '2') {
        //     two++
        // } else if (el.takers_answer === '3') {
        //     three++
        // } else if (el.takers_answer === '4') {
        //     four++
        // } else if (el.takers_answer === '5') {
        //     five++
        // }else if (el.takers_answer === '6') {
        //     six++
        // }else if (el.takers_answer === '7') {
        //     seven++
        // } else if (el.takers_answer === '8') {
        //     eight++
        // } else if (el.takers_answer === '9') {
        //     nine++
        // }else if (el.takers_answer === '10') {
        //     ten++
        // }
        // return [one, two, three, four, five, six, seven, eight, nine, ten]