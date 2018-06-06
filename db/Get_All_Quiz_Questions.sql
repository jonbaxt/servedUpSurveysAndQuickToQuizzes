
-- SELECT quiz.quiz_id, surveyusers.user_name as quiz_creator, surveyusers.img as quiz_creator_img, quiz.title, quiz.description, quiz.start_img, quiz.created_on, quiz.updated_on, quiz.timed, quiz.site_approval, quiz.quiz_owner as quiz_owner_id 
-- FROM quiz JOIN surveyusers ON surveyusers.id=quiz.quiz_owner;


SELECT quiz.quiz_id, quizquestions.ques_id, quizquestions.ques_num, quiz.title, quizquestions.ques_text, quizquestions.ques_type, quizquestions.ques_img, quizquestions.ques_feat_count, quizquestions.question_features, quizquestions.time_limit 
FROM quiz JOIN quizquestions ON quiz.quiz_id=quizquestions.quiz_id;