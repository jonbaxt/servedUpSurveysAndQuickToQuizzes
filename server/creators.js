const chalk = require('chalk');

function oneArray(multiArray) {
    let newArray = []
    for (var key in multiArray) {
        for (var i = 0; i < multiArray[0].length; i++) {
            newArray.push(multiArray[key][i])
        }
    }
    return newArray;
}

module.exports = {
    postNewQuiz: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const data = req.body;
        // console.log(data.Title);
        dbInstance.Post_New_Quiz([data.Title, data.Description, data.Start_Img, data.Timed, Number(data.Quiz_Owner)]).then(newQuizReturn => {
            console.log(newQuizReturn)
            req.session.current_quiz =  newQuizReturn;
            console.log(req.session);
            res.status(200).send(newQuizReturn);
        }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
    },
    //FIXME: Not used yet.
    createNewQuizQuestionTemplate: (req, res) => {
        const dbInstance = req.app.get('db');
        //Need to make index.js app.post for this as well as get quiz_id = $1 and ques_num = $2.
        const quiz_id = Number(req.params.quizId);
        const ques_num = Number(req.body.quesNum);
        
        dbInstance.create_quiz_question_template([quiz_id, ques_num]).then(results => {
            res.status(200).send();
        }).catch(err => { console.log(`Could not create new question`, err)});
    },
    createNewQuizAnswerTemplate: (req, res) => {
        const dbInstance = req.app.get('db');
        //Need to make index.js app.post for this as well as get quiz_ques_id = $1 and ans_num = $2.
        const quiz_id = Number(req.params.quizId);
        const quiz_ques_id = Number(req.params.quizQuesId);
        const answer_num = Number(req.params.ansNum);
        
        dbInstance.create_quiz_answer_template([quiz_id, quiz_ques_id, answer_num]).then(results => { 
            res.status(200).send(results);
        }).catch(err => console.log(`Could not create new answer template`, err));
    },
    postToQuizResults: (req, res, next) => {
        const dbInstance = req.app.get('db');

        let NumberOfAnswers = req.body.length;
        let createMapOfAllVars = req.body.map(el => { return [el.Quiz_Ques_Id, el.Answer_Id, el.Takers_Answer, el.Taken_Count, el.Survey_Taker_Id] })
        let allTogether = oneArray(createMapOfAllVars)
        //After all answers have been compiled, depending on how many answers there are will send them at the same time using a different sql command adding another line of values to be added to the quiz results table. The purpose of this is to make the axios post more efficient and not do multiple posts, but one singular post to submit the whole quiz answers at once. Currently can only handle an array of answers up to 20 for a quiz so far.
        switch (NumberOfAnswers) {
            case 1:
                dbInstance.PostQResAns1(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 2:
                dbInstance.PostQResAns2(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 3:
                dbInstance.PostQResAns3(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 4:
                dbInstance.PostQResAns4(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 5:
                dbInstance.PostQResAns5(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 6:
                dbInstance.PostQResAns6(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 7:
                dbInstance.PostQResAns7(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 8:
                dbInstance.PostQResAns8(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 9:
                dbInstance.PostQResAns9(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 10:
                dbInstance.PostQResAns10(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 11:
                dbInstance.PostQResAns11(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 12:
                dbInstance.PostQResAns12(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 13:
                dbInstance.PostQResAns13(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 14:
                dbInstance.PostQResAns14(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 15:
                dbInstance.PostQResAns15(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 16:
                dbInstance.PostQResAns16(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 17:
                dbInstance.PostQResAns17(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 18:
                dbInstance.PostQResAns18(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 19:
                dbInstance.PostQResAns19(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 20:
                dbInstance.PostQResAns20(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            default:
                console.log('I am nothing')
        }
    },
    postToSurveyResults: (req, res, next) => {
        const dbInstance = req.app.get('db');

        let NumberOfAnswers = req.body.length;
        console.log(NumberOfAnswers)
        let createMapOfAllVars = req.body.map(el => { return [el.Survey_Ques_Id, el.Answer_Id, el.Takers_Answer, el.Taken_Count, el.Survey_Taker_Id] })
        let allTogether = oneArray(createMapOfAllVars)
        //After all answers have been compiled, depending on how many answers there are will send them at the same time using a different sql command adding another line of values to be added to the quiz results table. The purpose of this is to make the axios post more efficient and not do multiple posts, but one singular post to submit the whole quiz answers at once. Currently can only handle an array of answers up to 20 for a quiz so far.
        switch (NumberOfAnswers) {
            case 1:
                dbInstance.PostSResAns1(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 2:
                dbInstance.PostSResAns2(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 3:
                dbInstance.PostSResAns3(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 4:
                dbInstance.PostSResAns4(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 5:
                dbInstance.PostSResAns5(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 6:
                dbInstance.PostSResAns6(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 7:
                dbInstance.PostSResAns7(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 8:
                dbInstance.PostSResAns8(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 9:
                dbInstance.PostSResAns9(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 10:
                dbInstance.PostSResAns10(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 11:
                dbInstance.PostSResAns11(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 12:
                dbInstance.PostSResAns12(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 13:
                dbInstance.PostSResAns13(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 14:
                dbInstance.PostSResAns14(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 15:
                dbInstance.PostSResAns15(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 16:
                dbInstance.PostSResAns16(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 17:
                dbInstance.PostSResAns17(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 18:
                dbInstance.PostSResAns18(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 19:
                dbInstance.PostSResAns19(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            case 20:
                dbInstance.PostSResAns20(allTogether).then(result => { res.status(200).send(result); }).catch(err => console.log(err));
                break;
            default:
                console.log('I am nothing')
        }
    },

}