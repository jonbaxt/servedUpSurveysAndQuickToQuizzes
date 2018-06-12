export default function TotalQuizTakerBuild(quizResultsUltraJoinedTable, quiz_id){
    let totalSurveyTakersForQuiz = quizResultsUltraJoinedTable.filter(el => el.quiz_id === quiz_id).map(elem => elem.survey_taker_id).sort().filter((elem, ind, orig) => elem !== orig[ind - 1]).length
    return totalSurveyTakersForQuiz;
}