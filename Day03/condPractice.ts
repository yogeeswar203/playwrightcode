// check if a character is upper case


function checkUpperCase(c3:string)
{
    if(c3 === c3.toUpperCase())
    {
        console.log("Given letter is Upper case")
    }else
    {
        console.log("Given letter is lower case letter")
    }

    
}



function checkNumberMul(c4:number)
{
    if(c4%10 === 0)
    {
        console.log(`Given number is multiple of 10: ${c4}`);
    }else
    {
        console.log(`Given number is not multiple is 10: ${c4}`);
    }
}


function findLargeNum(n1:number, n2:number)
{
    if(n1>n2)
    {
        console.log(`${n1} is greater than ${n2}`)
    }else
    {
        console.log(`${n1} is less than ${n2} `)
    }
}

function checkAge(age:number)
{
    if(age>=13 && age<=19)
    {
        console.log(`Person is Teenager:${age}`)
    }else
    {
        console.log(`Person is Adult: ${age}`)
    }
}

function checkNumType(n1:number)
{
    if(n1<0)
    {
        console.log(`Given number is Negative number: ${n1}`)
    }else if(n1>0)
    {
        console.log(`Given number is Positive number: ${n1}`)
    }else
    {
        console.log(`Given number is ${n1}`)
    }
}













checkNumType(1);
checkUpperCase("C");
checkNumberMul(5);
findLargeNum(10, 15);
checkAge(20);
console.log("------------- Program 5 ----------------------")
checkNumType(1);