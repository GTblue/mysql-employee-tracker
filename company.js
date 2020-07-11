const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "blue14",
  database: "company_tracker"
});

connection.connect(function(err) {
    if (err) throw err;
    begin();
});


function begin() {
  inquirer.prompt({
          type: "list",
          name: "options",
          message: "What would you like to do?",
          choices: [
            "View All Employees",
            "View All Employees By Department",
            "View All Employees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "Exit"
          ]
    }).then(function(answer) {
      console.log(answer.options)
            switch (answer.options) {
                case "View All Employees":
                allEmployees();
                break;
        
                case "View All Employees By Department":
                byDepartment();
                break;
        
                case "View All Employees by Manager":
                byManager();
                break;
        
                case "Add Employee":
                addEmployee();
                break;
        
                case "Remove Employee":
                removeEmployee();
                break;

                case "Update Employee Role":
                updateRole();
                break;
        
                case "Update Employee Manager":
                updateManager();
                break;
                
                case "Exit":
                exit();
                break;
            }
    });
  }

function allEmployees() {
  // connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(m.first_name,' ', m.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee m ON employee.manager_id = m.id;",
  // (err, data) => {
  //   if (err) throw err;
  //   console.table(data);
  //   begin();
  // })
  begin()
}

function byDepartment() {
  connection.query("SELECT * FROM department", (err, data) => {
    if (err) throw err;
    console.table(data);
    begin();
    })
  }

function byManager() {
  connection.query("SELECT * FROM employee WHERE manager_id = ?", (err, data) => {
    if (err) throw err;
    console.table(data);
    begin();
    })
}

function addEmployee() {
  inquirer.prompt ([
      {
        type: "input",
        name: "addEmployeeFirst", 
        message: "What is the employee's first name?" 
      },
      {
        type: "input",
        name: "addEmployeeLast", 
        message: "What is the employee's last name?" 
      },
      {
        type: "list",
        name: "addEmployeeRole", 
        message: "What is the employee's role?", 
        choices: [
          "Sales Lead",
          "Salesperson",
          "Lead Engineer",
          "Software Engineer",
          "Account Manager",
          "Accountant"
        ]
      },
      {
        type: "input",
        name: "addNewEmployeeManager", 
        message: "Who is the employee's manager?" 
      }
    ]).then((answers) => {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answers.addEmployeeFirst,
          last_name: answers.addEmployeeLast,
          role_id: answers.addEmployeeRole,
          manager_id: answers.addNewEmployeeManager
        },
        function(err) {
          if (err) throw err;
          console.log("Added employee")
        }
      )
      begin()
    })
}

function removeEmployee() {
  inquirer.prompt ([
      {
        type: "input",
        name: "remove",
        message: "Which employee would you like to remove?"
      }
    ]).then((answers) => {
      connection.query(
        "DELETE FROM employee",
        function(err) {
          if (err) throw err;
          console.log("Removed Employee");
          start();
        }
      );
      begin()
    })
}

function updateRole() {
  inquirer.prompt ([
      {
        type: "input",
        name: "whichEmployee",
        message: "Which employee would you like to update their role in the company?"
      },
      {
        type: "list",
        name: "updateEmployeeRole", 
        message: "What is the employee's role?", 
        choices: [
          "Sales Lead",
          "Salesperson",
          "Lead Engineer",
          "Software Engineer",
          "Account Manager",
          "Accountant"
        ]
      }
    ]).then((answers) => {
      connection.query(
        "UPDATE INTO role SET ?",
        {
          title: answers.whichEmployee,
          role_id: answers.updateEmployeeRole,
        },
        function(err) {
          if (err) throw err;
          console.log("Added employee");
          // re-prompt the user for if they want to bid or post
        }
      );
      begin()
    }) 
}

function updateManager() {
  inquirer.prompt ([
      {
        type: "input",
        name: "updateEmployeeManager", 
        message: "Which employee's manager would you like to update?" 
      },
      {
        type: "input",
        name: "updateSelectedEmployee", 
        message: "Which employee do you want to set as manager for the selected employee?" 
      }
    ]).then((answers) => {
      connection.query(
        "UPDATE INTO employee SET ?",
        {
          title: answers.whichEmployee,
          role_id: answers.updateEmployeeRole,
        },
        function(err) {
          if (err) throw err;
          console.log("Added employee");
          // re-prompt the user for if they want to bid or post
        }
      );
      begin()
    })
}

function exit(){
  connection.end();
};