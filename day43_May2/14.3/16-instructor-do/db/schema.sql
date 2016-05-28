### Schema

CREATE DATABASE demo_db;
USE demo_db;

CREATE TABLE things
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	state BOOL,
	PRIMARY KEY (id)
);