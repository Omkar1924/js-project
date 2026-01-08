let score = "23"

// console.log(typeof score)
let conversion = Number(score) // convert string into number value
// console.log(typeof conversion)

let stringConv = String(score)//convert into string
let boolenConv = Boolean(score)//convert into string
// console.log(typeof stringConv)
// console.log(typeof boolenConv)

/************************************************************/

// operations

console.log("1" + 6)// op is 16
console.log(1 + "6") // op is 16
console.log("1" + "6") // op is 16
console.log("1" + 6 + 4) // op is 164
console.log(1 + 6 + "4") // op is 74 (depensd on what is the 1st operation given )

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
