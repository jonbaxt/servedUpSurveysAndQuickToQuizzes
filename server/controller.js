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
    getSurveyAdmins: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        dbInstance.Get_All_Admins().then((users) => {
            res.status(200).send(users);
        }).catch((errrrrrrr) => { console.log(`DID NOT GET THE SURVEY USERS FROM DATABASE`, errrrrrrr) })
    },
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
    //For getting specific quiz info for start quiz start page in wizard taker.
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
    postNewQuiz: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const data = req.body;
        // console.log(data.Title);
        dbInstance.Post_New_Quiz([data.Title, data.Description, data.Start_Img, data.Timed, Number(data.Quiz_Owner)]).then(newQuizReturn => {
            console.log( newQuizReturn)
            res.status(200).send(newQuizReturn);
        }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
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
        const quesId = Number(req.params.quesId);
    },
    deleteQuizById: (req, res, next) => {
        const dbInstance = req.app.get('db');  
        const id = Number(req.params.quizId);
        dbInstance.delete_quiz_by_id([id]).then(quizDeleted => {
            res.status(200).send(quizDeleted);
        }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
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
    getAllSurveyTableResultsInformation: ( req, res ) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.survey_results_mega_ultra_compiled().then(megaResult => {
            // console.log( megaResult)
            res.status(200).send(megaResult);
        }).catch(err => { console.log(`Could not retrieve quiz table info: ${err}`) })
    },
}