export default function BuildCharts(quizResults, numberOfQuestions){
    let chartingTotal = {};
    if( numberOfQuestions === 2){
        chartingTotal = {
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
                    data: quizResults
                }
            ]
        }
    }
    else if( numberOfQuestions === 4){
        chartingTotal = {
            labels: ['Ques #1', 'Ques #2', 'Ques #3', 'Ques #4'],
            datasets: [
                {
                    label: 'Total Results Correct By Question',
                    backgroundColor: ['red', 'green'],
                    // backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    // pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    // pointHoverBackgroundColor: '#fff',
                    // pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: quizResults
                }
            ]
        }
    }
    else if(numberOfQuestions === 9){
         chartingTotal = {
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
                    data: quizResults
                }
            ]
        }
    } else {
        chartingTotal = {
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
                    data: [1, 2, 3, 4]
                }
            ]
        }
    }

    return chartingTotal;
}