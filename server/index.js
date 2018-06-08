const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const controller = require('./controller');
const chalk = require('chalk');
require('dotenv').config();

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
    saveUninitialized: true
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

//Quiz Calls
app.get( '/api/quizmain', controller.fetchAllQuizzesList);
app.get( '/api/quizmain/getmegaquiztable', controller.getAllQuizTableInformationInMegaTable);
app.get( '/api/quiztaker/getQuizInfo/:quizId', controller.getQuizStartInformation);
app.get( '/api/quiztaker/getQuizQuestionsInfo/:quizId', controller.getQuizQuestionsStartInformation ); 
app.get( '/api/quiztaker/getQuizAnswersInfo/:quizId', controller.getQuizAnswersStartInformation ); 


app.get( '/api/quizresults/all', controller.getQuizResultsTable);
app.post('/api/quizAnswerSubmission/SubmitToQuizResultsTable', controller.postToQuizResults);
app.get( '/api/quizResultsByUser/:id', controller.getQuizResultsByUserId);
app.get( '/api/quizresults/joinedtable', controller.getJoinedAllQuizResults);

//QuizCreatorCalls
app.post('/api/quizCreation/newQuiz', controller.postNewQuiz);

//Quiz Edit Calls
app.put('/api/quizedit/from/quiztable/where/id/:quizId', controller.editQuizTableById );
app.put('/api/quizedit/from/quizquestionstable/where/:quizId/:quesId', controller.editQuizQuestionTableById );

//Quiz Delete Calls
app.delete('/api/quizdelete/wholequiz/byid/:quizId', controller.deleteQuizById);

//Survey Calls
app.get('/api/surveymain', controller.fetchAllSurveysList);
app.get( '/api/surveymain/getmegasurveytable', controller.getAllSurveyTableInformationInMegaTable);
app.get(`/api/surveytaker/getSurveyInfo/:surveyId`, controller.getSurveyStartInformation);
app.post('/api/surveyAnswerSubmission/SubmitToSurveyResultsTable', controller.postToSurveyResults);


// const path = require('path');
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });

// const PORT = process.env.PORT || SERVER_PORT;
app.listen(SERVER_PORT, ()=> { console.log(`Port: ${SERVER_PORT} is on`)});