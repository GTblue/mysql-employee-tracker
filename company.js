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
            "Update Employee Manager"
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
            }
    });
  }

function allEmployees() {}

function byDepartment() {}

function byManager() {}

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
          "software Engineer",
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
      console.log("Added employee")
      begin()}
    ) 
}


function removeEmployee() {
  inquirer.prompt ([
      {
        type: "input",
        name: "remove",
        message: "Which employee would you like to remove?"
      }
    ]).then((answers) => {
      console.log("Removed employee")
      begin()}
    )
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
      console.log("Updated employee's role")
      begin()}
    )  
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
      console.log("Updated Employee's Manager")
      begin()}
    )
}