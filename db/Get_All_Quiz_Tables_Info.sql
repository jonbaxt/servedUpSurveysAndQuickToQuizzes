SELECT quizquestions.quiz_id, quizquestions.ques_id, quizanswers.ans_id, quizquestions.ques_num,  quizanswers.ans_num,  
surveyusers.user_name as quiz_owner, surveyusers.img as quiz_owner_profile_img,
quiz.title, quiz.description, quiz.start_img,
quizquestions.ques_text, quizquestions.ques_img, quizanswers.ans_text, quizanswers.is_correct, quizanswers.ans_img,
quizquestions.ques_type,  quizquestions.ques_feat_count, quizquestions.question_features, quizquestions.time_limit, quizanswers.ans_special,
quiz.created_on, quiz.updated_on, quiz.timed, quiz.site_approval
FROM quizquestions 
INNER JOIN quizanswers ON quizquestions.ques_id=quizanswers.quiz_ques_id
INNER JOIN quiz ON quiz.quiz_id=quizquestions.quiz_id
INNER JOIN surveyusers ON surveyusers.id=quiz.quiz_owner;