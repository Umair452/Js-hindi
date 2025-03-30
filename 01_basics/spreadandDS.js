// destructing in js

let myArray = [1,2,3, 4, 5]

let [a,b, ...c] = myArray

// console.log(c)
// console.log(`${a} and ${b} and ${c[1]}`);


let myObj = {...myArray}

console.log(myObj);
