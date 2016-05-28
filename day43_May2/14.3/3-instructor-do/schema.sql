### Schema
CREATE DATABASE day43_pets_shop_db;
USE day43_pets_shop_db;

CREATE TABLE pet_buyers
(
	id int NOT NULL AUTO_INCREMENT,
	buyer_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE pets
(
	id int NOT NULL AUTO_INCREMENT,
	animal_breed varchar(255) NOT NULL,
	animal_name varchar(255) NOT NULL,
	price int NOT NULL,
	buyer_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (buyer_id) REFERENCES pet_buyers(id)
);