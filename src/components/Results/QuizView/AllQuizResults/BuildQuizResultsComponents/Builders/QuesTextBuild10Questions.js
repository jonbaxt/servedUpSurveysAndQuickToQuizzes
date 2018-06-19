const _ = require('lodash');

export default function QuesTextBuild10Questions(quizAnswersThatCanBeCharted, quizId){
// console.log(quizAnswersThatCanBeCharted)
let filterToAnswer1 = _.filter(quizAnswersThatCanBeCharted, {is_correct: true, quiz_id: quizId, ques_num: 1}).map(el => el.takers_answer)
let findCorrect1 = filterToAnswer1[0];   
let filterToAnswer2 = _.filter(quizAnswersThatCanBeCharted, {is_correct: true, quiz_id: quizId, ques_num: 2}).map(el => el.takers_answer)
let findCorrect2 = filterToAnswer2[0];    
let filterToAnswer3 = _.filter(quizAnswersThatCanBeCharted, {is_correct: true, quiz_id: quizId, ques_num: 3}).map(el => el.takers_answer)
let findCorrect3 = filterToAnswer3[0];    
let filterToAnswer4 = _.filter(quizAnswersThatCanBeCharted, {is_correct: true, quiz_id: quizId, ques_num: 4}).map(el => el.takers_answer)
let findCorrect4 = filterToAnswer4[0];    
let filterToAnswer5 = _.filter(quizAnswersThatCanBeCharted, {is_correct: true, quiz_id: quizId, ques_num: 5}).map(el => el.takers_answer)
let findCorrect5 = filterToAnswer5[0];    
let filterToAnswer6 = _.filter(quizAnswersThatCanBeCharted, {is_correct: true, quiz_id: quizId, ques_num: 6}).map(el => el.takers_answer)
let findCorrect6 = filterToAnswer6[0];    
let filterToAnswer7 = _.filter(quizAnswersThatCanBeCharted, {is_correct: true, quiz_id: quizId, ques_num: 7}).map(el => el.takers_answer)
let findCorrect7 = filterToAnswer7[0];    
let filterToAnswer9 = _.filter(quizAnswersThatCanBeCharted, {is_correct: true, quiz_id: quizId, ques_num: 9}).map(el => el.takers_answer)
let findCorrect9 = filterToAnswer9[0];    
let filterToAnswer10 = _.filter(quizAnswersThatCanBeCharted, {is_correct: true, quiz_id: quizId, ques_num: 10}).map(el => el.takers_answer)
let findCorrect10 = filterToAnswer10[0];    

let quizQuestionText = [
        '#1: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        'Correct Answer: ' + findCorrect1,
        '#2: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        'Correct Answer: ' + findCorrect2,
        '#3: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 3).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        'Correct Answer: ' + findCorrect3,
        '#4: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 4).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        'Correct Answer: ' + findCorrect4,
        '#5: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 5).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        'Correct Answer: ' + findCorrect5,
        '#6: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 6).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        'Correct Answer: ' + findCorrect6,
        '#7: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 7).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        'Correct Answer: ' + findCorrect7,
        '#9: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 9).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        'Correct Answer: ' + findCorrect9,
        '#10: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 10).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
        'Correct Answer: ' + findCorrect10,
    ]
    return quizQuestionText;
}