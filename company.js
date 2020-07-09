var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
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
          type: "checkbox",
          name: "options",
          message: "What would you like to do?",
          choices: [
            "View All Employees",
            "Vice All Employees By Department",
            "View All Employees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager"
          ]
    }).then(function(answer) {
            switch (answer) {
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
          }
      )
      // .catch(error => {
      //   if(error.isTtyError) {
      //     // Prompt couldn't be rendered in the current environment
      //   } else {
      //     // Something else when wrong
      //   }
}

// function allEmployees()
//     //console.log

// function byDepartment()

// function byManager()

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
        type: "choices",
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
      console.log("Added employee", JSON.stringify(answers))
      }
    )

    begin()
}

function removeEmployee() {
  inquirer.prompt ([
      {
        type: "input",
        name: "remove",
        message: "Which employee would you like to remove?"
      }
    ]).then(
        console.log("Removed employee from the database")
    )
    begin()
}

function updateRole() {
  inquirer.prompt ([
      {
        type: "choices",
        name: "whichEmployee", 
        message: "What is the employee's role?" 
      },
      {
        type: "choices",
        name: "updateEmployeeRole", 
        message: "What is the employee's role?", 
        choices: [
          "Sales Lead",
          "Salesperson",
          "Lead Engineer",
          "software Engineer",
          "Account Manager",
          "Accountant"
        ]
      }
    ]).then(
      console.log("Updated role")
    )

      begin()
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
        name: "updateEmployeeManager", 
        message: "Which employee do you want to set as manager for the selected employee?" 
      }
    ]).then(
      console.log("Updated Employee's Manager")
    );
}