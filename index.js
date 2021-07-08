// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require('');

// Creates an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "Name"
    },
    {
        type: "input",
        message: "What is the team manager's id?",
        name: "Id"
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "Email"
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "Office-Number"
    },
    {
        type: "input",
        message: "which type of team member would you like to add?",
        name: "Team-Member"
    }
  ];

  // Function to write file
  function writeToFile(fileName, data) {
    return fs.writeFileSync (fileName, data)
  }
  
  // Function to initialize app
  function init() {
    // run inquirer
    inquirer.prompt(questions)
      // in the then() block, call generateMarkdown
      // once you get the markdown content back, send it to writeToFile()
      //.then((data) => writeToFile('READMEGENERATED.md', generateMarkdown(data)))
      .then(() => console.log("My team page successfully generated."))
      .catch((error) => console.log(error))
  }
  // Function call to initialize app
  init();