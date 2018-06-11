export default function MultChoice5Answers(survey3MultipleChoiceQuestions, questionNumber){

    let survey3MulChQuesOneAnswers = survey3MultipleChoiceQuestions.filter(el => el.ques_num === questionNumber).map(el => {
        return el.takers_answer;
    }).sort().filter((el, ind, orig) => el !== orig[ind - 1])

    let surveyMultChoiceQuesAnswersOption1 = survey3MultipleChoiceQuestions.filter(el => el.ques_num === questionNumber).map(el => {
        let choice1 = 0;
        if (el.takers_answer === survey3MulChQuesOneAnswers[0]) {
            choice1++
        }
        return (choice1)
    }).reduce((prev, curr) => prev + curr)
    let surveyMultChoiceQuesAnswersOption2 = survey3MultipleChoiceQuestions.filter(el => el.ques_num === questionNumber).map(el => {
        let choice2 = 0;
        if (el.takers_answer === survey3MulChQuesOneAnswers[1]) {
            choice2++
        }
        return (choice2)
    }).reduce((prev, curr) => prev + curr)
    let surveyMultChoiceQuesAnswersOption3 = survey3MultipleChoiceQuestions.filter(el => el.ques_num === questionNumber).map(el => {
        let choice3 = 0;
        if (el.takers_answer === survey3MulChQuesOneAnswers[2]) {
            choice3++
        }
        return (choice3)
    }).reduce((prev, curr) => prev + curr)

    let table1MultChoiceQuesResults = {
        labels: survey3MulChQuesOneAnswers,
        datasets: [{
            label: 'Total Results By Survey Taker Reponses',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [surveyMultChoiceQuesAnswersOption1, surveyMultChoiceQuesAnswersOption2, surveyMultChoiceQuesAnswersOption3]
        }]
    };

    return table1MultChoiceQuesResults;
}
