/* SQL CHEATCHEAT*/

/* Create Database */
create database ahmedsnewdb;

/* Use Database */
use ahmedsnewdb;

/* CREATE A TABLE */
/* Name	Role	ProgrammingLanguage	YearsExperience*/
CREATE TABLE programmers(
  name VARCHAR(30),
  role VARCHAR(30),
  programminglanguage varchar(30),
  yearsexperience int
);

/* Insert Data */
INSERT INTO programmers(name, role, programminglanguage, yearsexperience)
  VALUES ("Zintis", "Frontend", "Jquery", 12), ("Jerome",	"Backend",	"Express",	10);

INSERT INTO programmers(name, role, programminglanguage, yearsexperience)
    VALUES ("Luis", "Frontend", "Jquery", 5), ("Neena", "Frontend", "React", 15);

/* Select All Data */
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

select * from programmers;

/*
Select
from
order by
limit

insert
create
use

update / set 
 */