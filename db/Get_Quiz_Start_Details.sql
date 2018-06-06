-- GET Specific quiz for startup page
-- SELECT quiz.quiz_id, surveyusers.user_name as Survey_Creator, quiz.title, quiz.description, quiz.start_img, quiz.timed
SELECT quiz.quiz_id, surveyusers.user_name as Survey_Creator, quiz.title, quiz.description, quiz.start_img, quiz.created_on, quiz.updated_on, quiz.site_approval, quiz.timed, quiz.quiz_owner
FROM quiz JOIN surveyusers ON quiz.quiz_owner=surveyusers.id
WHERE quiz_id=$1;




-- select * FROM quiz where quiz_id = $1;