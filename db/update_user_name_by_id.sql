UPDATE surveyusers
SET user_name=$2
WHERE id=$1;

SELECT * FROM surveyusers
ORDER BY id ASC;