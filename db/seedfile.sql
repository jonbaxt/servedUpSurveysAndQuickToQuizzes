-- DATABASE RESET
DROP TABLE IF EXISTS SurveyResults;
DROP TABLE IF EXISTS SurveyAnswers;
DROP TABLE IF EXISTS SurveyQuestions;
DROP TABLE IF EXISTS Survey;
DROP TABLE IF EXISTS QuizResults;
DROP TABLE IF EXISTS QuizAnswers;
DROP TABLE IF EXISTS QuizQuestions;
DROP TABLE IF EXISTS Quiz;
DROP TABLE IF EXISTS SurveyAdmins;
DROP TABLE IF EXISTS SurveyUsers;

-- TABLE CREATION
CREATE TABLE SurveyUsers(
Id SERIAL PRIMARY KEY,
User_Name VARCHAR(180),
img TEXT,
auth0_id TEXT
);

CREATE TABLE SurveyAdmins(
Admin_Id SERIAL PRIMARY KEY,
Survey_User_Id INTEGER REFERENCES SurveyUsers(Id) ON DELETE CASCADE,
Can_Edit_Tables BOOLEAN,
Can_Delete_Tables BOOLEAN,
Can_Approve_New_Tables BOOLEAN,
Can_Handle_Flagged_Tables BOOLEAN,
Admin_Title TEXT,
Supervisor_Id INTEGER REFERENCES SurveyUsers(Id) ON DELETE CASCADE
);

CREATE TABLE Quiz(
Quiz_Id SERIAL PRIMARY KEY,
Title TEXT,
Description TEXT,
Start_Img TEXT,
Created_On DATE,
Updated_On DATE,
Timed BOOLEAN,
Site_Approval BOOLEAN,
Quiz_Owner INTEGER REFERENCES SurveyUsers(Id) ON DELETE CASCADE
);

CREATE TABLE QuizQuestions(
Ques_Id SERIAL PRIMARY KEY,
Ques_Num INTEGER,
Ques_Text TEXT,
Ques_Type TEXT,
Ques_Img TEXT,
Ques_Feat_Count INTEGER,
Question_Features TEXT,
Time_Limit DECIMAL,
Quiz_Id INTEGER REFERENCES Quiz(Quiz_Id) ON DELETE CASCADE
);

CREATE TABLE QuizAnswers(
Ans_Id SERIAL PRIMARY KEY,
Ans_Num INTEGER,
Ans_Text TEXT,
Ans_Img TEXT,
Ans_Special TEXT,
Is_Correct BOOLEAN,
Quiz_Ques_Id INTEGER REFERENCES QuizQuestions(Ques_Id) ON DELETE CASCADE
);

CREATE TABLE QuizResults(
Result_Id SERIAL PRIMARY KEY,
Quiz_Ques_Id INTEGER REFERENCES QuizQuestions(Ques_Id) ON DELETE CASCADE,
Answer_Id INTEGER REFERENCES QuizAnswers(ans_id) ON DELETE CASCADE,
Takers_Answer TEXT,
Taken_Count INTEGER,
Survey_Taker_Id INTEGER REFERENCES SurveyUsers(Id) ON DELETE CASCADE
);

CREATE TABLE Survey(
Survey_Id SERIAL PRIMARY KEY,
Title TEXT,
Description TEXT,
Start_Img TEXT,
Created_On DATE,
Updated_On DATE,
Anonymous BOOLEAN,
Site_Approval BOOLEAN,
Survey_Owner INTEGER REFERENCES SurveyUsers(Id) ON DELETE CASCADE
);

CREATE TABLE SurveyQuestions(
Ques_Id SERIAL PRIMARY KEY,
Ques_Num INTEGER,
Ques_Text TEXT,
Ques_Img TEXT,
Ques_Type TEXT,
Ques_Feat_Count INTEGER,
Question_Features TEXT,
Survey_Id INTEGER REFERENCES Survey(Survey_Id) ON DELETE CASCADE
);

CREATE TABLE SurveyAnswers(
Ans_Id SERIAL PRIMARY KEY,
Ans_Num INTEGER,
Ans_Text TEXT,
Ans_Img TEXT,
Ans_Special TEXT,
Survey_Ques_Id INTEGER REFERENCES SurveyQuestions(Ques_Id) ON DELETE CASCADE
);

CREATE TABLE SurveyResults(
Result_Id SERIAL PRIMARY KEY,
Survey_Ques_Id INTEGER REFERENCES SurveyQuestions(Ques_Id) ON DELETE CASCADE,
Answer_Id INTEGER REFERENCES SurveyAnswers(Ans_Id) ON DELETE CASCADE,
Takers_Answer TEXT,
Taken_Count INTEGER,
Survey_Taker_Id INTEGER REFERENCES SurveyUsers(Id) ON DELETE CASCADE
);

-- DUMMY DATA, WON'T BE USED IN FINAL PRODUCT
INSERT INTO SurveyUsers
(User_Name, img, auth0_id)
VALUES
('Jonathan Baxter', 'https://lh5.googleusercontent.com/-JLfHGi69FlQ/AAAAAAAAAAI/AAAAAAAAAT8/MvFrMrA3hi8/photo.jpg', 'google-oauth2|114719994213853202721'),
('Knuckles', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_SzzNsQosujngZ1WL7hZi7WmpHZlLCQ3_htoFhYUb1PMb4-g', 'Autho_id_awes'),
('The Brain', 'https://img.etsystatic.com/il/c12f23/1276523468/il_570xN.1276523468_3td0.jpg?version=1', 'TheBrainCommandsAll'),
('Jerry Springer', 'https://imagecdn.wciu.com/Ocau6-1477409965-7-show-JerrySpringer-760x400.png', 'AuthorizedPig'),
('Jerry Seinfeld', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Jerry_Seinfeld.jpg/250px-Jerry_Seinfeld.jpg', 'AuthorizedComic'),
('Jerry Lewis', 'https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2017/08/20140023/Jerry-Lewis-nutty-professor-700x380.jpg', 'AuthorizNutProfessor'),
('Leroy Jenkins', 'https://ih1.redbubble.net/image.43363301.5311/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg', 'AuthorizJENKINS!!'),
('Jonathan Baxter', 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg', 'google-oauth2|113917534783401720882'),
('Jon Baxter', 'https://lh3.googleusercontent.com/-Ac4DWJ6TAv8/AAAAAAAAAAI/AAAAAAAAAAc/GGCx7TN9ERY/photo.jpg', 'google-oauth2|104198879589231371430'),
('The Doctor', 'http://thedoctorwhocompanion.com/wp-content/uploads/2016/02/day-of-the-doctor-11th-doctor-matt-smith.jpg', 'authDoctor'),
('The Master', 'https://i.pinimg.com/736x/83/fd/ef/83fdef0656bca56b05b74c1ccbb1f64f--doctor-who-art-tenth-doctor.jpg', 'authMaster'),
('Bugs Bunny', 'http://www.toonopedia.com/bugs.jpg', 'authLooney'),
('Donald Duck', 'https://vignette.wikia.nocookie.net/disney/images/d/db/Donald_Duck_Iconic.png/revision/latest?cb=20160905174817', 'authDonny'),
('Goofy', 'https://vignette.wikia.nocookie.net/disney/images/2/27/Goofy_transparent.png/revision/latest?cb=20170426165903', 'authoGoof');

INSERT INTO SurveyAdmins
(Survey_User_Id, Can_Edit_Tables, Can_Delete_Tables, Can_Approve_New_Tables, Can_Handle_Flagged_Tables, Admin_Title, Supervisor_Id)
VALUES
(1, TRUE, TRUE, TRUE, TRUE, 'Head System Admininstrator', null),
(2, FALSE, FALSE, TRUE, FALSE, 'Table Creator Manager', 1),
(4, FALSE, FALSE, FALSE, TRUE, 'Survey/Quiz Table Inspector', 1);

INSERT INTO Quiz
(Title, Description, Start_Img, Created_On, Updated_On, Timed, Site_Approval, Quiz_Owner)
VALUES
('Sonic the Hedgehog', 'Think you know everything about that hedgehog? Maybe you do. But in the end, there can only be one Sonic.', 'https://images-na.ssl-images-amazon.com/images/I/51juEROJpOL._SX425_.jpg', '2018-05-22', '2018-05-22', FALSE, TRUE, 1),
('Looney Tunes', 'What`s up doc? Nuttin like a good day for a quiz', 'https://rfathead-res.cloudinary.com/image/upload/q_auto/c_pad,w_4225,h_3000/roomplus/97-97085_looney_tunes_collection_realbig_6628.jpg', '2018-05-22', '2018-05-22', FALSE, TRUE, 3),
('Harry Potter', 'Do you know Harry Potter Well? Find out how you add up.', 'https://cdn.movieweb.com/img.news.tops/NEh8pECIhK0xkm_2_b/Harry-Potter-Why-Daniel-Radcliffe-Was-Cast.jpg', 
'2018-05-22', '2018-05-22', FALSE, TRUE, 2),
('Who`s Who? A Quiz of Pictures', 'Take your best guess on who these people are in the group of pictures in this quiz. See how you do.', 'https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&h=350', CURRENT_DATE, CURRENT_DATE, FALSE, FALSE, 1),
('You don`t know jack', '', '', CURRENT_DATE, CURRENT_DATE, FALSE, FALSE, 1);

INSERT INTO QuizQuestions
(Ques_Num, Ques_Text, Ques_Type, Ques_Img, Ques_Feat_Count, Question_Features, Time_Limit, Quiz_Id)
VALUES
(1, 'What year did the original Sonic the Hedgehog get released?', 'mult-choice', 'https://ia.media-imdb.com/images/M/MV5BMGRiM2QzZDgtMjc1Ny00ZjVlLWI3NzYtYjM4NDlmNzYxMjczXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR3,0,182,268_AL_.jpg', 0, null, 15000, 1),
(2, 'When Sonic the Hedgehog was first introduced in America and Europe, his nemesis villain Eggman was called a different name. In 1999, Sega slowly moved towards calling him Eggman like in Japan. What was he known by in America before making the switch?', 'mult-choice', 'https://78.media.tumblr.com/8de4e1fe48da00e723cc2911d3d76c87/tumblr_mnkrtedvft1st647so1_500.png', 0, null, 15000, 1),
(3, 'Who was Sonic`s girlfriend in the Saturday morning cartoon Sonic the Hedgehog (also known as SATAM)?', 'mult-choice', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/SatAMtitle.jpg/250px-SatAMtitle.jpg', 0, null, 15000, 1),
(4, 'What was the name of the princess in Sonic the Hedgehog 2006?', 'mult-choice', 'https://vignette.wikia.nocookie.net/sonic/images/e/e5/Sonic_Next_Gen.jpg/revision/latest?cb=20170702115006', 0, null, 15000, 1),
(5, 'Who did Sonic face against that was not Robotnik(Eggman) in Sonic Riders?', 'mult-choice', 'https://i.ytimg.com/vi/5tTROtMfEpA/maxresdefault.jpg', 0, null, 15000, 1),
(6, 'When Sonic was created, initially SEGA was thinking of having the franchise be a different animal entirely. What was that animal?', 'mult-choice', null, 0, null, 15000, 1),
(7, 'The sonic fanbase today is pretty split up with most old school fans considering going into 3D never really working while there are some fans that prefer the 3D platforms since they grew up with it. What era does the community call old school sonic games?', 'mult-choice', 'https://vignette.wikia.nocookie.net/logopedia/images/f/fe/Sonic_the_Hedgehog_1991_Logo.svg/revision/latest?cb=20130414093252', 0, null, 15000, 1),
(8, 'What would you say Amy Rose`s behavior with Sonic could be considered as?', 'text-area', 'https://pre00.deviantart.net/ea80/th/pre/f/2017/233/7/6/_amy_rose__sonic_channel_style_by_bakahog-dbkt1j5.jpg', 0, null, 15000, 1),
(9, 'In 2017, the Sonic Fanbase experienced something that was unnatural in a very long time where Sega went out of their way to try to give the whole fanbase a sonic game that they wanted. They released Sonic Mania and Sonic Forces the same year. Which game sold more copies?', 'mult-choice', 'https://gonintendo.com/system/file_uploads/uploads/000/030/764/original/maxresdefault.jpg', 0, null, 15000, 1),
(10, 'Mario and Sonic as well as Nintendo and SEGA were rivals in the 1990s. What did sega use as a tag to sell Sega Genesis Consoles in their commercials?', 'mult-choice', 'https://vignette.wikia.nocookie.net/sonic/images/4/47/Mario-and-sonic-2012-3.png/revision/latest?cb=20120208190536', 0, null, 15000, 1),
(11, 'Do you like Sonic Games? Why or Why Not? Was he better in 2D or 3D?','text-area',null, 0, null, 15000, 1),
(1, 'What movie featured both Mickey Mouse, Donald Duck, Bugs Bunny and Daffy Duck?', 'mult-choice', null, 0, null, 15000, 2),
(2, 'Where did Bugs Bunny needed to take a left turn at?', 'mult-choice', 'http://static.tvtropes.org/pmwiki/pub/images/rsz_bugs_2_4558.jpg', 0, null, 15000, 2),
(1, 'Harry Potter is known as:', 'mult-choice', 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/box_620_330/image.jpg', 0, null, NULL, 3),
(2, 'What does muggle mean in Harry Potter?', 'mult-choice', 'https://www.dhresource.com/0x0s/f2-albu-g5-M01-E3-49-rBVaJFmyR2eAIpyRAANoD6cAJQ4972.jpg/wholesale-muggle-sticker-decal-for-car-window.jpg', 0, null, NULL, 3),
(3, 'There are vampires in Harry Potter', 'mult-choice', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Bela_Lugosi_as_Dracula.jpg/300px-Bela_Lugosi_as_Dracula.jpg', 0, null, NULL, 3),
(4, 'Hagrid, when he becomes a professor teaches what?', 'mult-choice', 'https://vignette.wikia.nocookie.net/harrypotter/images/5/52/Hagrid_moleskin_overcoat.png/revision/latest?cb=20161121052755', 0, null, NULL, 3),
(1, 'Who is Rick Sanchez?', 'pic_guess', NULL, 0, NULL, NULL, 4),
(2, 'Who is Gandhi?', 'pic_guess', NULL, 0, NULL, NULL, 4),
(3, 'Who is Betty Boop?', 'pic_guess', NULL, 0, NULL, NULL, 4),
(4, 'Who is Michael Myers?', 'pic_guess', NULL, 0, NULL, NULL, 4),
(5, 'Who is the Shadow?', 'pic_guess', NULL, 0, NULL, NULL, 4),
(6, 'Who is Adam Sandler?', 'pic_guess', NULL, 0, NULL, NULL, 4),
(7, 'Who is Popeye?', 'pic_guess', NULL, 0, NULL, NULL, 4),
(8, 'Who is Dick Van Dyke?', 'pic_guess', NULL, 0, NULL, NULL, 4),
(9, 'Who is Fred Flintstone?', 'pic_guess', NULL, 0, NULL, NULL, 4),
(10, 'Who is Mr. Rogers?', 'pic_guess', NULL, 0, NULL, NULL, 4),
(11, 'Who is George Washington?', 'pic_guess', NULL, 0, NULL, NULL, 4),
(12, 'Who is Mr. Clean?', 'pic_guess', NULL, 0, NULL, NULL, 4),
(13, 'Who is Tim Allen?', 'pic_guess', NULL, 0, NULL, NULL, 4);

INSERT INTO QuizAnswers
( Ans_Num, Ans_Text, Ans_Img, Ans_Special, Is_Correct, Quiz_Ques_Id )
VALUES
(1, '2006', NULL, NULL, FALSE, 1),
(2, '1988', NULL, null, FALSE, 1),
(3, '1977', NULL, null, FALSE, 1),
(4, '1991', NULL, null, TRUE, 1),
(5, '1995', NULL, null, FALSE, 1),
(6, '1985', NULL, null, FALSE, 1),
(1, 'Egghead', NULL, null, FALSE, 2),
(2, 'Baldy McNoseHair', NULL, NULL, FALSE, 2),
(3, 'Big Boy', NULL, null, FALSE, 2),
(4, 'Dr. Robotnik', NULL, null, TRUE, 2),
(5, 'Dr. Wiley', null, null, FALSE, 2),
(1, 'Bunnie Robot', 'https://vignette.wikia.nocookie.net/sonic/images/1/1f/Bunnie_char.gif/revision/latest?cb=20160323202015', null, FALSE, 3),
(2, 'Amy Rose', 'http://info.sonicretro.org/images/thumb/7/78/Sonicjam_amy_32.png/160px-Sonicjam_amy_32.png', null, FALSE, 3),
(3, 'Princess Sally Acorn', 'https://vignette.wikia.nocookie.net/parody/images/c/c0/Princess_Sally_Acorn.png/revision/latest?cb=20140726113313', null, TRUE, 3),
(1, 'Elise', NULL, null, TRUE, 4),
(2, 'Peach', NULL, null, FALSE, 4),
(3, 'Daisy', NULL, null, FALSE, 4),
(4, 'Sally', NULL, null, FALSE, 4),
(1, 'Ash Ketchum', NULL, null, FALSE, 5),
(2, 'Babelonian Rouges', NULL, null, TRUE, 5),
(3, 'Team Chaotix', NULL, null, FALSE, 5),
(1, 'A Rabbit', NULL, null, TRUE, 6),
(2, 'A Squirrel', NULL, null, FALSE, 6),
(3, 'A Rat', NULL, null, FALSE, 6),
(4, 'A Porcipine', NULL, null, FALSE, 6),
(1, 'The Golden Era', NULL, null, FALSE, 7),
(2, 'Retron Era', NULL, null, FALSE, 7),
(3, 'Genesis/MegaDrive Era', NULL, null, TRUE, 7),
(4, 'Dusty Cobweb Era', NULL, null, FALSE, 7),
(1, 'User Inputted Answer for this one in answer', NULL, 'text-entry', NULL, 8),
(1, 'Sonic Mania', 'https://steamcdn-a.akamaihd.net/steam/apps/584400/header.jpg?t=1512576538', null, TRUE, 9),
(2, 'Sonic Forces', 'https://steamcdn-a.akamaihd.net/steam/apps/637100/header.jpg?t=1513593778', null, FALSE, 9),
(1, 'Sonic Does What Mario Wont', NULL, null, FALSE, 10),
(2, 'Game better in 16-bit, leave 8-bit behind', NULL, null, FALSE, 10),
(3, 'Genesis Does What NintenDont', Null, null, TRUE, 10),
(4, 'Play the next level of gaming', NULL, null, FALSE, 10),
(1, 'User Inputted Answer for this one in answer', NULL, 'text-entry', NULL, 11),
(1, 'Tex Avery Presents', NULL, null, FALSE, 12),
(2, 'Who Framed Roger Rabbit', NULL, null, TRUE, 12),
(3, 'Feed the children holiday special', NULL, null, FALSE, 12),
(4, 'Mary Poppins', NULL, null, FALSE, 12),
(1, 'Apalation Mountains', NULL, null, FALSE, 13),
(1, 'Apollo Theater', NULL, null, FALSE, 13),
(1, 'Albuquerqe', NULL, null, TRUE, 13),
(1, 'Albania', NULL, null, FALSE, 13),
(1, 'Arizona', NULL, null, FALSE, 13),
(1, 'Asia', NULL, null, FALSE, 13),
(1, 'The Boy Who Lived', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgf4xkpluO1znORkS700YZvMhJwYdB2Cvquk15UIYYxHFx2d2', null, TRUE, 14),
(2, 'The Boy Who Wont Grow Up', 'http://i.radikal.com.tr/620x332/2015/06/30/fft107_mf5024344.Jpeg', null, FALSE, 14),
(3, 'The Boy Who Kills the Dark Lord', 'https://vignette.wikia.nocookie.net/harrypotter/images/c/c1/Harry%2Bpotter-Harry_Potter_HP4_01.jpg/revision/latest?cb=20120207172914', null, FALSE, 14),
(4, 'The Boy Who is all about Fame', 'https://vignette.wikia.nocookie.net/harrypotter/images/a/a3/Harry_Potter_jako_reprezentant_Hogwartu.jpg/revision/latest?cb=20071031111702&path-prefix=pl', null, FALSE, 14),
(1, 'A person mettles and muggles about with business they shouldnt be in.', 'https://pics.me.me/we-would-havegotten-away-with-it-fit-werent-for-those-18679624.png', null, FALSE, 15),
(2, 'A person who mugs people in the alley', 'https://livesafely.org/main/wp-content/uploads/2008/07/avoid-being-mugged.jpg', null, FALSE, 15),
(3, 'A person with no magic', 'http://www.accsysltd.co.uk/wp-content/uploads/2015/09/Magician-Showing-Trick-3196820.jpg', null, TRUE, 15),
(4, 'A person who likes to collect mugs', 'https://images-na.ssl-images-amazon.com/images/I/51DrcerT3rL._SL1000_.jpg', null, FALSE, 15),
(1, 'TRUE', NULL, NULL, TRUE, 16),
(2, 'FALSE', NULL, null, FALSE, 16),
(1, 'Defense Against the Dark Arts', NULL, null, FALSE, 17),
(2, 'Divination', NULL, null, FALSE, 17),
(3, 'Potions', NULL, null, FALSE, 17),
(4, 'Care of Magical Creatures', NULL, null, TRUE, 17),
(1, NULL, 'https://vignette.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest?cb=20160923151111', NULL, FALSE, 18),
(2, NULL, 'https://vignette.wikia.nocookie.net/rickandmorty/images/6/6c/MeeseeksHQ.png/revision/latest?cb=20150930232412', NULL, FALSE, 18),
(3, NULL, 'https://upload.wikimedia.org/wikipedia/en/a/a6/Rick_Sanchez.png', NULL, TRUE, 18),
(4, NULL, 'https://vignette.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg/revision/latest?cb=20170217193441', NULL, FALSE, 18),
(1, NULL, 'https://cdn.wealthygorilla.com/wp-content/uploads/2016/07/78-Famous-Mahatma-Gandhi-Quotes.jpg', NULL, TRUE, 19),
(2, NULL, 'https://www.dalailama.com/assets/pages/%C2%A9ManuelBauer_AgenturFocus_M_4272_15Anp.jpg', NULL, FALSE, 19),
(3, NULL, 'https://mrmumblog.files.wordpress.com/2015/09/hbo-curbyourenthusiasm-header.jpg', NULL, FALSE, 19),
(4, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIoP7zD5cSUZ6VUfbLWaV4tJHVUtInQTAItYCht-8lMXa4JQUHTg', NULL, FALSE, 19),
(1, NULL, 'http://www2.pictures.zimbio.com/mp/_43XZq9cz9fl.jpg', NULL, FALSE, 20),
(2, NULL, 'https://vignette.wikia.nocookie.net/fantendo/images/a/a3/Betty_boop.png/revision/latest?cb=20140501225247', NULL, TRUE, 20),
(3, NULL, 'https://media.glamour.com/photos/5a3131f5968b09301d8d1d20/master/w_644,c_limit/betty-riverdale-cw-4-1.jpg', NULL, FALSE, 20),
(4, NULL, 'https://www.bettycrocker.com/-/media/legacy/Images/Betty-Crocker/Menus-Holidays-Parties/MHPLibrary/Parties-and-Get-Togethers/Vintage-Betty/The-Betty-Crocker-Portraits/The-Betty-Crocker-Portraits_06.jpg', NULL, FALSE, 20),
(1, NULL, 'http://horror.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/mm-1024x576.jpg', NULL, TRUE, 21),
(2, NULL, 'https://www.screengeek.net/wp-content/uploads/2017/05/jason.jpg', NULL, FALSE, 21),
(3, NULL, 'http://bloody-disgusting.com/wp-content/uploads/2017/09/bacon1.jpg', NULL, FALSE, 21),
(4, NULL, 'http://bloody-disgusting.com/wp-content/uploads/2017/08/cult-of-chucky-.jpg', NULL, FALSE, 21),
(1, NULL, 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Warren_Beatty_as_Dick_Tracy.jpg/200px-Warren_Beatty_as_Dick_Tracy.jpg', NULL, FALSE, 22),
(2, NULL, 'https://i.pinimg.com/originals/3e/88/b3/3e88b3f0d814cad6c1a347cbb9be4d24.jpg', NULL, FALSE, 22),
(3, NULL, 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTBmYmNhNzEtYmI4Zi00Y2ExLTgyYTEtNDI0Mjg0MDgxNzMwXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_CR0,45,480,270_AL_UX477_CR0,0,477,268_AL_.jpg', NULL, TRUE, 22),
(4, NULL, 'http://images.indianexpress.com/2017/09/gott_fb_759.jpg?w=610', NULL, FALSE, 22),
(1, NULL, 'https://st.depositphotos.com/1814084/1413/i/950/depositphotos_14133064-stock-photo-adam-sandler-at-adam-sandlers.jpg', NULL, TRUE, 23),
(2, NULL, 'https://upload.wikimedia.org/wikipedia/en/9/92/Chris_Farley.jpg', NULL, FALSE, 23),
(3, NULL, 'https://pixel.nymag.com/imgs/daily/vulture/2015/11/13/13-david-spade.w190.h190.2x.jpg', NULL, FALSE, 23),
(4, NULL, 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzc3ODM1MDIy/will-ferrell-9542601-1-402.jpg', NULL, FALSE, 23),
(1, NULL, 'https://vignette.wikia.nocookie.net/popeye/images/6/6c/J._Wellington_Wimpy.png/revision/latest?cb=20141106195705', NULL, FALSE, 24),
(2, NULL, 'https://vignette.wikia.nocookie.net/popeye/images/a/ad/Mr_Bluto.png/revision/latest?cb=20141228234728', NULL, FALSE, 24),
(3, NULL, 'https://vignette.wikia.nocookie.net/popeye/images/3/39/Picture_2.png/revision/latest?cb=20150104215207', NULL, TRUE, 24),
(4, NULL, 'https://vignette.wikia.nocookie.net/popeye/images/6/60/Swee%27Pea.png/revision/latest?cb=20141106195518', NULL, FALSE, 24),
(1, NULL, 'https://m.media-amazon.com/images/M/MV5BMTU5NjA4MDU0MV5BMl5BanBnXkFtZTYwMDI0MzQ2._V1_UX214_CR0,0,214,317_AL_.jpg', NULL, FALSE, 25),
(2, NULL, 'http://media4.s-nbcnews.com/j/MSNBC/Components/Slideshows/_production/ss-130123-Dick-Van-Dyke/ss-130122-Dick-Van-Dyke-1960.today-ss-slide-desktop.jpg', NULL, TRUE, 25),
(3, NULL, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Andy_Griffith_Andy_Griffith_Show_1960.jpg/220px-Andy_Griffith_Andy_Griffith_Show_1960.jpg', NULL, FALSE, 25),
(4, NULL, 'https://i.pinimg.com/originals/99/cc/62/99cc620f12706090bf3c317159029bf3.jpg', NULL, FALSE, 25),
(1, NULL, 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Fred_Flintstone.png/165px-Fred_Flintstone.png', NULL, TRUE, 26),
(2, NULL, 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Barney_Rubble.png/160px-Barney_Rubble.png', NULL, FALSE, 26),
(3, NULL, 'https://upload.wikimedia.org/wikipedia/en/6/67/George_Jetson.png', NULL, FALSE, 26),
(4, NULL, 'https://vignette.wikia.nocookie.net/thejetsons/images/8/89/Elroy_Jetson.png/revision/latest?cb=20120306200916', NULL, FALSE, 26),
(1, NULL, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Don_Knotts_1975.JPG/220px-Don_Knotts_1975.JPG', NULL, FALSE, 27),
(2, NULL, 'http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/mr-magoo-mr-magoo-8.1.jpg', NULL, FALSE, 27),
(3, NULL, 'http://www.neighborhoodarchive.com/images/mrn/characters/mr_mcfeely/1765.jpg', NULL, FALSE, 27),
(4, NULL, 'http://cdn.kidscreen.com/wp/wp-content/uploads/2018/02/Fred-Rogers.jpg?ebbec3', NULL, TRUE, 27),
(1, NULL, 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/JamesMadison.jpg/220px-JamesMadison.jpg', NULL, FALSE, 28),
(2, NULL, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg/220px-Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg', NULL, FALSE, 28),
(3, NULL, 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29.jpg/1200px-Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29.jpg', NULL, FALSE, 28),
(4, NULL, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Stuart-george-washington-constable-1797.jpg/170px-Stuart-george-washington-constable-1797.jpg', NULL, TRUE, 28),
(1, NULL, 'https://static8.depositphotos.com/1281717/827/i/950/depositphotos_8276107-stock-photo-brawny-man-in-cap-in.jpg', NULL, FALSE, 29),
(2, NULL, 'https://static.comicvine.com/uploads/scale_super/11111/111114304/5422628-fb_brawny_movember.jpg', NULL, FALSE, 29),
(3, NULL, 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Mr._Clean_logo.png/220px-Mr._Clean_logo.png', NULL, TRUE, 29),
(4, NULL, 'http://rs853.pbsrc.com/albums/ab95/CarsonRandProject/mark-henry.jpg~c200', NULL, FALSE, 29),
(1, NULL, 'http://thebigsmoke.com.au/wp-content/uploads/download-5.jpeg', NULL, FALSE, 30),
(2, NULL, 'https://bloximages.newyork1.vip.townnews.com/omaha.com/content/tncms/assets/v3/editorial/1/70/170f7d56-b44f-11e7-afb7-17e7f768bcb4/59e7ce0625fd3.image.png', NULL, TRUE, 30),
(3, NULL, 'https://i.imgflip.com/p5aei.jpg', NULL, FALSE, 30),
(4, NULL, 'http://ethnicelebs.com/wp-content/uploads/2014/06/Dana-Carvey.jpg', NULL, FALSE, 30);



INSERT INTO QuizResults
(Quiz_Ques_Id, Answer_Id, Takers_Answer, Taken_Count, Survey_Taker_Id)
VALUES
(1, 4, '1991', 1, 1),
(2, 10, 'Dr. Robotnik', 1, 1),
(3, 14, 'Princess Sally Acorn', 1, 1),
(4, 15, 'Elise', 1, 1),
(5, 20, 'Babelonian Rouges', 1, 1),
(6, 22, 'A Rabbit',	1, 1),
(7, 28, 'Genesis/MegaDrive Era', 1, 1),
(8, 30, 'Has gotten more tole rable over time.', 1, 1),
(9, 31, 'Sonic Mania', 1, 1),
(10, 35, 'Genesis Does What NintenDont', 1, 1),
(11, 37, 'I can`t wait to play both Sonic Forces and Sonic Mania. I`m a fan of both 2D and 3D style games. Usually find time to revisit the series at least yearly if not more.', 1, 1),

(12, 39, 'Who Framed Roger Rabbit', 1, 1),
(13, 47, 'Asia', 1, 1),

(12, 39, 'Who Framed Roger Rabbit', 1, 1),
(13, 47, 'Asia', 1, 1),
(14, 48, 'The Boy Who Lived', 1, 1),
(15, 54, 'A person with no magic', 1, 1),
(16, 56, 'TRUE', 1, 1),
(17, 61, 'Care of Magical Creatures', 1, 1),

(1, 1, '2006', 1, 2),
(2, 7, 'Egghead', 1, 2),
(3, 12, 'Bunnie Robot', 1, 2),
(4, 16, 'Peach', 1, 2),
(5, 19, 'Ash Ketchum', 1, 2),
(6, 23, 'A Squirrel', 1, 2),
(7, 29, 'Dusty Cobweb Era', 1, 2),
(8, 30, 'She looks pink', 1, 2),
(9, 32, 'Sonic Forces', 1, 2),
(10, 36, 'Play the next level of gaming', 1, 2),
(11, 37, 'This was a hard quiz. Is Sonic hard to play too?', 1, 2),

(1, 6, '1985', 1, 3),
(2, 11, 'Dr. Wiley', 1, 3),
(3, 13, 'Amy Rose', 1, 3),
(4, 17, 'Daisy', 1, 3),
(5, 21, 'Team Chaotix', 1, 3),
(6, 24, 'A Rat', 1, 3),
(7, 28, 'Genesis/MegaDrive Era', 1, 3),
(8, 30, 'So annoying that you would just want to see her die if you could.', 1, 3),
(9, 31, 'Sonic Mania', 1, 3),
(10, 35, 'Genesis Does What NintenDont', 1, 3),
(11, 37, 'I have no time trivial games. Need to take over the world!', 1, 3),

(12, 39, 'Who Framed Roger Rabbit', 1, 3),
(13, 47, 'Asia', 1, 3),

(14, 48, 'The Boy Who Lived', 1, 3),
(15, 54, 'A person with no magic', 1, 3),
(16, 57, 'FALSE', 1, 3),
(17, 61, 'Care of Magical Creatures', 1, 3),

(1, 2, '1988', 1, 4),
(2, 10, 'Dr. Robotnik', 1, 4),
(3, 14, 'Princess Sally Acorn', 1, 4),
(4, 16, 'Peach', 1, 4),
(5, 21, 'Team Chaotix', 1, 4),
(6, 24, 'A Rat', 1, 4),
(7, 27, 'Retron Era', 1, 4),
(8, 30, 'Freakish. I would totally tell that idiot to go get a job or stop harrassing Sonic. He`s obviously not as interested as she would like him to be.', 1, 4),
(9, 31, 'Sonic Mania', 1, 4),
(10, 35,'Genesis Does What NintenDont', 1, 4),
(11, 37, 'Sonic Games are fun, I would play them all the time.', 1, 4),

(1, 4, '1991', 1, 5),
(2, 10, 'Dr. Robotnik', 1, 5),
(3, 14, 'Princess Sally Acorn', 1,5),
(4, 16, 'Peach', 1, 5),
(5, 19, 'Ash Ketchum', 1, 5),
(6, 23, 'A Squirrel', 1, 5),
(7, 28, 'Genesis/MegaDrive Era', 1, 5),
(8, 30, 'She`s so crazy!', 1, 5),
(9, 31, 'Sonic Mania', 1, 5),
(10, 34, 'Game better in 16-bit, leave 8-bit behind', 1, 5),
(11, 37, 'Yes they`re cool!', 1, 5),

(1, 1, '2006', 1, 6),
(2, 7, 'Egghead', 1, 6),
(3, 12, 'Bunnie Robot' ,1,6),
(4, 16, 'Peach' ,1,6),
(5, 19, 'Ash Ketchum' ,1,6),
(6, 23, 'A Squirrel' ,1,6),
(7, 29, 'Dusty Cobweb Era' ,1,6),
(8, 30, 'She looks pink' ,1,6),
(9, 32, 'Sonic Forces' ,1,6),
(10, 36, 'Play the next level of gaming', 1, 6),
(11, 37, 'This was a hard quiz. Is Sonic hard to play too?', 1, 6),

(12, 39, 'Who Framed Roger Rabbit', 1, 6),
(13, 44, 'Albuquerqe', 1, 6),

(1, 4, '1991', 1, 7),
(2, 10, 'Dr. Robotnik', 1, 7),
(3, 14, 'Princess Sally Acorn', 1, 7),
(4, 15, 'Elise', 1, 7),
(5, 20, 'Babelonian Rouges', 1, 7),
(6, 22, 'A Rabbit', 1, 7),
(7, 28, 'Genesis/MegaDrive Era', 1, 7),
(8, 30, 'I don`t mind Amy, I think she can have her problems at times, but she has grown into a more interesting character over the years.', 1, 7),
(9, 31, 'Sonic Mania', 1, 7),
(10, 35, 'Genesis Does What NintenDont', 1, 7),
(11, 37, 'Sonic games are  fun. I prefer my Sonic games 2D, but have no problem with 3D. Different style of gaming, but totally playable.', 1, 7),

(12, 39, 'Who Framed Roger Rabbit', 1, 7),
(13, 44, 'Albuquerqe', 1 , 7),

(14, 49, 'The Boy Who Wont Grow Up', 1, 7),
(15, 55, 'A person who likes to collect mugs', 1, 7),
(16, 56, 'TRUE', 1, 7),
(17, 61, 'Care of Magical Creatures', 1, 7),

(1, 1, '2006', 1, 9),
(2, 7, 'Egghead', 1, 9),
(3, 12, 'Bunnie Robot', 1, 9),
(4, 16, 'Peach', 1, 9),
(5, 19, 'Ash Ketchum', 1, 9),
(6, 23, 'A Squirrel', 1, 9),
(7, 29, 'Dusty Cobweb Era', 1, 9),
(8, 30, 'She looks pink', 1, 9),
(9, 32, 'Sonic Forces',	1, 9),
(10, 36, 'Play the next level of gaming', 1, 9),
(11, 37, 'This was a hard quiz. Is Sonic hard to play too?', 1, 9),

(12, 39, 'Who Framed Roger Rabbit', 1, 9),
(13, 44, 'Albuquerqe', 1, 9),

(14, 48, 'The Boy Who Lived', 1, 9),
(15, 54, 'A person with no magic', 1, 9),
(16, 56, 'TRUE', 1, 9),
(17, 60, 'Potions', 1, 9);







INSERT INTO survey
(Title, Description, Start_Img, Created_On, Updated_On, Anonymous, Site_Approval, Survey_Owner)
VALUES
('Parallel Parking, Do you like it?', 'A survey to ask questions about how you like and often do you use parallel parking as a form of parking when given the choice to do so.', 'http://www.eregulations.com/wp-content/uploads/2016/12/Skill_Eight_Part_3.jpg', CURRENT_DATE, CURRENT_DATE, FALSE, TRUE, 1),
('The UTA Rapid Bus Transit System', 'This is a survey to guage how people feel about the new rapid transit system currently under construction to guage whether they agree or disagree with the way it was brought as well if they would actually use it.', 'https://archive.sltrib.com/images/2016/0522/utafares_052116~0.jpg', CURRENT_DATE, CURRENT_DATE, FALSE, TRUE, 5),
('Spielberg films, are they all good or have they lost quality over time?', 'This survey is here to answer the questions that people have been having in discussions to see if the majority think that Steven Spielberg films have been all good, progressively gotten worse, or have not been good at all.', 'https://i.ytimg.com/vi/Jf_ntUGfV1Q/hqdefault.jpg', CURRENT_DATE, CURRENT_DATE, FALSE, TRUE, 7),
('Anonymous Survey Tester', 'This survey is specifically going to exist to test anonymous testing features so that an anonymous result can be achieved.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png', CURRENT_DATE, CURRENT_DATE, TRUE, FALSE, 6);


INSERT INTO SurveyQuestions
(Ques_Num, Ques_Text, Ques_Img, Ques_Type, Ques_Feat_Count, Question_Features, Survey_Id)  --Ques_Type = mult-choice, text-area, scale (1-3, 1-5, 1-10) --> scale3 scale5 scale10,
VALUES
(1, 'When do you parellel park? ', 'http://blog.driversed.com/wp-content/uploads/2013/05/h-parallel-parking.jpg', 'mult-choice', 0, NULL, 1),
(2, 'Do you feel parallel parking should be implemented more in parking on roads when given the option?', NULL, 'mult-choice', 0, NULL, 1),
(3, 'On a scale of 1 to 5, how likely would you parallel park if given the chance?', NULL, 'scale5', 0, NULL, 1),
(4, 'On a scale of 1 to 5, how efficient is parallel parking?', NULL, 'scale5', 0, NULL, 1),
(5, 'On a scale of 1 to 5, how easy is parallel parking?', NULL, 'scale5', 0, NULL, 1),
(6, 'Do you have any additional thoughts on parallel parking?', NULL, 'text-area', 0, NULL, 1),
(1, 'On a scale of 1 to 10, how much do you feel the Rapid Bus Transit System will help Utah Valley?', 'https://i.pinimg.com/originals/a5/ce/a7/a5cea74f10406565f1b72b1bc8773ccc.jpg', 'scale10', 0, NULL, 2),
(2, 'On a scale of 1 to 10, how much do you feel the Rapid Bus Transit System will make traffic worse?', 'https://mediaassets.abcactionnews.com/photo/2014/10/20/Traffic_1413838538887_9209908_ver1.0_640_480.jpg', 'scale10', 0, NULL, 2),
(3, 'On a scale of 1 to 10, how much do you feel the Rapid Bus Transit System will benefit the college students coming in to class?', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Route_248_at_the_5600_West_TRAX_station.jpg/1200px-Route_248_at_the_5600_West_TRAX_station.jpg', 'scale10', 0, NULL, 2),
(4, 'On a scale of 1 to 10, how much do you feel the Rapid Bus Transit System will have good rider numbers?', 'https://archive.sltrib.com/images/2013/0628/gasbus_062813~2.jpg', 'scale10', 0, NULL, 2),
(5, 'On a scale of 1 to 10, how much do you feel the Rapid Bus Transit System will not have any or few riders?', 'https://www.rideuta.com/-/media/Images/Careers/new-images/Shakir_111116.ashx?h=368&w=551&hash=117616CE4578AC2F2C62925139346AFD88A45B31&la=en', 'scale10', 0, NULL, 2),
(6, 'On a scale of 1 to 10, how much do you feel the Rapid Bus Transit System is a waste of money?', 'http://image.troyrecord.com/storyimage/TR/20170608/NEWS/170609832/AR/0/AR-170609832.jpg&maxh=400&maxw=667', 'scale10', 0, NULL, 2),
(7, 'On a scale of 1 to 10, how much do you feel the Rapid Bus Transit System is worth the money spent on it?', 'https://i.ytimg.com/vi/E-aJnO_y2CQ/maxresdefault.jpg', 'scale10', 0, NULL, 2),
(8, 'On a scale of 1 to 10, how much do you feel the Rapid Bus Transit System is properly managed by UTA?', 'https://news.byu.edu/sites/default/files/feature_image/UTA%20thumbnail.jpg', 'scale10', 0, NULL, 2),
(9, 'On a scale of 1 to 10, how much do you feel the Rapid Bus Transit System is not to be trusted with the current management of UTA?', 'https://res.cloudinary.com/simpleview/image/upload/crm/saltlake/10688174_1009488119080635_1360596651501028832_o0_fa403e04-b045-077e-51a359fef2ce889d.jpg', 'scale10', 0, NULL, 2),
(10, 'On a scale of 1 to 10, how much do you feel the Rapid Bus Transit System only exists to benefit insider friend contractors in real estate and construction?', 'https://media.defense.gov/2014/Aug/22/2000932997/-1/-1/0/140822-F-AF000-001.JPG', 'scale10', 0, NULL, 2),
(11, 'On a scale of 1 to 10, how much do you feel the Rapid Bus Transit System is worth the money spent on it?', 'http://gallery.bustalk.info/albums/userpics/10003/Private510-dsc7459a.jpg', 'scale10', 0, NULL, 2),
(12, 'Final thoughts on UTA and the Provo-Orem Rapid bus Transportation System?', 'https://www.provo.org/Home/ShowImage?id=10979&t=635264245452100000', 'text-area', 0, NULL, 2),
(1, 'Do you like Spielberg Films?', 'https://cdn.images.express.co.uk/img/dynamic/36/590x/ready-player-one-steven-spielberg-921380.jpg', 'mult-choice', 0, NULL, 3),
(2, 'Do you prefer the early Spielberg Films from the 70s to 90s?', 'http://cdn1.theodysseyonline.com/files/2015/11/08/635825609272391338-1751575851_Steven%20Spielberg%20ODYSSEY.jpg', 'mult-choice', 0, NULL, 3),
(3, 'Do you prefer the later Spielberg FIlms form 2000s to Now?', 'http://cdn1.theodysseyonline.com/files/2015/11/08/635825609272391338-1751575851_Steven%20Spielberg%20ODYSSEY.jpg', 'mult-choice', 0, NULL, 3),
(1, 'Do you think Spielberg has gotten better with his films over time, or has he gotten lazy with the way they put together? Your thoughts?', 'http://www.ultimatemovierankings.com/wp-content/uploads/2015/03/spielberg3333444.jpg', 'text-area', 0, NULL, 3),
(1, 'Write anything you want to post that wont display your profile. Nothing crude.', NULL, 'text-area', 0, NULL, 4),
(2, 'Do you like puppies?', NULL, 'mult-choice', 0, NULL, 4);


INSERT INTO SurveyAnswers  
(Ans_Num, Ans_Text, Ans_Img, Ans_Special, Survey_Ques_Id)-- Survey_Ques_Id INTEGER REFERENCES SurveyQuestions(Ques_Id)
VALUES
(1, 'When I have to', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGj80O3Z979x3vpw7z8PypVolFVWPcmk4T3T8Lt23MYDrPZrAzg', NULL, 1),
(2, 'It`s my first choice', 'http://blog.peacockandpaisley.com/wp-content/uploads/2012/01/Yes.jpg', NULL, 1),
(3, 'I will avoid at all costs', 'https://t1.uc.ltmcdn.com/en/images/7/8/6/img_how_to_avoid_someone_without_them_noticing_9687_orig.jpg', NULL, 1),
(1, 'Absolutely, it`s the way all parking should be.', NULL, NULL, 2),
(2, 'No, Are you kidding?', NULL, NULL, 2),
(3, 'When space is limited, maybe.', NULL, NULL, 2),
(1, 'scale-response-number-stored-here', NULL, 'scale5', 3),
(1, 'scale-response-number-stored-here', NULL, 'scale5', 4),
(1, 'scale-response-number-stored-here', NULL, 'scale5', 5),
(1, 'text-entry-from-user-stored-here', NULL, 'text-area', 6),
(1, 'scale-response-number-stored-here', NULL, 'scale10', 7),
(1, 'scale-response-number-stored-here', NULL, 'scale10', 8),
(1, 'scale-response-number-stored-here', NULL, 'scale10', 9),
(1, 'scale-response-number-stored-here', NULL, 'scale10', 10),
(1, 'scale-response-number-stored-here', NULL, 'scale10', 11),
(1, 'scale-response-number-stored-here', NULL, 'scale10', 12),
(1, 'scale-response-number-stored-here', NULL, 'scale10', 13),
(1, 'scale-response-number-stored-here', NULL, 'scale10', 14),
(1, 'scale-response-number-stored-here', NULL, 'scale10', 15),
(1, 'scale-response-number-stored-here', NULL, 'scale10', 16),
(1, 'scale-response-number-stored-here', NULL, 'scale10', 17),
(1, 'text-entry-from-user-stored-here', NULL, 'text-area', 18),
(1, 'Yes, Obviously', 'https://theplaylisspielberg filmst.net/wp-content/uploads/2016/06/the-best-steven-spielberg-films-ranked-et-jaws-raiders-of-the-lost-ark-schindlers-list-ai-catch-me-if-you-can.jpg', NULL, 19),
(2, 'Mostly, Yes', 'https://e3.365dm.com/18/04/1096x616/skynews-spielberg-films-jurassic-park_4284368.jpg?20180416113432', NULL, 19),
(3, 'His stuff is all right', 'https://theplaylist.net/wp-content/uploads/2016/06/The-50-Best-Moments-In-Steven-Spielberg-Movies.jpg', NULL, 19),
(4, 'Mostly, No', 'http://www.squareeyed.tv/wp-content/uploads/2015/12/Steven-Spielberg-3.jpg', NULL, 19),
(5, 'No, I would avoid his films at all costs', 'http://uscelebrityblog.com/wp-content/uploads/2014/05/st2.jpg', NULL, 19),
(1, 'All the way', 'https://images-na.ssl-images-amazon.com/images/I/81mHWQMw7PL._RI_.jpg', NULL, 20),
(2, 'Don`t really see a difference', 'https://static0.srcdn.com/wordpress/wp-content/uploads/2018/01/Jurassic-World-and-Jurassic-Park-logo.jpg', NULL, 20),
(3, 'They stink', 'https://ia.media-imdb.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg', NULL, 20),
(1, 'All the way', 'https://ia.media-imdb.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_UX182_CR0,0,182,268_AL_.jpg', NULL, 21),
(2, 'Don`t really see a difference', 'https://ia.media-imdb.com/images/M/MV5BNjAzOTUzNTY3Ml5BMl5BanBnXkFtZTgwMjYwNzE5ODE@._V1_UX182_CR0,0,182,268_AL_.jpg', NULL, 21),
(3, 'They stink', 'https://ia.media-imdb.com/images/M/MV5BMTIxNDUxNzcyMl5BMl5BanBnXkFtZTcwNTgwOTI3MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg', NULL, 21),
(1, 'text-entry-from-user-stored-here', 'https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE4XFxcLzAyXFxcLzIxMTIzODU1XFxcL3NwaWVsYmVyZy0xMDI0eDY4My5qcGdcIixcIndpZHRoXCI6NzY3LFwiaGVpZ2h0XCI6NDMxLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz92PTVcIn0iLCJoYXNoIjoiNDM1MmE0MWE3NmJlZWY0Njc4MWJmNGY1NDlhMjYwOTAyMTQzMmQxOSJ9/spielberg-1024x683.jpg', 'text-area', 22),
(1, 'text-entry-from-user-stored-here', NULL, 'text-area', 23),
(1, 'Yes', NULL, NULL, 24),
(2, 'No', NULL, NULL, 24),
(3, 'They`re cute', NULL, NULL, 24),
(4, 'They`re disgusting', NULL, NULL, 24),
(5, 'They can die', NULL, NULL, 24);


INSERT INTO SurveyResults
(survey_ques_id, answer_id, takers_answer, taken_count, survey_taker_id)
VALUES  
(1, 1, 'When I have to', 1, 1),
(2, 5, 'No, Are you kidding?', 1, 1),
(3, 7, '5', 1, 1),
(4, 8, '5', 1, 1),
(5, 9, '5', 1, 1),
(6, 10, 'Paralell is my life', 1, 1),
(1, 2, 'It`s my first choice', 1, 2),
(2, 4, 'Absolutely, it`s the way all parking should be.', 1, 2),
(3, 7, '1', 1, 2),
(4, 8, '3', 1, 2),
(5, 9, '1', 1, 2),
(6, 10, 'I hate parallel parking', 1, 2),
(1, 3, 'I will avoid at all costs', 1, 3),
(2, 6, 'When space is limited, maybe.', 1, 3),
(3, 7, '1', 1, 3),
(4, 8, '1', 1, 3),
(5, 9, '1', 1, 3),
(6, 10,	'I won`t need to drive when I take over the world!', 1, 3),
(1, 2, 'It`s my first choice', 1, 4),
(2, 4, 'Absolutely, it`s the way all parking should be.', 1, 4),
(3, 7, '5', 1, 4),
(4, 8, '5', 1, 4),
(5, 9, '5', 1, 4),
(6, 10, 'Parallel Parking should always be used. Makes drivers better.',  1, 4),
(1, 3, 'I will avoid at all costs', 1, 5),
(2, 5, 'No, Are you kidding?', 1, 5),
(3, 7, '3', 1, 5),
(4, 8, '4', 1, 5),
(5, 9, '2', 1, 5),
(6, 10, 'Just don`t try to park while Cosmo Kramer is driving.', 1, 5),
(1, 2, 'It`s my first choice', 1, 6),
(2, 5, 'No, Are you kidding?', 1, 6),
(3, 7, '4', 1, 6),
(4, 8, '2', 1, 6),
(5, 9, '5',1, 6),
(6, 10, 'I just can`t fall asleep while parallel parking.', 1, 6),
(1, 2, 'It`s my first choice', 1, 7),
(2, 4, 'Absolutely, it`s the way all parking should be.', 1, 7),
(3, 7, '5', 1, 7),
(4, 8, '5', 1, 7),
(5, 9, '5', 1, 7),
(6, 10, 'Lerooy!!! Always parks parallel. Cause least I have chicken!', 1, 7),
(1, 1, 'When I have to', 1, 8),
(2, 6, 'When space is limited, maybe.', 1, 8),
(3, 7, '2', 1, 8),
(4, 8, '1', 1, 8),
(5, 9, '1', 1, 8),
(6, 10, 'If given the choice. I wouldn`t parallel park.', 1, 8),
(1, 1, 'When I have to', 1, 9),
(2, 6, 'When space is limited, maybe.', 1, 9),
(3, 7, '2', 1, 9),
(4, 8, '1', 1, 9),
(5, 9, '2', 1, 9),
(6, 10, 'Just Say no to parallel parking. Less accidents.', 1, 9),
(7, 11, '2', 1, 1),
(8, 12, '10', 1, 1),
(9, 13,	'8', 1, 1),
(10, 14, '4', 1, 1),
(11, 15, '10', 1, 1),
(12, 16, '10', 1, 1),
(13, 17, '1', 1, 1),
(14, 18, '2', 1, 1),
(15, 19, '10', 1, 1),
(16, 20, '10', 1, 1),
(17, 21, '2', 1, 1),
(18, 22, 'This is a waste of money unless properly managed. This system is already over budget like all UTA projects with little results and extra construction right now. No its not worth it under the current governing influence of the project.', 1, 1),
(7, 11, '5', 1, 2),
(8, 12, '1', 1, 2),
(9, 13, '10', 1, 2),
(10, 14, '1', 1, 2),
(11, 15, '10', 1, 2),
(12, 16, '1', 1, 2),
(13, 17, '10', 1, 2),
(14, 18, '1', 1, 2),
(15, 19, '10', 1, 2),
(16, 20, '1', 1, 2),
(17, 21, '10', 1, 2),
(18, 22, 'Buses all the way', 1, 2),
(7, 11, '5', 1, 3),
(8, 12, '5', 1, 3),
(9, 13, '5', 1, 3),
(10, 14, '5', 1, 3),
(11, 15, '5', 1, 3),
(12, 16, '5', 1, 3),
(13, 17, '5', 1, 3),
(14, 18, '5', 1, 3),
(15, 19, '5', 1, 3),
(16, 20, '5', 1, 3),
(17, 21, '5', 1, 3),
(18, 22, 'Meh', 1, 3),
(7, 11, '7', 1, 4),
(8, 12, '9', 1, 4),
(9, 13, '9', 1, 4),
(10, 14, '8', 1, 4),
(11, 15, '4', 1, 4),
(12, 16, '7', 1, 4),
(13, 17, '6', 1, 4),
(14, 18, '3', 1, 4),
(15, 19, '8', 1, 4),
(16, 20, '9', 1, 4),
(17, 21, '4', 1, 4),
(18, 22, 'It could be better all together.', 1, 4),
(7, 11, '7', 1, 5),
(8, 12, '8', 1, 5),
(9, 13, '8', 1, 5),
(10, 14, '7', 1, 5),
(11, 15, '5', 1, 5),
(12, 16, '7', 1, 5),
(13, 17, '6', 1, 5),
(14, 18, '5', 1, 5),
(15, 19, '7', 1, 5),
(16, 20, '7', 1, 5),
(17, 21, '8', 1, 5),
(18, 22, 'It should work well, as long as people give it a chance. Regardless of the management it should hopefully benefit all in some form.', 1, 5),
(7, 11, '5', 1, 7),
(8, 12, '5', 1, 7),
(9, 13, '5', 1, 7),
(10, 14, '5', 1, 7),
(11, 15, '5', 1, 7),
(12, 16, '5', 1, 7),
(13, 17, '5', 1, 7),
(14, 18, '5', 1, 7),
(15, 19, '5', 1, 7),
(16, 20, '5', 1, 7),
(17, 21, '5', 1, 7),
(18, 22, 'Leroooooyyy!!! JENKINS!!!!', 1, 7),
(19, 23, 'Yes, Obviously', 1, 1),
(20, 29, 'Don`t really see a difference', 1, 1),
(21, 32, 'Don`t really see a difference', 1, 1),
(19, 24, 'Mostly, Yes', 1, 3),
(20, 28, 'All the way', 1, 3),
(21, 33, 'They stink', 1, 3),
(19, 26, 'Mostly, No', 1, 4),
(20, 30, 'They stink', 1, 4),
(21, 33, 'They stink', 1, 4),
(19, 27, 'No, I would avoid his films at all costs', 1, 5),
(20, 30, 'They stink', 1, 5),
(21, 32, 'Don`t really see a difference', 1, 5),
(19, 27, 'No, I would avoid his films at all costs', 1, 6),
(20, 30, 'They stink', 1, 6),
(21, 33, 'They stink', 1, 6),
(19, 26, 'Mostly, No', 1, 7),
(20, 29, 'Don`t really see a difference', 1, 7),
(21, 32, 'Don`t really see a difference', 1, 7),
(19, 25, 'His stuff is all right', 1, 9),
(20, 29, 'Don`t really see a difference', 1, 9),
(21, 31, 'All the way', 1, 9);

-- GET ALL CREATED TABLES
-- SELECT * FROM SurveyUsers;
-- SELECT * FROM SurveyAdmins;
-- SELECT * FROM Quiz;
-- SELECT * FROM QuizQuestions;
-- SELECT * FROM QuizAnswers;
-- SELECT * FROM QuizResults;
