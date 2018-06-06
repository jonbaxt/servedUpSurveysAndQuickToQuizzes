-- SELECT * FROM Quiz;

SELECT quiz.quiz_id, surveyusers.user_name as quiz_creator, surveyusers.img as quiz_creator_img, quiz.title, quiz.description, quiz.start_img, quiz.created_on, quiz.updated_on, quiz.timed, quiz.site_approval, quiz.quiz_owner as quiz_owner_id 
FROM quiz JOIN surveyusers ON surveyusers.id=quiz.quiz_owner;