const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const chalk = require('chalk');
require('dotenv').config();
const controller = require('./controller');
const creators = require('./creators');
const readers = require('./readers');
const updaters = require('./updaters');
const deleters = require('./deleters');

const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env;

const app = express();

massive(CONNECTION_STRING).then( (mySQLDatabase) =>{
    console.log(chalk.bgYellow(chalk.black('Database Has Connected')));
    app.set('db', mySQLDatabase)
})

app.use(express.static(`${__dirname}/../build`));
app.use( bodyParser.json() );
app.use( session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: { },
}))

app.use(passport.initialize());

app.use(passport.session());

passport.use( new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, (accessToken, refreshToken, extraParams, profile, done) => {
    let db = app.get('db');
    let { displayName, picture, id } = profile;

    db.find_user([id]).then((foundUser) => {
        if (foundUser[0]) {
            done(null, foundUser[0].id);
        } else {
            db.create_user([displayName, picture, id]).then((user) => {
                done(null, user[0].id);
            })
        }
    })
}));

passport.serializeUser((id, done) => {
    done(null, id);
});

passport.deserializeUser((id, done) => {
    // whatever we pass out, ends up on req object as req.user
    app.get('db').find_session_user([id]).then( (user) => {
        done( null, user[0]);
    })
});

app.get('/login', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.SUCCESS_REDIRECT,
    failureRedirect: process.env.FAILURE_REDIRECT
}))
app.get('/auth/me', (req, res) => {
    if( req.user ){
        res.status(200).send(req.user);
    } else {
        res.status(401).send('Nice try, Nope Nope Nope');
    }

})


//User Calls
app.get('/api/findSessionUser/:id', controller.findTheSurveyUser);
app.get( '/api/getSurveyUsers', controller.getSurveyUsersTable);
app.get('/api/getAdmins', controller.getSurveyAdmins);
app.put('/api/editUserName/:id', updaters.editUserName);
app.delete('/api/deleteUserById/:id', deleters.deleteUserById);

//Quiz Calls
app.get( '/api/quizmain', readers.fetchAllQuizzesList);
app.get( '/api/quizmain/getmegaquiztable', readers.getAllQuizTableInformationInMegaTable);
app.get( '/api/quiztaker/getQuizInfo/:quizId', readers.getQuizStartInformation);
app.get( '/api/quiztaker/getQuizQuestionsInfo/:quizId', readers.getQuizQuestionsStartInformation ); 
app.get( '/api/quiztaker/getQuizAnswersInfo/:quizId', readers.getQuizAnswersStartInformation ); 


app.get( '/api/quizresults/all', readers.getQuizResultsTable);
app.post('/api/quizAnswerSubmission/SubmitToQuizResultsTable', creators.postToQuizResults);
app.get( '/api/quizResultsByUser/:id', readers.getQuizResultsByUserId);
app.get( '/api/quizresults/joinedtable', readers.getJoinedAllQuizResults);

//QuizCreatorCalls
app.post('/api/quizCreation/newQuiz', creators.postNewQuiz);
app.post('/api/quizQuestionCreate/:quizId', creators.createNewQuizQuestionTemplate);
app.post('/api/quizAnswerCreate/:quizId/:quizQuesId/:ansNum', creators.createNewQuizAnswerTemplate);
// Session Information that is stored and can be called on:
app.post('/api/sessiondata/current_quiz/set', (req, res) => {
    console.log(req.body);


    req.session = {stuff: req.body};
    // req.session.cookie('Current_quiz', req.body.quiz_data, {maxAge: null, expires: null, path: '/api/sessiondata/currentQuizInfo'})
    // res.cookie('Current Session', req.body.quiz_id, { maxAge: 9000000, httpOnly: true });
    res.status(200).send(req.session);
})
app.get('/api/sessiondata/currentQuizInfo', (req, res) => {
    // console.log(req.session)
    // console.log(req);
    // console.log(res.cookie)
    res.status(200).send(res) })


//Quiz Edit Calls
app.put('/api/quizedit/from/quiztable/where/id/:quizId', updaters.editQuizTableById );
app.put('/api/quizedit/from/quizquestionstable/where/:quizId/:quesNum', updaters.editQuizQuestionTableById );
app.put('/api/quizedit/from/quizanswerstable/where/:quizId/:ansId', updaters.editQuestionAnswersTableById);

//Quiz Delete Calls
app.delete('/api/quizdelete/wholequiz/byid/:quizId', deleters.deleteQuizById);

//Survey Calls
app.get('/api/surveymain', readers.fetchAllSurveysList);
app.get( '/api/surveymain/getmegasurveytable', readers.getAllSurveyTableInformationInMegaTable);
app.get(`/api/surveytaker/getSurveyInfo/:surveyId`, readers.getSurveyStartInformation);
app.post('/api/surveyAnswerSubmission/SubmitToSurveyResultsTable', creators.postToSurveyResults);
app.get('/api/surveyresults/allresults/ultrajoined', readers.getAllSurveyTableResultsInformation);

// This is for if you're using browser router in the future.
// const path = require('path');
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });

// const PORT = process.env.PORT || SERVER_PORT;
app.listen(SERVER_PORT, ()=> { console.log(`Port: ${SERVER_PORT} is on`)});