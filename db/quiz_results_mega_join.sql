SELECT quizresults.result_id, 
quiz.quiz_id, 
quizresults.quiz_ques_id, 
quizresults.answer_id, 
quiz.title, 
quiz.description, 
quiz.start_img, 
quizquestions.ques_num,
quizquestions.ques_text, 
quizquestions.ques_img, 
quizanswers.ans_img, 
quizresults.takers_answer, 
quizanswers.is_correct, 
quizresults.taken_count, 
quizresults.survey_taker_id, 
surveyusers.user_name, 
surveyusers.img
FROM quizresults
JOIN surveyusers ON surveyusers.id=quizresults.survey_taker_id
JOIN quizquestions ON quizquestions.ques_id=quizresults.quiz_ques_id
JOIN quizanswers on quizanswers.ans_id=quizresults.answer_id
JOIN quiz ON quiz.quiz_id=quizquestions.quiz_id
ORDER BY quizresults.result_id ASC;