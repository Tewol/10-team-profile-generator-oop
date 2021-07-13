const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

//Testing constractor
describe("TDD Employee", () => {
   

    describe("Does it get github user name?", () => {
        it("returns github user name?", () => {
            const obj = new Engineer("Hewan", 1, "test@dummy.com", "github.com/username") //act
            expect(obj.getGithub()).toBe("github.com/username");//assert
        });
    });

    describe("Does it get the Role", () => {
        it("returens Engineer as a role?", () => {
            const obj = new Engineer("Hewan", 1, "test@dummy.com", "Engineer");
            expect(obj.getRole()).toBe("Engineer");
        });
    });

});