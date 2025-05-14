// function example() {
//     let a = 10;
//     let b = "Hello";
//     let c = true;
//     let d = [1, 2, 3];
//     console.log(a, b, c, d);
// }

// example();


// const person1={
//     name: "Pranav",
//     age:30,
//     city: "Thane"

// };
// const person={
//     fullname: function(){
//         return this.firtName + " "
//         + this.lastname;
//     }

// }


// console.log("Hello")

// const person={
//     Pname: function(){
//         console.log(this.name + " " + this.age);
//         return this.age;
//     }

// }
// const person1={
//     name: "Soumi",
//     age:30,
//     city: "Gaon"

// };

// person.Pname.call(person1);



// arr = [1,2,3,4,5,6,7,8,9,10]

// let iterator = arr[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


function anyfunction(){
    console.log("hi my name is Pranav");
    return 1;
    console.log(" mera yaishu , mera yaishu");
}
anyfunction();



function *gen(){
    console.log("hi my name is Pranav");
    yield 1;
    console.log(" mera yaishu , mera yaishu");
    yield 2;
    console.log(" kfdsifheifhewfweif");;
}



const g = gen();
console.log(g.next());
console.log(g.next());      
console.log(g.next());
console.log(g.next());






let rows = 6;
for (let i = 1; i <= rows; --i) {
    let star = "";
    for (let j = 1; j <=  i; j++) {
        star+= "*";
    }
    console.log(star);
}




function myDisplay(some){
    console.log(some)
}

let myDisplay = new Promise(function(myDisplay,myReject){
    let x = 0;
    if(x==0){
        myResolve("Ok");
    }
    else{
        myReject("Error");
    }
}
);

myPromise.then(
    function(value) {myDisplay(value);},
    function(error){myDisplay(error);}

);




function displayMessage(msg) {
    console.log(msg);
}

let x = 5;

let myPromise = new Promise((resolve, reject) => {
    if (x > 0) {
        resolve("kjchcw");
    } else {
        reject("dnqkdqd");
    }
});

myPromise.then(displayMessage).catch(displayMessage);

myPromise
    .then(displayMessage)  
    .catch(displayMessage);



// another way to use promise
async function myFunction() {
    return 8+2;
}

myFunction().then(
    function(value){
        console.log(value);
    },
    function(error){
        console.log(error);
    }
)





async function myfunction() {
    let pro = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Hello world inner")
            console.log("Hello world")
    },2000)
    });  



let result = await pro;
console.log(result)
}
myfunction().then(
    function(value) {console.log(value)},
    function(error) {console.log(error)}
)








function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "This is the fetched data" });
      }, 2000); 
    });
  }
  
  async function processData() {
    try {
      console.log("Fetching data...");
      const result = await fetchData();
      console.log("Data fetched:", result.data);
      return result.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  
  processData()
    .then(processedData => {
      console.log("Processed data:", processedData);
    })
    .catch(err => {
      console.error("Final error handler:", err);
    });






    document.getElementById("myclass")[0].innerHTML = "Hello Sir!"
document.createElement("div")

document.getElementById("myid").class = "myclass"








