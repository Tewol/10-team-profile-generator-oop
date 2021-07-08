const Employee = require('./employee');

class Intern extends Employee  {
  constructor(id, name, email)  {
    super(id, name, email);
    this.school = school;
  }

  getSchool() {
    console.log(this.school);
  }

  //overridden to return 'Intern'
  getRole(){

  }
}

const employee = new Employee(10, 'InternName', 'Email');
console.log('Intern Name');

intern.getSchool();
intern.getRole();