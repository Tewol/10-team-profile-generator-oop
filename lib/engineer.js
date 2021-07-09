//
const Employee = require("./Employee");

// Engineer class
class Engineer extends Employee  {
  constructor(name, id, email, githubuser)  {
    super(name, id, email), githubuser, "engineer";
    this.githubuser = githubuser;
  }

  // get Github user name  
  getGithub() {
    //console.log(this.githubUserName);
  }

  //overridden to return Engineer
  getRole() {
    //return this.engineer;
    //console.log(this.github);
  }
}

module.exports = Engineer;

//const engineer = new Engineer('ID', 'engineerName', 'email');

//console.log('');

//car.getGithub();
//car.getRole();