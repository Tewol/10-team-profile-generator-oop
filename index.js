//packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
//const generateMarkdown = require('');

let team = new Employee("Team Awsome")

// Creates an array of questions for user input
const addManager = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team Manager's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the team Manager's id?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the team Manager's email?"
    },
    {
      type: "input",
      name: "officenumber",
      message: "What is the team Manager's office number?"
    }

  ]).then( ({name, id, email, officenumber}) => {
    // instantiate a new Manager
    const addedManager = new Manager(name, id, email, officenumber)

    // add Engineer to Employee list
    //team.addToEmployeeList(addedManager);

    // go to menu to add engineer, intern or exit
    addEmployee();
  });
}

// Creates an array of questions for user input
const addEngineer =() => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team Engineer's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the team Engineer's id?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the team Engineer's email?"
    },
    {
      type: "input",
      name: "githubuser",
      message: "What is the Engineer's gitHub user name?"
    }

  ]).then( ({name, id, email, githubuser}) => {
    // instantiate a new Engineer
    const addedEngineer = new Engineer(name, id, email, githubuser)

    // add Engineer to Employee list
    //team.addToEmployeeList(addedEngineer);

    // go to menu to add engineer, intern or exit
    addEmployee();
  });
}

// Creates an array of questions for user input
const addIntern =() => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team Intern's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the team Intern's id?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the team Intern's email?"
    },
    {
      type: "input",
      name: "school",
      message: "What is the school name of the Intern?"
    }

  ]).then( ({name, id, email, school}) => {
    // instantiate a new Intern
    const addedIntern = new Intern(name, id, email, school)

    // add Intern to Employee list
    // team.addToEmployeeList(addedIntern);

    // go to menu to add engineer, intern or exit
    addEmployee();
  });
}

// Displays questions for adding engineer or intern to the team
const addEmployee = () => {
  inquirer.prompt([
    {
      type: "list",
      message: "What kind of team memeber would you like to add?",
      choices: ["engineer", "intern", "finish building my team"],
      name: "teammember"
    }
  ]).then( ({teammember}) => {
    switch(teammember){
      case "engineer":
        addEngineer();
        break;

      case "intern":
        addIntern();
        break;

      default:
        break;
    }
  })
}



// Displays a view of all employees
// Your global store has an inventory of all products.
//const viewAllEmployees = () => {
  //console.log(team.inventory[0]);
//}

// Function to initialize app
const init = () => {
  inquirer.prompt([
    {
      type: "list",
      message: "Choose an option:",
      choices: [ "Add Manager", "Add Engineer", "Add Intern"],
      name: "employeeType"
    }
  ]).then( resp => {
    switch( resp.employeeType ){
      case "Add Manager":
        addManager();
        break;

      case "Add Engineer":
        addEngineer();
        break;

      case "Add Intern":
        addIntern();
        break;

      default:
        break;
    }
  })
}

// Function call to initialize app
init();

/*
  // Function to write file
  function writeToFile(fileName, data) {
  return fs.writeFileSync (fileName, data)
  }

  // Function to initialize app
  function init() {
    // run inquirer
    inquirer.prompt(addManager)
    
    // Call generateMarkdown and send it to writeToFile()
    .then((data) => writeToFile('TEAMPROFILEGENERATOR.html', generateMarkdown(data)))
    .then(() => console.log("My team page successfully generated."))
    .catch((error) => console.log(error))
  }
*/