module.exports = () => [
  [
    //Initial questions for the user
    {
      type: "list",
      name: "action",
      message: "What do you want to do?",
      choices: [
        "View All Employees",
        "View All Roles",
        "View All Departments",
        "Update Employee Role and/or Manager",
        "Add Employee",
        "Add Role",
        "Add Department",
        "Quit",
      ],
    },
  ],
];
