function stringFunction() {
    console.log("Hello I'm a string");
}
;
function cal(val1, val2) {
    var total = val1 + val2;
    return total;
}
cal(2, 3);
var universal; // define type of function
universal = cal;
console.log(universal(2, 3));
