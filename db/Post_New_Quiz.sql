INSERT INTO Quiz
(Title, Description, Start_Img, Created_On, Updated_On, Timed, Site_Approval, Quiz_Owner)
VALUES
($1, $2, $3, CURRENT_DATE, CURRENT_DATE, $4, FALSE, $5)
RETURNING *;

