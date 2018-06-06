CREATE TABLE IF NOT EXISTS SurveyUsers (
    Id SERIAL PRIMARY KEY,
    user_name VARCHAR(180),
    img TEXT,
    auth_id TEXT
);