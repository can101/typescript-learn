// // let greet = () => {
// //     console.log("hello , world");
// // }
// // greet='hello';

// let greet: Function;

// // greet="dsgfdhg"; //Type 'string' is not assignable to type 'Function'  

// greet = () => {
//     console.log("hello,again");
// }

// const add = (a: number, b: number, c: number | string = 10): void => {
//     // const add = (a: number, b?: number | string) => {
//     console.log(a + b);
//     console.log(c);
// }

// // add(5, 10)
// add(5, 10, "fdgfd")

// const minus = (a: number, b: number): number => {
//     return a + b;
// }

// let result = minus(10, 7);
// // result="sumthing else"// Type 'string' is not assignable to type 'number'.

// type stringORNumber = string | number
// type objectWithName = { name: string, uid: stringORNumber }

// const logDetails = (uid: stringORNumber, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }

// const greet = (user: objectWithName) => {
//     console.log(`${user.name} says hello`);
// }
// const greetAgain = (user: objectWithName) => {
//     console.log(`${user.name} says hello`);
// }

// let grret:Function;

// example 1
let greet: (x: string, y: string) => void; // signature

greet = (name: string, greeeting: string) => { // function
    console.log(name + " says " + greeeting);
}
// example 2
let calc: (a: number, b: number, c: string) => number; // signature

calc = (numOne: number, numTwo: number, action: string): number => { // function
    if (action === "add") {
        return numOne + numTwo
    }
    else {
        return numOne - numTwo;
    }
}
// example 3
let logDetails: (obj: { name: string, age: number }) => void;

type person = { name: string, age: number }

logDetails = (ninja: person) => {
    console.log(`${ninja} is ${ninja.age} years old`);

}
