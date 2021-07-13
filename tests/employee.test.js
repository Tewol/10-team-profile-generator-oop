const Employee = require("../lib/Employee");

describe("TDD Employee", () => {
    it ("instantiate employee object", () => {
        const obj = new Employee();
        expect(typeof(obj)).toBe("object");
  });


  it("Does it take name", () => {
      //const name = "Hewan";
      const property = new Employee(1, "Hewan", "test@dummy.com");
      expect(property.name).toBe("Hewan");
  });

  it("Does it take ID", () => {
      const property = new Employee(1, "Hewan", "test@dummy.com");
      expect(property.id).toBe(1);
  });

  it("Can set email via constructor argument", () => {
      const property = new Employee(1, "Hewan", "test@dummy.com");
      expect(property.email).toBe("test@dummy.com");
  });

  describe("getName function", () => {
      it("Does it return name?", () => {
          //const name = "Hewan";
          const obj = new Employee(1, "Hewan", "test@dummy.com");
          expect(obj.getName()).toBe("Hewan");
      });
  });
    
  describe("getId function", () => {
      it("Does it return Id?", () => {
          const obj = new Employee(1, "Hewan", "test@dummy.com");
          expect(obj.getId()).toBe(1);
      });
  });
      
  describe("getEmail method", () => {
      it("Does it return email", () => {
          const obj = new Employee(1, "Hewan", "test@dummy.com");
          expect(obj.getEmail()).toBe("test@dummy.com");
      });
  });
      
  describe("getRole method", () => {
      it(" Does it return role = Employee", () => {
          const obj = new Employee(1, "Hewan", "test@dummy.com", "Employee");
          expect(obj.getRole()).toBe("Employee");
      });
  });

});
