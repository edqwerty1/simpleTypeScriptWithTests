var Greeter = require('../main');
var greeter;

describe("Testing Greeter!", function () {
    beforeEach(function () {
        greeter = new Greeter.Greeter("Hi I am a test!!");       
    });

    it("When calling greet, should return correct greeting", function () {
        expect(greeter.greet()).toBe("Hi I am a test!!");
    });
});

