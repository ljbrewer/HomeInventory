DROP DATABASE IF EXISTS homeInventory_db;
CREATE DATABASE homeInventory_db;

USE homeInventory_db;

CREATE TABLE ownerTable(
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  primaryPhone BIGINT,
  cellPhone BIGINT,
  workPhone BIGINT
);

CREATE Table homeTable (
    id int AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    purchasedOn DATE,
    address1 VARCHAR(30),
    address2 VARCHAR(30),
    city VARCHAR(30),
    state VARCHAR(30),
    country VARCHAR(30),
    postalcode VARCHAR(15),
    policyNumber VARCHAR(30),
    owner_id INT, 
    FOREIGN KEY (owner_id) REFERENCES ownerTable(id) ON DELETE SET NULL
);

CREATE Table locationTable(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nameoflocation VARCHAR(30)
);

CREATE Table category(
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(100)
);

CREATE Table assetTable (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(30),
    purchasedOn DATE,
    description VARCHAR(200),
    condition VARCHAR(30),
    price DECIMAL,
    currentValue DECIMAL,
    model VARCHAR (25),
    serialno VARCHAR(30),
    owner_id INT,
    FOREIGN KEY (owner_id) REFERENCES ownerTable(id)
    ON Delete SET NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE SET NULL,
    comments TEXT
);