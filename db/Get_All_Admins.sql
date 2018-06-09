SELECT
surveyadmins.admin_id, 	
surveyadmins.survey_user_id,
surveyusers.user_name AS admin_name,
surveyusers.img AS admin_image, 
surveyadmins.can_edit_tables,
surveyadmins.can_delete_tables,
surveyadmins.can_approve_new_tables,
surveyadmins.can_handle_flagged_tables,
surveyadmins.admin_title,
surveyadmins.supervisor_id
FROM surveyadmins
 JOIN surveyusers ON surveyusers.id=surveyadmins.survey_user_id;