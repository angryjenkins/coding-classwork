CREATE DATABASE starwars;
USE starwars;

CREATE TABLE `starwars`.`characters` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NOT NULL,
  `role` VARCHAR(60) NOT NULL,
  `age` INT NOT NULL,
  `forcePoints` INT NOT NULL,
  PRIMARY KEY (`id`)
);

LOAD DATA LOCAL INFILE 'starwars.csv' INTO TABLE characters;