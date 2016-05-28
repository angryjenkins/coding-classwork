

/* create database */
CREATE DATABASE mattsdb;

/* use database */
USE mattsdb;

/* create a table */
/* name role programminglanguage yearsexperience */
CREATE TABLE programmers (
  name VARCHAR(30) NOT NULL,
  role VARCHAR(30) NOT NULL,
  programminglanguage VARCHAR(30) NOT NULL,
  yearsexperience int NOT NULL
);

/* insert some data */
INSERT INTO programmers(name,role,programminglanguage,yearsexperience) VALUES ("Zintis","Frontend","jQuery",12);
INSERT INTO programmers(name,role,programminglanguage,yearsexperience) VALUES ("Neena","Frontend","express",15);
INSERT INTO programmers(name,role,programminglanguage,yearsexperience) VALUES ("Jerome","Backend","React",5);
INSERT INTO programmers(name,role,programminglanguage,yearsexperience) VALUES ("Luis", "Frontend","jQuery",2);


/* QUERIES */

/* select ALL data */
select * from programmers;

/* Select name and yearsexperience */
select name, yearsexperience from programmers;

/* Filter data to only those with 6 years experience */
select * from programmers where yearsexperience > 6;

/* Select All Data and Sort by yearsexperience */
select * from programmers order by yearsexperience DESC ;

/* Select All Data, Sort by YearsExperience, and Filter to only those over 6 years */
select * from programmers where yearsexperience > 6 order by yearsexperience asc;

/* Select all Data, Sort by YearsExperience, and retrieve only the two longest records */
select * from programmers order by yearsexperience desc limit 2;

/* Update Zintis name to Yintis */
update programmers set name = "Yintis" where name = "Zintis";