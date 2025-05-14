// let Username = "admin";
// let Password = "admin123";
// let enteredUsername =  prompt("Enter your username");
// let enteredPassword = prompt("Enter your password");

// if (enteredUsername === Username && enteredPassword === Password) {
//     alert("Welcome to the system!");
// }
// else {
//     alert("Invalid username or password. Please try again.");

// }
 







// let number = 6;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }

// let num = 0;
// while (i<=10) {
//     console.log(`${num} x ${i} = ${num * i}`);
//     i++;
// }



// let day = prompt("Enter a day of the week:");
// switch (day) {
//     case "1":
//         alert("Monday");
//         break;
//     case "2":
//         alert("Tuesday");
//         break;
//     case "3":
//         alert("Wednesday");
//         break;
//     case "4":
//         alert("Thursday");
//         break;
//     case "5":
//         alert("Friday");
//         break;
//     case "6":
//         alert("Saturday");
//         break;
//     case "7":
//         alert("Sunday");
//         break;
//     default:
//         alert("Invalid input.");
// }


let mobile = {
    name: "Samsung",
    model: "Galaxy S23",
    price: "$799",
    features: ["5G", "256GB Storage", "8GB RAM"],
    password: "oooo",
};

// mobile.color = "white";


let N = prompt("Enter the name of the mobile");
let p = prompt("Enter the password of the mobile");

for (x in mobile) {
    if (mobile.name == N && mobile.password == p ){
        console.log("Welcome to  mobile");
        
    }

else {
    console.log("Invalid name or password");
}
}

// let unit = {}

// unit.names =  "raju";

//  unit.age = 20;

// console.log(unit);

// for (x in unit) {
//     console.log(x + ": " + unit[x]);
// }

 


