const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

//Testing constractor
describe("TDD Employee", () => {
    it("Does it get office number", () => {
        const property = new Manager("Hewan", 1, "test@dummy.com", 201);
        expect(property.officenumber).toBe(201);
    });

    describe("Does it get the office number?", () => {
        it("returns office number?", () => {
            const obj = new Manager("Hewan", 1, "test@dummy.com", 201);
            expect(obj.getofficenumber()).toBe(201);
        });
    });

    describe("Does it get the Role", () => {
        it("returens Manager as a role?", () => {
            const obj = new Manager("Hewan", 1, "test@dummy.com", "Manager");
            expect(obj.getRole()).toBe("Manager");
        });
    });

});
