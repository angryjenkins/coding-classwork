### Schema
CREATE DATABASE feel_state_db;
USE feel_state_db;

CREATE TABLE feel_states
(
	id int NOT NULL AUTO_INCREMENT,
	state varchar(255) NOT NULL,
	date TIMESTAMP,
	PRIMARY KEY (id)
);