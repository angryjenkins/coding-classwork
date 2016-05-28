CREATE DATABASE day41_coolness_attitude;
USE day41_coolness_attitude;

CREATE TABLE coolness (
	id int AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	coolness_points int NOT NULL,
	attitude varchar(45) NOT NULL,
	PRIMARY KEY(id)
); 

-- data import
LOAD DATA LOCAL INFILE '~/Documents/ru_coding/coding-classwork/day41_Apr27/41.03_classActivity/cool_data.csv' INTO TABLE coolness;

