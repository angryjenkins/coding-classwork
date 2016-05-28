

/* create database */
CREATE DATABASE mattsdb;

/* use database */
USE mattsdb;

/* create a table */
/* name role programminglanguage yearsexperience */
CREATE TABLE programmers (
  name VARCHAR(30),
  role VARCHAR(30),
  programminglanguage VARCHAR(30),
  yearsexperience int
);

/* insert some data */
INSERT INTO programmers(name,role,programminglanguage,yearsexperience) VALUES ("Zintis","Frontend","jQuery",12),("")


