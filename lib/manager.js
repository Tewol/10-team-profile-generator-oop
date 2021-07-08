const Employee = require('./employee');

class Manager extends Employee  {
  constructor(id, name, email)  {
    super(id, name, email);
    this.officeNumber = officeNumber;
  }

  //Overridden to return 'Manager'
  getRole() {
    
  }
}

const manager = new Manager('ID', 'managerName', 'Email');

console.log('Manager Info');

manager.getRole();