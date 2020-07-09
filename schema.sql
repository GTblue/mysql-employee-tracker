DROP DATABASE IF EXISTS company_tracker;
CREATE database company_tracker;

USE company_tracker;

CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30 NOT NULL),
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL 
    PRIMARY KEY (id)
)

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
)