class Interface {  
    checkRequiredMethods(methodNames) {
        setTimeout( () => {
            const loopLength = methodNames.length;
            let i = 0
            for (i; i<loopLength; i++) {
                if (typeof this[methodNames[i]] !== "function") {
                    this.throwNotAMethod(methodNames[i]);
                }
            }
        }, 0);
    }

    throwNotAMethod(methodName) {
        throw new Error(`error method ${methodName} is undefined or not a method`);
    }
}

class Parent extends Interface {
    constructor() {
        super()

        this.checkRequiredMethods([
            "m1",
            "m2",
            "m3",
            "m4"
        ]);
    }
}

class Child extends Parent {
    p1 = 0;
    p2 = "";
    p3 = false;
    p4 = [];
    p5 = {};

    constructor() {
        super();
    }

    m1() {}
    m2() {}
    m3() {}
    m4() {}
}

new Child();
