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
number,boolean,string

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