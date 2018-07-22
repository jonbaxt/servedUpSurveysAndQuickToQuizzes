const chalk = require('chalk');

module.exports = {
    // For getting quiz table list for dashboard
    fetchAllQuizzesList: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.Get_All_Available_Quizzes().then(quizTable => {
            res.status(200).send(quizTable);
        }).catch(err => console.log(`Quiz Table Failed Upon Retrieving`, err))
    },
    fetchAllSurveysList: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.Get_All_Available_Surveys().then(surveyTable => {
            res.status(200).send(surveyTable);
        }).catch(err => console.log(`Quiz Table Failed Upon Retrieving`, err))
    },
    getQuizStartInformation: (req, res, next) => {
        const dbInstance = req.app.get('db');
        // console.log(req.params.quizId);
        dbInstance.Get_Quiz_Start_Details([Number(req.params.quizId)]).then(quizInfo => {
            // console.log( quizInfo)
            res.status(200).send(quizInfo);
        }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
    },
    getQuizQuestionsStartInformation: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.Get_Quiz_Question_Start_Details([Number(req.params.quizId)]).then(quizInfo => {
            // console.log( quizInfo)
            res.status(200).send(quizInfo);
        }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
    },
    getQuizAnswersStartInformation: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.Get_Quiz_Answer_Start_Details([Number(req.params.quizId)]).then(quizInfo => {
            // console.log( quizInfo)
            res.status(200).send(quizInfo);
        }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
    },
    // For getting the mega table back from the database for handling quizzes in app.
    getAllQuizTableInformationInMegaTable: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.Get_All_Quiz_Tables_Info().then(megaResult => {
            // console.log( megaResult)
            res.status(200).send(megaResult);
        }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
    },
    // For getting the quiz results table back to see results data.
    getQuizResultsTable: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.Get_All_Quiz_Results().then(quizResults => {
            res.status(200).send(quizResults);
        }).catch(err => console.log(err))
    },
    getQuizResultsByUserId: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.quiz_results_get_by_userId([Number(id)]).then(tableOfUserResults => {
            res.status(200).send(tableOfUserResults)
        }).catch(err => { console.log(chalk.red(`Something went wrong while retrieving the users results. ${err}`)) })
    },
    getJoinedAllQuizResults: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.quiz_results_mega_join().then(allJoinedResults => {
            res.status(200).send(allJoinedResults)
        }).catch(err => { console.log(chalk.red(`Something went wrong while retrieving the users results. ${err}`)) })
    },
    getSurveyStartInformation: (req, res, next) => {
        const dbInstance = req.app.get('db');
        // console.log(req.params.quizId);
        dbInstance.Get_Survey_Start_Details([req.params.surveyId]).then(surveyInfo => { res.status(200).send(surveyInfo) }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
    },
    getAllSurveyTableInformationInMegaTable: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.Get_All_Survey_Tables_Info().then(megaResult => {
            // console.log( megaResult)
            res.status(200).send(megaResult);
        }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
    },
    getAllSurveyTableResultsInformation: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.survey_results_mega_ultra_compiled().then(megaResult => {
            // console.log( megaResult)
            res.status(200).send(megaResult);
        }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
    },
    
}