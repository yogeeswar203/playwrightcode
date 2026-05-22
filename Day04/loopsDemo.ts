//Examples for the loop

/*
while(condition)
{
    statements; (increments/decrements)
    
}

*/



// while(i<=5)
// {
//     console.log(`${i} `)
//     i++;
// }


// while(i<=9)
// {   
//     console.log(i);
//     i+=2;
// }


// while(i>=1)
// {
//     console.log(`${i}`)
//     i-=2;
// }



// for(i=1; i<=5; i++)
// {
//     console.log(`${i}`)
// }

// console.log(i);

// for(i=2; i<20; i++);
// console.log(i);

let i:number=10;
for(i=1; i<10; i++)
{
    if(i==5 || i ==2 || i ==3)
    {
        
        continue;
    }
    console.log(`Value is reached to 5 ${i}`)
}