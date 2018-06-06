UPDATE quizquestions
SET time_limit=$3
WHERE ques_id=$2;

SELECT * FROM quizquestions
WHERE quiz_id=$1
ORDER BY ques_id ASC;