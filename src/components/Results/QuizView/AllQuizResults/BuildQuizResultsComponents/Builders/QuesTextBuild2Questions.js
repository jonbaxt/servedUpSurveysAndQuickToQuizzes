export default function QuesTextBuild2Questions(quizAnswersThatCanBeCharted, quizId){
    let quizQuestionText = [
        '#1: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#2: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1])
    ]
    return quizQuestionText;
}