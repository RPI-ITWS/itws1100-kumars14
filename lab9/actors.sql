-- create the tables for our actors
CREATE TABLE `actors` (
   `actorid` int(20) NOT NULL AUTO_INCREMENT,
   `firstname` char(100) NOT NULL,
   `lastname` char(100) NOT NULL,
   'birthday' char(100) DEFAULT NULL,
   PRIMARY KEY (`actorid`)
);
-- insert data into the tables
INSERT INTO actors
VALUES (1, "Angelina", "Jolie", "06/04/1975"),
   (2, "Chris", "Pratt", "06/21/1979"),
   (3, "Jennifer", "Lawrence", "08/15/1990"),
   (4, "Emma", "Stone", "11/06/1988"),
   (5, "Timothée", "Chalamet", "12/27/1995");


