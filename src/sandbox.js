// let greet = () => {
//     console.log("hello , world");
// }
// greet='hello';
var greet;
// greet="dsgfdhg"; //Type 'string' is not assignable to type 'Function'  
greet = function () {
    console.log("hello,again");
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    // const add = (a: number, b?: number | string) => {
    console.log(a + b);
    console.log(c);
};
// add(5, 10)
add(5, 10, "fdgfd");
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
// result="sumthing else"// Type 'string' is not assignable to type 'number'.
