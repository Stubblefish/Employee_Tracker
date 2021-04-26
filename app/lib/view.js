// Dependencies
const inquirer = require("inquirer");

// Modules
const pool = require("./mysql");
const app = require("../../app");

//View data functions
// ==================== //
//View all employees
const all = () => {
  pool.query(
    'SELECT CONCAT(employee.first_name," " ,employee.last_name) AS full_name, title, salary, name, CONCAT(employee2.first_name," ", employee2.last_name) AS manager_id FROM employee INNER JOIN role on employee.role_id = role.id INNER JOIN department ON role.department_id = department.id LEFT JOIN employee AS employee2 ON employee.manager_id = employee2.id  ORDER BY full_name ASC;',
    (err, res) => {
      if (err) throw err;
      //Display data
      console.log("\n");
      console.table(
        ["Name", "Role", "Salary", "Department", "Manager"],
        res.map((role) => [
          role.full_name,
          role.title,
          role.salary,
          role.name,
          role.manager_id,
        ])
      );
      console.log("\n");
      app.init();
    }
  );
};

//View all roles
const allRole = () => {
  pool.query(
    "SELECT title, salary, name FROM role INNER JOIN department ON role.department_id = department.id ORDER BY title ASC;",
    (err, res) => {
      if (err) throw err;
      //Display data
      console.log("\n");
      console.table(
        ["Role", "Salary", "Department"],
        res.map((role) => [role.title, role.salary, role.name])
      );
      console.log("\n");
      app.init();
    }
  );
};

//View all departments
const allDept = () => {
  pool.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    //Display data
    console.log("\n");
    console.table(
      ["Department"],
      res.map((dept) => [dept.name])
    );
    console.log("\n");
    app.init();
  });
};

module.exports = {
  all,
  allRole,
  allDept,
};
