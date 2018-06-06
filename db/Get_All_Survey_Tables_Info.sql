SELECT survey.survey_id, surveyquestions.ques_id, surveyanswers.ans_id, surveyquestions.ques_num, surveyanswers.ans_num, surveyusers.user_name as survey_owner,
surveyusers.img as survey_owner_profile_img, survey.title, survey.description, survey.start_img, surveyquestions.ques_text, surveyquestions.ques_img,
surveyanswers.ans_text, surveyanswers.ans_img, survey.anonymous, surveyquestions.ques_type, surveyquestions.ques_feat_count, surveyquestions.question_features,
surveyanswers.ans_special, survey.created_on, survey.updated_on, survey.site_approval
FROM surveyquestions
JOIN survey ON survey.survey_id=surveyquestions.survey_id
-- JOIN surveyquestions ON survey.survey_id
JOIN surveyusers ON surveyusers.id=survey.survey_owner
JOIN surveyanswers ON surveyquestions.ques_id=surveyanswers.survey_ques_id
-- WHERE survey.survey_id=$1
;