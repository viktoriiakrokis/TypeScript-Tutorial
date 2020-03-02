var People = /** @class */ (function () {
    function People() {
    }
    People.prototype.displayDate = function () {
        console.log("some data");
    };
    return People;
}());
var peopleClass = new People;
peopleClass.displayDate();
