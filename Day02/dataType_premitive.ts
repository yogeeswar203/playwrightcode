let num1:string ="5";
let num2:number = 5;

let op = num1+num2;
console.log(op)


// Data types Premmitve numbers
let n1:number = 100;
let price=20.5;
let big = 1253124894;

console.log("number: ", n1);
console.log("Price: ", price);
console.log("Big number: ", big);
console.log(typeof n1);


// String data type
console.log("---------------------Demo for the String data types")
let s1:string = 'String 1';
let s2:string = "String 2";
let s3:string = "TC"

console.log("String:", s1);
console.log("String:", s2);
console.log("Hello",s1, s2);
let s4:string = `Hello ${s1} ${s2}`;
console.log(s4);

console.log("---------------------Demo for the Boolean data types")

let isStudent:boolean = true;
let isStudent1:boolean = false;


console.log(isStudent);
console.log(isStudent1);

let n4:null = null;
let n5:undefined = undefined;
console.log(n4);

let pr1:number=2;
console.log(pr1);

// Any data type
console.log("---------------------Demo for the Any data types")
let val:any="Welcome";
console.log(val)
console.log(typeof val)
val = 100;
console.log(val)
val = "This is String"
console.log(typeof val)

console.log("---------------------Demo for the UNINON data types")

let id: number | string | boolean;

id =100;
console.log(id)
console.log(typeof id)
id = "String";
id = true;

console.log("---------------------Demo for the Void funcition")
function sum(){
    let num:number = 10 + 10;
    console.log("The sum is function 1:",num);
}

sum();

function sum1():void
{
    let num:number = 10 + 10;
    console.log("The sum is function 2:",num);
}

sum1();


function sum2():number
{
    let num:number = 10 + 10;
    return num;
}

let res:number = sum2();
console.log(res);