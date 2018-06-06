-- SELECT * FROM surveyusers;
-- SELECT * FROM quizquestions;
-- SELECT * FROM quizanswers;
-- Select * from quizresults;

SELECT quizresults.result_id, 
quizquestions.quiz_id,
quizquestions.ques_id,  
quizanswers.ans_id,
quiz.title,
quiz.start_img,
quizquestions.ques_num, 
quizquestions.ques_text,  
quizanswers.ans_num, 
quizanswers.ans_text, 
quizanswers.is_correct,
quizresults.takers_answer,
quizresults.taken_count,
surveyusers.id as quiz_taker_id,
surveyusers.user_name as quiz_taker_name
FROM quizresults
JOIN quizquestions ON quizquestions.ques_id=quizresults.quiz_ques_id
JOIN quiz ON quiz.quiz_id=quizquestions.quiz_id
JOIN quizanswers ON quizanswers.ans_id=quizresults.answer_id
JOIN surveyusers ON surveyusers.id=quizresults.survey_taker_id
-- WHERE surveyusers.id=5
;