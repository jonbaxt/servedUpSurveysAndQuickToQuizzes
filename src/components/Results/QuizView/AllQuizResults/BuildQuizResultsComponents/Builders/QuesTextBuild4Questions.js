const _ = require('lodash');

export default function QuesTextBuild10Questions(quizAnswersThatCanBeCharted, quizId) {
    let filterToAnswer1 = _.filter(quizAnswersThatCanBeCharted, { is_correct: true, quiz_id: quizId, ques_num: 1 }).map(el => el.takers_answer)
    let findCorrect1 = filterToAnswer1[0];
    let filterToAnswer2 = _.filter(quizAnswersThatCanBeCharted, { is_correct: true, quiz_id: quizId, ques_num: 2 }).map(el => el.takers_answer)
    let findCorrect2 = filterToAnswer2[0];
    let filterToAnswer3 = _.filter(quizAnswersThatCanBeCharted, { is_correct: true, quiz_id: quizId, ques_num: 3 }).map(el => el.takers_answer)
    let findCorrect3 = filterToAnswer3[0];
    let filterToAnswer4 = _.filter(quizAnswersThatCanBeCharted, { is_correct: true, quiz_id: quizId, ques_num: 4 }).map(el => el.takers_answer)
    let findCorrect4 = filterToAnswer4[0];

    let quizQuestionText = [
        '#1: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        'Correct Answer: ' + findCorrect1,
        '#2: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        'Correct Answer: ' + findCorrect2,
        '#3: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 3).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        'Correct Answer: ' + findCorrect3,
        '#4: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 4).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        'Correct Answer: ' + findCorrect4
    ]
    return quizQuestionText;
}