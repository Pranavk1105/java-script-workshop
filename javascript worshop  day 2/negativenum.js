// function demo(num1, num2,num3,num4)
// {
//     let str = "The numbers are: ";
    
//     console.log(num1);
// }

// demo(4,7)

//javascript will only pass the first argument to the function 
// and the rest will be ignored.



// function demo(...num1)
// {
//     let str = "The numbers are: ";
    
//     console.log(num1);
// }

// demo(4,7,5,6,1,8,0,9,3,2)
//output:



// let func = function demo(fun = 4,...num1)
// {
//     let str = "The numbers are: ";
    
//     console.log(num1);
//     console.log(fun);


// }

// //func(4,7,5,6,1,8,0,9,3,2)
// func

function matchmycase(num1, num2, num3) {
    console.log(num1); 
    console.log(num2); 
    console.log(num3); 
}
let func = function numberofparameters(...num1) {
    console.log(num1); 
};

// Correct function call
func(4, 7, 5, 6, 1, 8, 0, 9, 3, 2);

matchmycase(4, 7); 

let a = () => {
    console.log("hello");
};

a(); 












