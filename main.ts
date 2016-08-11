export class Greeter {
    constructor(public greeting: string) { }
    greet() {
        console.log(this.greeting);
        return this.greeting;
    }
};

