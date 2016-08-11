"use strict";
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        console.log(this.greeting);
        return this.greeting;
    };
    return Greeter;
}());
exports.Greeter = Greeter;
;
