-- SELECT * FROM surveyresults;

SELECT surveyresults.result_id,
survey.survey_id,
surveyresults.survey_ques_id,
surveyresults.answer_id,
survey.title,
survey.description,
survey.start_img as survey_start_img,
surveyquestions.ques_num,
surveyquestions.ques_text,
surveyquestions.ques_img,
surveyquestions.ques_type,
surveyanswers.ans_num,
surveyanswers.ans_text,
surveyanswers.ans_img,
surveyresults.takers_answer,
surveyresults.taken_count,
surveyresults.survey_taker_id,
surveyanswers.ans_special,
surveyquestions.ques_feat_count,
surveyquestions.question_features,
survey.anonymous,
survey.created_on as survey_was_created_on,
survey.updated_on as survey_last_updated_on,
survey.site_approval,
surveyusers.user_name as taker_name,
surveyusers.img as taker_img
FROM surveyresults
JOIN surveyusers on surveyusers.id=surveyresults.survey_taker_id
JOIN surveyquestions ON surveyquestions.ques_id=surveyresults.survey_ques_id
JOIN surveyanswers ON surveyanswers.ans_id=surveyresults.answer_id
JOIN survey ON survey.survey_id=surveyquestions.survey_id
ORDER BY surveyresults.result_id ASC;