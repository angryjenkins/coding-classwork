

/* create database */
CREATE DATABASE mattsdb;

/* use database */
USE mattsdb;

/* create a table */
/* name role programminglanguage yearsexperience */
CREATE TABLE programmers2 (
  name                VARCHAR(30) NOT NULL,
  role                VARCHAR(30) NOT NULL,
  programminglanguage VARCHAR(30) NOT NULL,
  yearsexperience     INT         NOT NULL
);

/* insert some data */
INSERT INTO programmers2 (name, role, programminglanguage, yearsexperience) VALUES ("Zintis", "Frontend", "jQuery", 12);
INSERT INTO programmers2 (name, role, programminglanguage, yearsexperience) VALUES ("Neena", "Frontend", "express", 15);
INSERT INTO programmers2 (name, role, programminglanguage, yearsexperience) VALUES ("Jerome", "Backend", "React", 5);
INSERT INTO programmers2 (name, role, programminglanguage, yearsexperience) VALUES ("Luis", "Frontend", "jQuery", 2);

ALTER TABLE programmers2 ADD empID INT AUTO_INCREMENT PRIMARY KEY;


/* PRIMARY KEYS - CONTACT INFO */

CREATE TABLE contactInfo (
  phone   VARCHAR(30),
  email   VARCHAR(30),
  address VARCHAR(100),
  empID   INT
);

INSERT INTO contactInfo (phone, email, address, empID)
VALUES ("867-5309", "zintos@gmail.com", "1 First St. NYC", 1),
  ("777-7777", "jerome@gmail.com", "2 Second St, NYC", 2),
  ("888-8888", "neena@rutgers.edu", "3 Third Avenue, NYC", 3),
  ("123-4567", "luis@aol.com", "4 Fourth Place NYC", 4);

SELECT
  programmers2.empID,
  programmers2.name,
  programmers2.role,
  contactInfo.phone,
  contactInfo.email,
  contactInfo.address
FROM programmers2
  INNER JOIN contactInfo
    ON programmers2.empID = contactInfo.empID;
ORDER BY programmers2.empID;



/* select ALL data */
select * from programmers2;

/* Select name and yearsexperience */
select name, yearsexperience from programmers2;

/* Filter data to only those with 6 years experience */
select * from programmers2 where yearsexperience > 6;

/* Select All Data and Sort by yearsexperience */
select * from programmers2 order by yearsexperience DESC ;

/* Select All Data, Sort by YearsExperience, and Filter to only those over 6 years */
select * from programmers2 where yearsexperience > 6 order by yearsexperience asc;

/* Select all Data, Sort by YearsExperience, and retrieve only the two longest records */
select * from programmers2 order by yearsexperience desc limit 2;

/* Update Zintis name to Yintis */
update programmers2 set name = "Yintis" where name = "Zintis";