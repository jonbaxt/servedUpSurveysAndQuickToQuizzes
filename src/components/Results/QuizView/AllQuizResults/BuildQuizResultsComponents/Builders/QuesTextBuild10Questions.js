export default function QuesTextBuild10Questions(quizAnswersThatCanBeCharted, quizId){
    let quizQuestionText = [
        '#1: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#2: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#3: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 3).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#4: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 4).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#5: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 5).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#6: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 6).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#7: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 7).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#9: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 9).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        '#10: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 10).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1])
    ]
    return quizQuestionText;
}