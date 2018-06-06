-- SELECT * FROM Quiz;

SELECT survey.survey_id, 
surveyusers.user_name as survey_creator, 
surveyusers.img as survey_creator_img, 
survey.title, 
survey.description, 
survey.start_img, 
survey.created_on, 
survey.updated_on,
survey.anonymous,
survey.site_approval, 
survey.survey_owner as survey_owner_id 
FROM survey
JOIN surveyusers ON surveyusers.id=survey.survey_owner;