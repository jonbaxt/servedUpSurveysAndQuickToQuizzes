INSERT INTO SurveyResults
(Survey_Ques_Id, Answer_Id, Takers_Answer, Taken_Count, Survey_Taker_Id)
VALUES
($1, $2, $3, $4, $5),                --Ques 1 Answer
($6, $7, $8, $9, $10),               --Ques 2 Answer
($11, $12, $13, $14, $15),           --Ques 3 Answer
($16, $17, $18, $19, $20),           --Ques 4 Answer
($21, $22, $23, $24, $25),           --Ques 5 Answer
($26, $27, $28, $29, $30),           --Ques 6 Answer
($31, $32, $33, $34, $35),           --Ques 7 Answer
($36, $37, $38, $39, $40),           --Ques 8 Answer
($41, $42, $43, $44, $45),           --Ques 9 Answer
($46, $47, $48, $49, $50),           --Ques 10 Answer
($51, $52, $53, $54, $55)           --Ques 11 Answer
RETURNING *;