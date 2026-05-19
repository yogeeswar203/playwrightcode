console.log("This is demo for ----- Operators ---------------")

let a:number = 10;
let b:number = 5;
let s:string = "test";

console.log("--------------------------------Arthmatic Operators examples ---------------------------")

console.log(s+a);
console.log(5**2);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

console.log("--------------------------------Assignement Operators examples ---------------------------")

// we can do re-Assignement for the let variables
a = 20;
b = 10;


console.log(a+=b); // a=a+b 30
console.log(a-=b); // a=a-b = 20
console.log(a*=b); // a = a*b =200 
console.log(a/=b); // a = a/b = 200/10 =20
console.log(a%=b); // a = a%b = 20/10 = 0
console.log(20/10);
//console.log(a**=b);

console.log("--------------------------------Relation Operators examples ---------------------------")
// relation Operators are always return always true or false
// relational operators are < > >= <= == != === (strict equality)

a = 10;
b = 20;

console.log(a>b)  // false
console.log(a<b) // true
console.log(a<=b) // true
console.log(a>=b) // false
console.log(a==b) // false
console.log(a!=b) // true
console.log(a===b) // false
console.log(a==b) // false

console.log("-------------------- == and === ------------------ differences")

let c:any = 10;
let c1:any = "10";

console.log(c==c1);
console.log(c===c1);


console.log("--------------------------------Logical Operators examples ---------------------------")

// Logical operators are && || ! these will return every time true or false
// true true -->        true    true    false
// true false -->       false   true    
// false true -->       false   true    true
// false false -->      false   false

let b1:boolean = true;
let b2:boolean = false;

console.log(b1 && b2); // false
console.log(b1 || b2);  // true
console.log(!b1);// false
console.log("using numbers:", 10>4 && 10>1) //true
console.log("using numbers:", 10>4 || 10>1) // true


