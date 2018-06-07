import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';

import UserSurveyQuizManagement from './components/UserSurveyQuizManagement/UserSurveyQuizManagement';
import QuizEditor from './components/UserSurveyQuizManagement/QuizEditor/QuizEditor';
import SurveyEditor from './components/UserSurveyQuizManagement/SurveyEditor/SurveyEditor';

import QuizWizardStart from './components/QuizTakerWizard/QuizWizardStart';
import QuizWizardQuestion from './components/QuizTakerWizard/QuizWizardQuestion';
import QuizWizardEnd from './components/QuizTakerWizard/QuizWizardEnd';

import SurveyWizardStart from './components/SurveyTakerWizard/SurveyWizardStart';
import SurveyWizardQuestion from './components/SurveyTakerWizard/SurveyWizardQuestion';
import SurveyWizardEnd from './components/SurveyTakerWizard/SurveyWizardEnd';

import QuizDoneResults from './components/Results/QuizView/QuizDoneResults/QuizDoneResults';
import AllQuizResults from './components/Results/QuizView/AllQuizResults/AllQuizResults';

import SurveyQuizCreator from './components/SurveyQuizCreator/SurveyQuizCreator';
import QuizCreateStart from './components/SurveyQuizCreator/QuizCreatorWizard/QuizCreateStart';
import SurveyCreateStart from './components/SurveyQuizCreator/SurveyCreatorWizard/SurveyCreateStart';

export default (
    <Switch>
        {/* Login and DashBoardRoutes */}
        <Route path='/' component={Login} exact />
        <Route path='/Dashboard/' component={Dashboard} />
        <Route path='/Dashboard/:currentUserId' component={Dashboard} />
        <Route path='/Dashboard/:currentUserId/AdminView' component={AdminDashboard} />

        {/* SurveyManagement Links */}
        <Route path='/manage/userssurveys/:currentUserId' component={UserSurveyQuizManagement} />
        <Route path='/manage/usersquizzes/:currentUserId/:quizId/EditDelete' component={QuizEditor} />
        <Route path='/manage/userssurveys/:currentUserId/:surveyId/EditDelete' component={SurveyEditor} />

        {/* Quiz Taker stuff */}
        <Route path='/:currentUserId/quiz/:quizId/start' component={QuizWizardStart} />
        <Route path='/:currentUserId/quiz/:quizId/:quesId' component={QuizWizardQuestion} />
        <Route path='/quizDoneReDirect/:currentUserId/:quizId/:quesId/complete' component={QuizWizardEnd} />
        
        {/* Survey Taker stuff */}
        <Route path='/:currentUserId/survey/:surveyId/start' component={SurveyWizardStart} />
        <Route path='/:currentUserId/survey/:surveyId/:quesId' component={SurveyWizardQuestion} />
        <Route path='/surveyDoneReDirect/:currentUserId/:quizId/:quesId/complete' component={SurveyWizardEnd} />
        
        {/* Results Routes */}
        <Route path='/results/afterQuizTake/byQuizNumber/:currentUserId/quiz/:quizId' component={QuizDoneResults} />
        <Route path='/results/quiz/allquizresults' component={AllQuizResults} />

        {/* Creation Routes */}
        <Route path='/createnew/:currentUserId/start' component={SurveyQuizCreator} />
        <Route path='/createnew/:currentUserId/quiz/quizsetup' component={QuizCreateStart} />
        <Route path='/createnew/:currentUserId/survey/surveysetup' component={SurveyCreateStart} />


        {/* <Route path='/Admin/Dashboard' component={AdminDashboard} /> */}
    </Switch>
)