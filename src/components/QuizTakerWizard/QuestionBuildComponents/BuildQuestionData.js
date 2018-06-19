export function handleProp(megaTable, quizId, quesId) {
    let handle = megaTable.filter(arrayValue => arrayValue.quiz_id === Number(quizId) && arrayValue.ques_num === Number(quesId))
    return handle;
}

export function calcQuesCount(megaTable, quizId) {
    let quesNumArray = megaTable.filter(arrayValue => arrayValue.quiz_id === Number(quizId)).map(element => element.ques_num).filter((element, index, origin) => element !== origin[index - 1])
    let quesCount = Math.max(...quesNumArray)
    return quesCount;
}

export function calcQuestionType(megaTable, quizId, quesId) {
    let qType = megaTable.filter(el => el.quiz_id === Number(quizId) && el.ques_num === Number(quesId)).map(el => el.ques_type).filter((el, ind, orig) => el !== orig[ind - 1])
    let qT = qType[0];      //Get the question type for logic statement.
    return qT;
}

export function calcQuizTitle(megaTable, quizId) {
    let currentQuizTitle = megaTable.filter(el => el.quiz_id === Number(quizId)).map(el => el.title).filter((val, ind, orig) => val !== orig[ind - 1])
    let quizTitle = currentQuizTitle[0];    //Quiz Title for display
    return quizTitle
}

export function calcQuesNum(megaTable, quizId, quesId) {
    let currentQuesNum = megaTable.filter(el => el.quiz_id === Number(quizId) && el.ques_num === Number(quesId)).map(el => el.ques_num).filter((val, ind, orig) => val !== orig[ind - 1])
    let questionNumber = currentQuesNum[0]; //Question Number
    return questionNumber;
}

export function calcQuesImage(megaTable, quizId, quesId) {
    let currentQuesImg = megaTable.filter(el => el.quiz_id === Number(quizId) && el.ques_num === Number(quesId)).map(el => el.ques_img).filter((val, ind, orig) => val !== orig[ind - 1])
    let questionImage = currentQuesImg[0]; //Question Image
    return questionImage;
}

export function calcQuesText(megaTable, quizId, quesId) {
    let currentQuesText = megaTable.filter(el => el.quiz_id === Number(quizId) && el.ques_num === Number(quesId)).map(el => el.ques_text).filter((val, ind, orig) => val !== orig[ind - 1])
    let questionText = currentQuesText[0]; //Question Text
    return questionText;
}