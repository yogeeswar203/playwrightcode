// demo for the arrow functions or LAMDA Function
// => Go to Operator
/*
let variable = (parameters)=>
{
    block of code
}

*/

let greetq=():void =>
{
    console.log("This is Arrow function")
}

greetq();

let rtr=(id:number):number=>
{
    return id;
}

console.log("ID:",rtr(10));

let add1=(a:number, b:number):number =>
{
    return a+b;
}

console.log(`The addition of two values: ${add1(5,10)}`);

let add3=(a:number, b:number):number => (a*b);

console.log(`arrow function with implicit return: ${add3(10,10)}`);

let all=(c:string, b?:string, a:number=10):void =>
{
    console.log(`Values printing from default, optional & normal: ${b} ${c}, ${a}`)
}

all("TEST","RAM");

let mul=(...a:(number|string)[]):void =>
{
    console.log(a[0]);
    console.log(a[1]);
}

mul(10,"string");