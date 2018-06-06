-- GET Specific quiz for startup page
SELECT survey.survey_id, 
surveyusers.user_name as Survey_Creator, 
survey.title, 
survey.description, 
survey.start_img, 
survey.anonymous
FROM survey JOIN surveyusers ON survey.survey_owner=surveyusers.id
WHERE survey_id=$1;
-- select * FROM quiz where quiz_id = $1;