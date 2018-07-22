const chalk = require('chalk');

module.exports = {
    deleteUserById: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_user_by_id([Number(req.params.id)]).then(userTableReturn => {
            res.status(200).send(userTableReturn)
        }).catch(err => res.status(500).send(err))
    },
    deleteQuizById: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const id = Number(req.params.quizId);
        dbInstance.delete_quiz_by_id([id]).then(quizDeleted => {
            res.status(200).send(quizDeleted);
        }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
    },
    
}