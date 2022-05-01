//packages
const fs = require("fs");
const inquirer = require("inquirer");

//feeds user input to html template
const generateHTML = require("./src/generateHTML");

//classes
const Manager = require("./lib/Manager");

const Engineer = require("./lib/Engineer");

const Intern = require("./lib/Intern");

//questions 
const employees = [];

//Manager object gathers manager details & gives the wizard a prompt to add other employee details
const askManager = [{
    type: "input",
    name: "name",
    message: "Please input the manager's name.",
},
{
    type: "input",
    name: "id",
    message: "Please input the manager's id.",
},
{
    type: "input",
    name: "email",
    message: "Please input the manager's email.",
},
{
    type: "input",
    name: "officeNumber",
    message: "Please input the manager's office number.",
},
{
    type: "list",
    name: "employeeList",
    message: "Select the role of the team member you'd like to add next. If you are done, select \"I'm done.\"",
    choices: ["Engineer", "Intern", "I'm done."],
},
];

//Engineer method does the same as manager object but as a function
const askEngineer = () => {
    inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "Please input the engineer's name.",
            },
            {
                type: "input",
                name: "id",
                message: "Please input the engineer's ID.",
            },
            {
                type: "input",
                name: "email",
                message: "Please input the engineer's email.",
            },
            {
                type: "input",
                name: "GitHub",
                message: "Please input the engineer's GitHub username.",
            },
            {
                type: "list",
                name: "employeeList",
                message: "Select the role of the team member you'd like to add next. If you are done, select \"I'm done.\"",
                choices: ["Engineer", "Intern", "I'm done."],
            },
        ])
        .then((data) => {
            employees.push(
                new Engineer(data.name, data.id, data.email, data.GitHub)
            );
            if (data.employeeList === "Engineer") {
                askEngineer();
            } else if (data.employeeList === "Intern") {
                askIntern();
            } else {
                let data = generateHTML(employees);
                fs.writeFileSync("./dist/employees.html", data, "utf-8");
            }
        });
};

//Intern method functions same as engineer method
const askIntern = () => {
    inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "PLease input the intern's name.",
            },
            {
                type: "input",
                name: "id",
                message: "Please input the intern's ID.",
            },
            {
                type: "input",
                name: "email",
                message: "Please input the intern's email address.",
            },
            {
                type: "input",
                name: "school",
                message: "Please input the intern's school.",
            },
            {
                type: "list",
                name: "employeeList",
                message: "Select the role of the team member you'd like to add next. If you are done, select \"I'm done.\"",
                choices: ["Engineer", "Intern", "I'm done."],
            },
        ]).then((data) => {
            employees.push(
                new Intern(data.name, data.id, data.email, data.school)
            );
            if (data.employeeList === "Engineer") {
                askEngineer();
            } else if (data.employeeList === "Intern") {
                askIntern();
            } else {
                let data = generateHTML(employees);
                fs.writeFileSync("employees.html", data, "utf-8");
            }
        });
};

//wizard prompt
const init = () => {
    inquirer.prompt(askManager).then((data) => {
        employees.push(
            new Manager(data.name, data.id, data.email, data.officeNumber)
        );
        if (data.employeeList === "Engineer") {
            askEngineer();
        } else if (data.employeeList === "Intern") {
            askIntern();
        } else {
            //end function here and generateHTML
            var data = generateHTML(employees);
            fs.writeFileSync("./dist/employees.html", data, "utf-8");
        }
    });
};

//runs wizard
init();



