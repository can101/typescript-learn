// let greet = () => {
//     console.log("hello , world");
// }
// greet='hello';

let greet: Function;

// greet="dsgfdhg"; //Type 'string' is not assignable to type 'Function'  

greet = () => {
    console.log("hello,again");
}

const add = (a: number, b: number, c: number | string = 10): void => {
    // const add = (a: number, b?: number | string) => {
    console.log(a + b);
    console.log(c);
}

// add(5, 10)
add(5, 10, "fdgfd")

const minus = (a: number, b: number): number => {
    return a + b;
}

let result = minus(10, 7);
// result="sumthing else"// Type 'string' is not assignable to type 'number'.