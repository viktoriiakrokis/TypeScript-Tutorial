// two different syntaxix, but same actions

let array1: number[] = [1,2,3,4,5,6];
let array2: Array<number> = [1,2,3,4,5];

class objectGenericClass<TYPE1, TYPE2 extends string>{

    constructor(public value1: TYPE1, public value2: TYPE2){

    }
}

let object1 = new objectGenericClass("Hello", "String");
let object2 = new objectGenericClass<boolean, string>(true, "String");