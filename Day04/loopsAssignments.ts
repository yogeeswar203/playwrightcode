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


sumOfTen(5);
sum2(5)