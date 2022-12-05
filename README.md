"# typescript-learn"

## 2 lesson

```comand
tsc file_name.ts
tsc file_name.ts --watch =>listen change file
/* auto genarate js code */
```
## 3 lesson

```ts
variable type
number,boolean,string,object,any

let character = 'mario';
let age = 30;
let isBlackBelt = false;

// character=20;
character = 'can';

age = 50;

// isBlackBelt='yes';
isBlackBelt = true;


const circ = (diameter:number):number => {
    return diameter * Math.PI;
}

console.log(circ(7.5))

```
## 4 lesson

```ts
// array type
let arr=['lugi', 'anderson', 'yoshi']
let names = ['lugi', 'anderson', 'yoshi'];

names.push('toad');
names.push(3);
names[0]=3

let numbers = [10, 20, 30, 40, 50];
numbers.push("fdgsfd");
numbers[1]='fdsg';

let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

let ninja = {
    name: "mario",
    belt: "black",
    age: 30
}

ninja.age = 40;
ninja.name = "can";
ninja.age='40'; //type error
ninja.skilss=["fighting",'sneaking'];

ninja = {
    name: "yoshi",
    belt: "orange",
    age: 40,
    skilss:[]
}
```
## 5 lesson

```ts

// explicit types

let character: string;
let age: number;
let isLoggedIn: boolean;

// age="lugi"; // type assignable error
age = 30;

// isLoggedIn=25; // type assignable error
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

// ninjas = ['yoshi', 'mario'];
ninjas.push("can"); // cannot read properties error push, pass intal value arr

// union types

let mixed: (string | number | boolean)[] = [];

mixed.push('hi')
mixed.push(25);
mixed.push(true);

console.log(mixed);

let uid: string | number;
uid = 1223245;
uid = '1223245';

// objects
let ninjaOne: object;
ninjaOne = { name: "can", age: 32 };
// ninjaOne = "" error type
// ninjaOne = [] error type

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}
ninjaOne={
    name:"can",
    age:20,
    beltColour:"blue"
}
```
## lesson 6
```ts
let age: any = 25;

age = true;
console.log(age)
age = "text";
console.log(age)
age = { name: 'aderson' };
console.log(age)

let mixed: any[] = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let ninja: { name: any, age: any };
ninja = {
    name: "yoshi",
    age: 25
}
console.log(ninja);
ninja = {
    age: "yoshi",
    name: 25
}
console.log(ninja);
```