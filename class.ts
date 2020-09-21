import {ICalc} from "./interface.ts";

class Plus implements ICalc {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    calc(): number {
        return this.x + this.y;
    }
}

class Multi implements ICalc {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    calc(): number {
        return this.x * this.y;
    }
}


console.log("学习interface和class")
let p = new Plus(2, 3);
console.log(p.calc())
p = new Multi(2, 3);
console.log(p.calc())