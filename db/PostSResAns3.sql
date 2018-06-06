INSERT INTO SurveyResults
(Survey_Ques_Id, Answer_Id, Takers_Answer, Taken_Count, Survey_Taker_Id)
VALUES
($1, $2, $3, $4, $5),                --Ques 1 Answer
($6, $7, $8, $9, $10),               --Ques 2 Answer
($11, $12, $13, $14, $15)           --Ques 3 Answer
RETURNING *;