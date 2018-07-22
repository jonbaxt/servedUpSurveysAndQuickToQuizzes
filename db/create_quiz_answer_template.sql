INSERT INTO QuizAnswers
( Ans_Num, Ans_Text, Ans_Img, Ans_Special, Is_Correct, Quiz_Ques_Id )
VALUES
($3, 'Put your answer text here', 'Insert image here', NULL, FALSE, $2);

SELECT quizquestions.quiz_id, quizanswers.quiz_ques_id, quizanswers.ans_id, quizanswers.ans_text, quizanswers.ans_img, quizanswers.ans_special, quizanswers.is_correct
FROM quizanswers
JOIN quizquestions ON quizanswers.quiz_ques_id=quizquestions.ques_id
WHERE quizquestions.quiz_id=$1
ORDER BY ans_id ASC;