const Employee = require('./Employee');

class Manager extends Employee  {
  constructor(id, name, email, officenumber)  {
    super(id, name, email, "manager");
    this.officenumber = officenumber;
  }

  //gets office number
  getofficenumber(){
    return this.officenumber;
  }

  //Overides parent getRole method to return 'Manager'
  getRole() {
    return "Manager";
  }
  
}

module.exports = Manager;
