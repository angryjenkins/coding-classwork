### Schema

CREATE DATABASE gyms_db;
USE gyms_db;

CREATE TABLE super_clubs
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	active BOOL,
	visit_count INT,
	PRIMARY KEY (id)
);
