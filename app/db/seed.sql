INSERT INTO
    employee_db.department (name)

VALUES
    ('Marketing'),
    ('Human Resources'),
    ('Accounting'),
    ('Customer Service'),
    ('Facilities');

INSERT INTO 
    employee_db.role (title, salary, department_id)

VALUES
    ('Manager', 90000, 1),
    ('Marketing Agent', 70000, 1),
    ('Manager', 80000, 2),
    ('HR Coordinator', 60000, 2),
    ('Manager', 70000, 3),
    ('Representative', 50000, 3),
    ('Manager', 175000, 4),
    ('Controller', 120000, 4),
    ('Accountant', 60000, 4),
    ('Manager', 70000, 5),
    ('Office Manager', 50000, 5),
    ('Maintenance', 45000, 5);

INSERT INTO
    employee_db.employee (first_name, last_name, title)

VALUES
    ('Billy', 'Bob', 'Manager'),
    ('Joe', 'Thorton', 'Controller'),
    ('Justin', 'Who', 'Maintenance'),
    ('Jackson', 'Pollock', 'HR Coordinator'),
    ('Ted', 'Nudgent', 'Accountant'),
    ('Natalie', 'Kramer', 'Office Manager'),
    ('Nicholas', 'Kringle', 'Representative');
