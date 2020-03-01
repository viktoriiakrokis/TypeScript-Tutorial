function stringFunction() {

    console.log("Hello I'm a string")

};
//define accepted type of parameters
function cal(val1: number, val2: number): number{

    let total: number = val1 + val2;
    return total;
}

cal(2,3);


let universal: (value1: number, value2: number)=>number;// define type of function

universal =  cal;
console.log(universal(2,3));