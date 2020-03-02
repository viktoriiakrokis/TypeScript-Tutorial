abstract class People {

    displayDate(){
        console.log("some data")
    }
}

class Kids extends People{

}

let kidsClass = new Kids;

kidsClass.displayDate();