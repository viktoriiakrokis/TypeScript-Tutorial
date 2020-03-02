var automibile = {
    brand: "BMW",
    speed: 200,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles an hour");
    }
};
function car1(automibile) {
    automibile.speed = 500;
    console.log("this " + automibile.brand + " is going at " + automibile.speed + " miles an hour");
}
// car1(automibile);
var AutoMobileClass = /** @class */ (function () {
    function AutoMobileClass() {
    }
    AutoMobileClass.prototype.speedMethod = function (speed) {
        console.log("Hi my car is going at " + speed);
    };
    return AutoMobileClass;
}());
var carObject = new AutoMobileClass();
carObject.speedMethod(1000);
