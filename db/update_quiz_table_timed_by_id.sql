UPDATE quiz
SET timed=$2, updated_on=CURRENT_DATE
WHERE quiz_id=$1;

SELECT * FROM 
quiz 
WHERE quiz_id=$1;