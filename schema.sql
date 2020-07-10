DROP DATABASE IF EXISTS company_tracker;
CREATE database company_tracker;

USE company_tracker;

CREATE TABLE department (
    PRIMARY KEY (id) INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,    
);

CREATE TABLE role (
    PRIMARY KEY (id)INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL, 
    PRIMARY KEY (id)
);

--Have a foreign key 

CREATE TABLE employee (
    PRIMARY KEY id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
);