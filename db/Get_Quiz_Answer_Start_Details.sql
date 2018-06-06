SELECT quizquestions.quiz_id, quizanswers.quiz_ques_id, quizanswers.ans_id, quizanswers.ans_text, quizanswers.ans_img, quizanswers.ans_special, quizanswers.is_correct
FROM quizanswers
JOIN quizquestions ON quizanswers.quiz_ques_id=quizquestions.ques_id
WHERE quizquestions.quiz_id=1;