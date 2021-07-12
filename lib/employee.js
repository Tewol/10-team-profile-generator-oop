// Employee class
class Employee {
  constructor(id, name, email)  {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  //gets Employee name
  getName(){
    return this.name;
  }

  //gets Employee ID
  getId(){
    return this.id;
  }

  //gets Email address
  getEmail(){
    return this.email;
  }

  //gets Employee Role
  getRole(){
    return "Employee";
  }

}

module.exports = Employee;
