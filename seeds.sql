INSERT INTO department (name)
VALUES ("Finance"),("Engineering"),("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000.00, 1), ("Lead Engineer", 150000.00, 2), ("Salesperson", 80000.00, 3), ("Software Engineer", 120000.00, 2), ("Account Manager", 140000.00, 1);  

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Williams", 1, null), ("Robin", "Haywood", 2, null), ("Alia", "Smith", 3, 1), ("Justine", "Fisher", 4, 2), ("Mabel", "Simmons", 5, null);