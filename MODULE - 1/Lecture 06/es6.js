
// var x = 15;

// {
//     // let x = 5;
//     const x = 5;
//     console.log(x); // 5
// }

// console.log(x);

// var x = function(x, y){
//     return x + y;
// };

// const x = (x, y) => {
//     return x + y;
// };

//const x = (x, y) => x + y;          //short hand format of an arrow function

// console.log(x(5, 6));

// const q1 = ["jan", "Feb", "Mar"]
// const q2 = ["Apr", "May", "Jun"]
// const q3 = ["jul", "Aug", "Sep"]
// const q4 = ["Oct", "Nov", "Dec"]

// const year = [...q1, ...q2, ...q3, ...q4];

// console.log(year);

// const myNumbers = [25, 12, 50, 77, -1];
// let maxValue = Math.max(...myNumbers);
//console.log(maxValue); // 77

// let sum = 0;
// for (let num of myNumbers) {
//     sum += num;
// }

// console.log(sum);

// const name = "CipherSchools";

// let text = "";
// for (let ch of name) {
//     text += ch + " ";
// }

// console.log(text);

// const fruits = new Map([
//     ["apples", 500],
//     ["banana", 300],
//     ["oranges", 200]
// ]);

// console.log(fruits);
// console.log(fruits.get("oranges"));

// const letters = new Set();

// letters.add("a");
// letters.add("b");
// letters.add("a");

// console.log(letters);

// class Car {
//     constructor(name, mfgYear) {
//         this.name = name;
//         this.mfgYear = mfgYear;
//     }
// }

// const myCar1 = new Car("Mercedez", 2022);
// const myCar2 = new Car("Porsche", 2020);
// console.log(myCar1, myCar2);


// const myFunction = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("This is Inside Promise");
//             resolve();
//         }, 2000);
//     });
// };


// myFunction()
//     .then(() => {
//         console.log("Resolved");
//     })

//     .catch(() => {
//         console.error("Rejected");
//     });


// const person = {
//     firstname: "john",
//     lastname: "Doe",
//     age: 30,
//     eyeColor: "blue",
// };

// let id = Symbol("id");
// person[id] = 140111;

// console.log(person);

// const addNumbers = (a, b = 10) => a + b;

// const addNumbers = (...args) => {
//     console.log(args);
// };

const addNumbers = (...args) => {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
};

console.log(addNumbers(10, 20, 13, 3, 5, 21));
