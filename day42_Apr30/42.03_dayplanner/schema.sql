### Schema
/*

CREATE DATABASE day_planner_db;
USE day_planner_db;

CREATE TABLE day_planner
(
id int NOT NULL AUTO_INCREMENT,
plan varchar(255) NOT NULL,
date TIMESTAMP,
PRIMARY KEY (id)
);

SHOW COLUMNS from day_planner;

INSERT INTO day_planner (plan) VALUES ('Plan to watch some TV.');

SELECT * FROM day_planner;

DROP DATABASE day_planner_db;

*/