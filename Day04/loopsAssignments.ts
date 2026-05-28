// programs for the assignment 
console.log("-------------------- Program 1-------------------------")

function sumOfTen(s:number){
        let sum:number=0;
        let i2: number=1;
       
       while(i2<=s)
       {
            sum = sum+i2;
            i2++;
       }

       console.log(`The sum of the 10 numbers is: ${sum}`)

}

function sum2(num:number)
{
    console.log("-------------------- Program 2-------------------------")
    let sum:number = 0;
    for(let i=0; i<=num; i++)
    {
        sum = sum + i;
        
    }
    console.log(`The sum of the ${num} numbers is ${sum}`)
}

function factOfNum(num:number)
{
    console.log("-------------------- Program 3-------------------------")
    let fact:number=1;
    for(let i=1; i<=num; i++)
    {
        fact = fact * i;
    }
    console.log(`Factorial of a given number ${num} is: ${fact}`)
}

function revNum(num:number)
{
    console.log("-------------------- Program 4-------------------------")
    let rev:number = 0;
    // 123 --> 321
    while(num>0)
    {
        rev = (rev*10) + (num%10);
        num =  Math.floor(num/10);
    }
    console.log(rev);
}

function checkPrime(num:number): boolean 
{

    let n1:number = 0;
    if(num<=1)
    {
        console.log(`Given number is ${num}`);
        return false;
    }

    let i = 2;
    while(i<=Math.sqrt(num))
    {
        if(num%i ===0)
        {
            return false;
        }
        i++;
    }
    return true
    
}



sumOfTen(5);
sum2(5);
factOfNum(5);
revNum(123);
console.log(checkPrime(2));