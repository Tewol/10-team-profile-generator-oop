//packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
//const http = require('http')
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

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

    // go to menu to add engineer or intern or finish adding employee. 
    addEmployee();

    // instantiate a new Manager
    //const addedManager = new Manager(name, id, email, officenumber)

    data = `  <div class="card">
      <div class="card-header">
        <h3 class="name"> ${name}</h3>
        <h3 class="titile" ><i class="fas fa-female"> </i> Manager </h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="id"> ID: ${id} </li>
        <li class="email"> Email: ${email}</li>
        <li class="officeNumber"> Office Num.: ${officenumber}</li>
      </ul>
    </div>`;

    fs.appendFile("./dist/index.html", data, function (err) {
      if (err) {
          return reject(err);
      };
  });
   
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
    //const addedEngineer = new Engineer(name, id, email, githubuser)
    
    // go to menu to add engineer, intern or exit
    addEmployee();

    data = `  <div class="card">
      <div class="card-header">
        <h3 class="name"> ${name} </h3>
        <h3 class="titile"> <i class="fas fa-terminal"> </i> Engeener </h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="id"> ID: ${id}</li>
        <li class="email"> Email: ${email}</li>
        <li class="gitHub"> GitHub: ${githubuser}</li>
      </ul>
    </div>`;

    fs.appendFile("./dist/index.html", data, function (err) {
      if (err) {
          return reject(err);
      };
    });
    
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
    //const addedIntern = new Intern(name, id, email, school)

    // go to menu to add engineer, intern or exit
    addEmployee();
  
    data = `<div class="card">
      <div class="card-header">
        <h3 class="name"> ${name} </h3>
        <h3 class="titile"> <i class="fas fa-user-graduate"> </i> Intern </h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="id"> ID: ${id} </li>
        <li class="email"> Email: ${email}</li>
        <li class="school"> School: ${school}</li>
      </ul>
    </div>`
    
    fs.appendFile("./dist/index.html", data, function (err) {
      if (err) {
        return reject(err);
      };
    }); 

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

// Function to initialize app
const init = () => {
  //htmlHeader function call.
  htmlHeader();
  
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

//This function writes begins the output page. 
function htmlHeader(){
  const header = `<!DocType html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css" />
    <title> My Team Profile Generator </title>
  </head>

  <header class="jumbotron">
    <h1 class="display-3"> Team Awsome</h1>
  </header>

  <body>
    <div class="row card-deck">`;
      fs.writeFile("./dist/index.html", header, function(err){
        if (err) {
          console.log(err);
        }
      });
}


function htmlFooter(){
  const footer = `  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
  <script src="./index.js"></script>
</body>

</html>`;
  fs.appendFile("./dist/index.html", footer, function (err) {
    if (err) {
      return reject(err);
    };
  }); 
}


// Function call to initialize app
init();