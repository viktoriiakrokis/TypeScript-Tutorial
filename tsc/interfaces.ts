// Interface Inheritance

interface AutomobileInterface{
    brand?: string, // questions mark makes this parameter optional
    speed?: number,
    speedMethod?(velocidad: number): void
}

interface AutomobileInterface2 extends AutomobileInterface{
    brand: string;
    speed?: number;
}

const automibile2: AutomobileInterface2 = {
    brand: "Porsche",
}

const automibile: AutomobileInterface = {
    brand: "BMW",
    speed: 200, 

    speedMethod(){
        console.log(`this ${this.brand} is going at ${this.speed} miles an hour`)
    }
}



function car1(automibile){
    automibile.speed = 500;

    console.log(`this ${automibile.brand} is going at ${automibile.speed} miles an hour`);
}

// car1(automibile);

class AutoMobileClass implements AutomobileInterface{
    brand: string;
    speed: number;

    speedMethod(speed){
        console.log(`Hi my car is going at ${speed}`);  
    }  
}

let carObject = new AutoMobileClass();

carObject.speedMethod(1000);