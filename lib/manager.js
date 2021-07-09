const Employee = require('./Employee');

class Manager extends Employee  {
  constructor(id, name, email, officenumber)  {
    super(id, name, email, "manager");

    this.officenumber = officenumber;
  }

  //Overides parent getRole method to return 'Manager'
  getRole() {
    
  }
}

module.exports = Manager;

//const manager = new Manager('ID', 'managerName', 'Email');

//console.log('Manager Info');

//manager.getRole();