function Findindex(arr,str){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            return i;
        }
    }
}

let arr = ["this", "is", "a", "string"];
console.log(Findindex(arr, "is")); 