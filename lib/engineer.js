//
const Employee = require("./Employee");

// Engineer class
class Engineer extends Employee  {
  constructor(name, id, email, githubuser)  {
    super(name, id, email, githubuser, "Engineer");
    this.githubuser = githubuser;
  }

  // get Github user name  
  getGithub() {
    return this.githubuser;
  }

  //overridden to return Engineer
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
