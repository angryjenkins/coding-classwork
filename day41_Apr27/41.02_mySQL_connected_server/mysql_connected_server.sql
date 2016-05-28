CREATE DATABASE day41_wizard_schools;
USE day41_wizard_schools;

CREATE TABLE schools (
id int AUTO_INCREMENT,
name varchar(30) NOT NULL,
PRIMARY KEY(id)
); 

INSERT INTO schools (name) VALUES ("Hogwarts School of Witchcraft");
INSERT INTO schools (name) VALUES ("Castelobruxo");
INSERT INTO schools (name) VALUES ("Durmstrang Institute");
INSERT INTO schools (name) VALUES ("Beauxbatons Academy of Magic");