const chalk = require('chalk');

module.exports = {
    editUserName: (req, res, next) => {
        const dbInstance = req.app.get('db');
        console.log(req.body)
        dbInstance.update_user_name_by_id([Number(req.params.id), req.body[0]].name).then(userTable => {
            res.status(200).send(userTable)
        }).catch(err => res.status(500).send(err))
    },
    editQuizTableById: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const id = Number(req.params.quizId);
        const data = req.body;
        console.log(chalk.bgGreen.black(data[0]))
        console.log(chalk.bgGreen.black(data[1]))
        console.log(chalk.bgGreen.black('Quiz Id Number: ', id));
        switch (data[0]) {
            case 'title':
                return dbInstance.update_quiz_table_title_by_id([id, data[1]]).then(newQuizInfo => {
                    res.status(200).send(newQuizInfo);
                }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
            case 'description':
                return dbInstance.update_quiz_table_description_by_id([id, data[1]]).then(newQuizInfo => {
                    res.status(200).send(newQuizInfo);
                }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
            case 'start_img':
                return dbInstance.update_quiz_table_start_img_by_id([id, data[1]]).then(newQuizInfo => {
                    res.status(200).send(newQuizInfo);
                }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
            case 'timed':
                return dbInstance.update_quiz_table_timed_by_id([id, data[1]]).then(newQuizInfo => {
                    res.status(200).send(newQuizInfo);
                }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
            default:
                return console.log('Did not understand the action.')
        }
    },
    editQuizQuestionTableById: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const id = Number(req.params.quizId);
        const quesId = Number(req.params.quesId);
        // console.log(chalk.bgGreen.black(id))
        // console.log(chalk.bgGreen.black(quesId))
        // console.log(chalk.bgGreen.black(data[0]))
        // console.log(chalk.bgGreen.black(data[1]))
        const data = req.body;
        switch (data[0]) {
            case 'ques_text':
                return dbInstance.update_quiz_question_table_ques_text([id, quesId, data[1]]).then(newQuizInfo => {
                    res.status(200).send(newQuizInfo);
                }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
            case 'ques_type':
                return dbInstance.update_quiz_question_table_ques_type([id, quesId, data[1]]).then(newQuizInfo => {
                    res.status(200).send(newQuizInfo);
                }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
            case 'ques_img':
                return dbInstance.update_quiz_question_table_ques_img([id, quesId, data[1]]).then(newQuizInfo => {
                    res.status(200).send(newQuizInfo);
                }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
            case 'question_features':
                return dbInstance.update_quiz_question_table_question_features([id, quesId, data[1]]).then(newQuizInfo => {
                    res.status(200).send(newQuizInfo);
                }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
            case 'time_limit':
                return dbInstance.update_quiz_question_table_time_limit([id, quesId, data[1]]).then(newQuizInfo => {
                    res.status(200).send(newQuizInfo);
                }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
            default:
                return console.log('Did not understand the action.')
        }
    },
    editQuestionAnswersTableById: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const id = Number(req.params.quizId);
        const ansId = Number(req.params.ansId);
        // console.log(req.body)
        switch (req.body[0]) {
            case 'ans_text':
                return dbInstance.update_quiz_answers_answer_text([id, ansId, req.body[1]]).then(newQuizInfo => {
                    res.status(200).send(newQuizInfo);
                }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
            case 'ans_img':
                return dbInstance.update_quiz_answers_answer_img([id, ansId, req.body[1]]).then(newQuizInfo => {
                    res.status(200).send(newQuizInfo);
                }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
            default:
                return console.log('Did not understand the action.')
        }
    },
    
}