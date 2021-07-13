const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

//Testing constractor
describe("TDD Employee", () => {
    it ("instantiate employee object", () => {
        const obj = new Intern();
        expect(typeof(obj)).toBe("object");
    });

    describe("Does it get the school name?", () => {
        it("returns school name", () => {
            const univeristy = "UofM";
            const obj = new Intern("Hewan", 1, "test@dummy.com",univeristy);
            expect(obj.getSchool()).toBe(univeristy);
        });
    });

    describe("Does it get the Role", () => {
        it("returens Intern as a role?", () => {
            const obj = new Intern("Hewan", 1, "test@dummy.com","Intern");
            expect(obj.getRole()).toBe("Intern");
        });
    });

});