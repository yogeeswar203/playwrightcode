// demo for the conditional statements

// let age1:number = 18;
// if(age1<=18)
// {
//     console.log("You are an Adult")
// }else
// {
//     console.log("You are not a Adult")
// }



// if(n1%2 ==0)
//     {
//         console.log(`${n1} Even number`)
//     }
// else
//     {
//         console.log(`${n1} Odd Number`)
//     }

let n1:number = 25;
if(n1<24)
{
    console.log(`${n1} is less than 24`)
}else if(n1>24)
{
    console.log(`${n1} is greater than 24`)
}else if(n1==24)
{
    console.log(`${n1} is equal to 24`)
}

// example 3 Grades

let m1:number = 50;

if(m1>= 90 && m1<=100)
{
    console.log(`Your marks: ${m1} & grade is A`)
}else if(m1>=75 && m1<90)
{
    console.log(`Your marks: {m1} & grade is B`)
}else
{
    console.log(`Your marks: ${m1} & grade is C`)
}

let s1:string = 'chrome1'
if(s1 === "chrome")
{
    console.log(`Your selected browser is ${s1}`)
}else if(s1 === "edge")
{
    console.log(`Your selected browser is ${s1}`)
}else 
{
    console.log(`Your selected browser is test ${s1}`)
}

// switch case examples
/*
switch (Expression)
{
case value 1: statement;
                break;
case value 2: statements;
                break;
case value 3: statements;
                break;

default: statements;

}

*/


let day:number = 3;
switch (day)
{
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wedensday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    default: console.log("Invalid week")

}