-- create the tables for our actors
CREATE TABLE `actors` (
   `actorid` int(5) unsigned NOT NULL AUTO_INCREMENT,
   `firstname` varchar(100) NOT NULL,
   `lastname` varchar(100) DEFAULT NULL,
   'dob' char(10)
   PRIMARY KEY (`actorid`)
);
-- insert data into the tables
INSERT INTO actors
VALUES (1, "Jennifer", "Lawrence", "08-15-1990"),
   (2, "Johnny", "Depp", "06-09-1963"),
   (3, "Dwayne", "Johnson", "05-02-1972"),
   (4, "Chris", "Pratt", "06-21-1979"),
   (5, "Angelina", "Jolie", "06-04-1975");