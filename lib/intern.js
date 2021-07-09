const Employee = require('./employee');

// Intern class
class Intern extends Employee  {
  constructor(name, id, email, school )  {
    super(id, name, email, school, "intern");
    this.school = school;
  }

  //gets intern school name
  getSchool() {
    //console.log(this.school);
  }

  //overrieds parent's getRole method to return Intern
  getRole(){
    //return this.intern

  }
}

module.exports = Intern;

//const intern = new Employee(10, 'InternName', 'Email');

//console.log(name);

//intern.getSchool();
//intern.getRole();