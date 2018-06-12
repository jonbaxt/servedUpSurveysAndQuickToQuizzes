export default function QuesTextBuildQuestions(quizAnswersThatCanBeCharted, quizId, numberOfQuestions){
    let quizQuestionText = '';

    if(numberOfQuestions === 1){
        quizQuestionText = [
            '#1: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1])
        ]
    } else if(numberOfQuestions === 2){
        quizQuestionText = [
            '#1: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#2: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1])
        ]
    } else if(numberOfQuestions === 3){

    }
    else if(numberOfQuestions === 4){

    }
    else if(numberOfQuestions === 5){

    }
    else if(numberOfQuestions === 6){

    }
    else if(numberOfQuestions === 7){

    }
    else if(numberOfQuestions === 8){
        quizQuestionText = [
            '#1: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#2: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#3: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 3).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#4: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 4).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#5: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 5).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#6: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 6).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#7: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 7).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#8: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 9).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            
        ]
    }
    else if(numberOfQuestions === 9){
        quizQuestionText = [
            '#1: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#2: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#3: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 3).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#4: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 4).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#5: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 5).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#6: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 6).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#7: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 7).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#8: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 9).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1])
        ]
    }
    else if(numberOfQuestions === 10){
        quizQuestionText = [
            '#1: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 1).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#2: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 2).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#3: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 3).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#4: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 4).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#5: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 5).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#6: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 6).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#7: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 7).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#8: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 9).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1]),
            '#9: ' + quizAnswersThatCanBeCharted.filter(el => el.quiz_id === quizId && el.ques_num === 10).map(el => el.ques_text).filter((element, index, origin) => element !== origin[index - 1])
        ]
    }


    return quizQuestionText;
}