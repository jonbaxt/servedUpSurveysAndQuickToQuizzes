INSERT INTO QuizQuestions
(Ques_Num, Ques_Text, Ques_Type, Ques_Img, Ques_Feat_Count, Question_Features, Time_Limit, Quiz_Id)
VALUES
($2, 'Enter the question`s text right here', 'If you want an image to display over your question, put it right here', null, null, null, null, $1);
SELECT * FROM QuizQuestions WHERE quiz_id=$1 ORDER BY ques_id ASC;