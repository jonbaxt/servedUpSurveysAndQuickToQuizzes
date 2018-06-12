export default function QuizResultsBuild(quizAnswersThatCanBeCharted, quizId, numberOfQuestions){
let quizResults = []
if(numberOfQuestions === 1){
    quizResults = [
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal)
    ]
}
if(numberOfQuestions === 2){
    quizResults = [
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal)
    ]
}
else if(numberOfQuestions === 3){
    quizResults = [
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 3).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal)
    ]
}
else if(numberOfQuestions === 4){
    quizResults = [
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 3).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 4).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal)
    ]
}
else if(numberOfQuestions === 5){
    quizResults = [
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 3).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 4).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 5).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal)
    ]
}
else if(numberOfQuestions === 6){
    quizResults = [
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 3).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 4).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 5).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 6).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal)
    ]
}
else if(numberOfQuestions === 7){
    quizResults = [
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 3).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 4).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 5).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 6).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 7).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal)
    ]
}
else if(numberOfQuestions === 9){
    quizResults = [
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 3).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 4).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 5).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 6).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 7).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 9).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal),
        quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 10).map(el => { return el.is_correct ? 1 : 0 }).reduce((acc, curVal) => acc + curVal)
    ]
}

    return quizResults;
}