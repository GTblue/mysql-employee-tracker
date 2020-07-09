var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "company_tracker"
});

connection.connect(function(err) {
    if (err) throw err;
    begin();
  });


function begin() {
  inquirer
    .prompt({
          type: "choices"
          name: "options"
          message: "What would you like to do?"
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
            switch (answer.action) {
                case "View All Employees":
                allEmployees();
                break;
        
                case "Vice All Employees By Department":
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
  ])
}