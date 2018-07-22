const chalk = require('chalk');

module.exports = {
    findTheSurveyUser: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const id = req.params.id
        // console.log(chalk.bgRed.black(req.params.id))

        dbInstance.find_session_user([id]).then(sessionUser => {
            res.status(200).send(sessionUser);
        }).catch(err => { console.log(err) })
    },
    getSurveyUsersTable: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.Get_Survey_Users_Table().then((users) => {
            res.status(200).send(users);
        }).catch((errrrrrrr) => { console.log(`DID NOT GET THE SURVEY USERS FROM DATABASE`, errrrrrrr) })
    },
    getSurveyAdmins: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.Get_All_Admins().then((users) => {
            res.status(200).send(users);
        }).catch((errrrrrrr) => { console.log(`DID NOT GET THE SURVEY USERS FROM DATABASE`, errrrrrrr) })
    },

}