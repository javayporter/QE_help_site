-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS qe_site_db;
-- Creates the "animals_db" database --
CREATE DATABASE qe_site_db;

-- Makes it so all of the following code will affect animals_db --
USE qe_site_db;

-- Creates the table "people" within animals_db --
CREATE TABLE users (
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    eng_role VARCHAR(50) NULL,
    PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO people (first_name, last_name, email, user_password, eng_role)
VALUES ("Javay", "Porter", "javay.porter@angieslist.com", "angiesList123", "QE");

INSERT INTO people (first_name, last_name, email, user_password, eng_role)
VALUES ("Erick", "Orellana", "erick.orellana@angieslist.com", "angiesList123", "QE");

INSERT INTO people (first_name, last_name, email, user_password, eng_role)
VALUES ("Andrew", "Gutowski", "andrew.gutowski@angieslist.com", "angiesList123", "QE");


