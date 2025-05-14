// Write the function that takes two intergers (hours, minutes), converts them to seconds and adds them.

// function convertToSeconds(hours, minutes) {
//     const hoursinsecs = hours * 3600;
//     const mininsecs = minutes * 60;
//     const totalSeconds = hoursinsecs + mininsecs;
//     return totalSeconds;

//   }

// console.log(convertToSeconds(1, 30));

// Object
// let a = {
//   name: "Raj koli",
//   age: 18,
//   city: "Navi mumbai",
// };
// console.log(a);

// let person = {
//     name: "Raj koli",
//     age: 18,
//     city: "Navi mumbai",
//     Pname: function(){
//         console.log(this.name + " " + this.age);
//         return this.age;
//     }
// };

// person.Pname();

// Parameterized function
// function person(name,age,loc,){
//     this.name=name;
//     this.age=age;
//     this.loc=loc;

// }
// const p1= new person("Raj",18,"Navi mumbai");
// p1.gender= "Male";
// console.log(p1.gender)
// console.log(p1)

// prototype:




// function person(name, age, loc) {
//     this.name = name;
//     this.age = age;
//     this.loc = loc;
//     this.pname = function () {
//       console.log("Hi")
//       // console.log(this.name + " " + this.age + " " + this.loc);
    
//     };
//   }
//   const p1 = new person("Raj", 18, "Navi mumbai");
//   person.prototype.gender = "Male";
//   console.log(p1);




  class person{

    constructor(name, age, loc) {
        this.name = name;
        this.age = age;
        this.loc = loc;
      }
      pname() {
        console.log(this.name + " " + this.age + " " + this.loc);
        return this.age;
      }
    }
    const p1 = new person("Raj", 18, "Navi mumbai");

  



    


    // make a automotive product with 4 variant which will have its own feature and functionalities including  the feature of main product



    // class AutomotiveProduct {
    //     constructor(model, price ) {ccc
    //         this.model= model;
    //         this.price = price;
            
    //     }
    
       
    // }
    // const var1 = new AutomotiveProduct("chiron ","1cr");
    // var1.feature = "1100 bhp";
    // const var2 = new AutomotiveProduct("veyron",'10cr');
    // var2.feature = "900 bhp";
    // const var3 = new AutomotiveProduct("panigale",'2cr');
    // var3.feature = "727 bhp";
    // console.log(var1);
    // console.log(var2);
    // console.log(var3);


    // Hierarchical Inheritance Example

    
class Vehicle {
    constructor() {
    this.type = "Vehicle";
}

}
  
 
  class Car extends Vehicle {
    constructor() {
      super();
      this.name = "Car";
    }
  
 
  }
  
  class Bike extends Vehicle {
    constructor() {
      super(); 
      this.name = "Bike";
    }
  
  
  }
  
 
  const car = new Car();
  car.showType();  
  car.showName();  
  
  const bike = new Bike();
  bike.showType(); 
  bike.showName(); 