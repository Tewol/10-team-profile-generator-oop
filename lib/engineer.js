const Employee = require('./employee');

class Engineer extends Employee  {
  constructor(id, name, email)  {
    super(id, name, email);
    this.githubUserName = githubUserName;
  }

  getGithub() {
    console.log(this.githubUserName);
  }

  //overridden to return 'Engineer'
  getRole() {
    //console.log(this.github);
  }
}

const engineer = new Engineer('ID', 'engineerName', 'email');

console.log('');

car.getGithub();
car.getRole();