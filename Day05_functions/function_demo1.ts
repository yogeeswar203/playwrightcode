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