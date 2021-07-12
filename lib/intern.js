const Employee = require('./employee');

// Intern class
class Intern extends Employee  {
  constructor(name, id, email, school )  {
    super(id, name, email, school, "intern");
    this.school = school;
  }

  //gets intern school name
  getSchool() {
    return this.school;
  }

  //overrieds parent's getRole method to return Intern
  getRole(){
    return "Intern"

  }
}

module.exports = Intern;
