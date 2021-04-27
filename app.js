// Dependencies
const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");
const path = require("path");

// Directories
const LIB_DIR = path.resolve(__dirname, "./app/lib");

// Modules
const action = require(`${LIB_DIR}/action.js`);
const view = require(`${LIB_DIR}/view.js`);
const add = require(`${LIB_DIR}/add.js`);
const pool = require(`${LIB_DIR}/mysql.js`);

// function which prompts the user for what action they should take
const init = async () => {
  try {
    //Ask action question
    const data = await inquirer.prompt(action()[0]);

    //Switch statement to determine what to do per user answers
    switch (data.action) {
      case "View All Employees":
        view.all();
        break;
      case "View All Roles":
        view.allRole();
        break;
      case "View All Departments":
        view.allDept();
        break;
      case "Update Employee Role and/or Manager":
        update.updateEmpRoleAndMGR();
        break;
      case "Add Employee":
        add.addEmployee();
        break;
      case "Add Role":
        add.addRole();
        break;
      case "Add Department":
        add.addDept();
        break;
      case "View a Dept. Total Utilized Budget":
        view.budget();
        break;
      default:
        pool.end();
        break;
    }
  } catch (err) {
    console.log(err);
  }
};

init();

module.exports.init = init;
