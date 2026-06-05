// This is for the function Demo

// function 1 this is called named methods
function display():void
{
    console.log("This function is demo for named function")
}

function display1(n1:number, n2:number): number
{

    return n1+n2;
}


display();
console.log("This is function demo with retun type: ",display1(10, 10));


// demo for the named parameters with rest parameters that menas we can pass n number of parameters 

function display2(...nums:number[]):number
{
    let sum:number=0;
    let i;

    for(i=0; i<nums.length; i++)
    {
        sum = sum + nums[i];
    }

    return sum;
}

console.log("The sum of the gieven number is: ",display2(1, 2, 3));
console.log("The sum of the gieven number is: ",display2(1, 2, 3, 40));
console.log("The sum of the gieven number is: ",display2(1, 2));

function display3(...Name_Age:(string | number)[])
{
    console.log(`The name of the person is ${Name_Age[0]} and age of the person is ${Name_Age[1]}`)
    console.log(`The number of elements are passed:`,Name_Age.length)
}

display3("Ajay", 23);

// Demo for the named function with optional parameters

function dis_details(id:number, name?:string):void
{
    console.log("id: ", id)
    if(name!==undefined)
    {
        console.log("Name:", name)
    }
    
}

dis_details(12)
//dis_details(12, "yogeeswar")

// Named function with default parameters 

function discount(price:number, rate:number=10):void
{
    let dicount:number = price*rate;
    console.log(dicount);
}

discount(10);


// Anynomous function demo

let msg = function():string
{
    return "Hello This is anonymous function";
}

console.log(msg());

let msg1 = function(a:number, b:number):number
{
    return a*b;
}

console.log(msg1(10, 20));

// demo for the arrow functions

let ms=():void =>
{
    console.log("This is arrow function")
}

ms();

// with parameters

let add=(n1:number, n2:number):number =>
{
    return n1+n2;
}

console.log("The sum of the values is:",add(10, 20));


// Arrow function with implicit return

let add2=(n1:number, n2:number):number => n1*n2;

console.log("The multiplication of the values is:",add2(10, 10));


let details=(id:number, emp: string, GameName?:string): void =>
{
    console.log(`id:${id}`)
    console.log(`Emp:${emp}`)

    if(GameName!==undefined)
    {
        console.log(`Game Name: ${GameName}`)
    }
}

details(1, "Shardul");
details(1, "Shardul","Test Match");
details(1, "Shardul","Cricket");


let price1=(rate:number, dis:number=0.5):void =>
{
    let discount:number = rate * dis;
    let cost:number = rate - discount;
    console.log(`The discoumt is applied is: ${discount} and after discount item price is: ${cost}`);
}

price1(20);

let findEl=(...rolenumbers:number[]):number=>
{
    return rolenumbers.length;
}

console.log(findEl(1,2,3));


let msg3=(n1:number, n2:number):void=>
{
    console.log("This message 3:",n1*n2);
}

msg3(20, 15);