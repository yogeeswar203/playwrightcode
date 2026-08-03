// foreach(), map(), filter(), reduce(), some(), every() ----

// foreach() executes a function the function for each every element in the array 
// it takes function as a parameter
// Syntax: array.forEach(function(currentValue, index,array){})
// current value being processd in the array
// index: (optional) The index of the current element being processed in th array
/// array(Optional) - The array of the current element belongs to

let a12:number[] = [1,2,3,4];
let fruits:string[] = ["banana","Orange","apple", "badam"];

// by using the normal for loop
for(let i in fruits)
{
    console.log(i, fruits[i]);
}

// using the for each 

fruits.forEach((ta, id)=>{
    console.log(`${id}`,`${ta}`);
});


fruits.forEach((element)=>{
    console.log(`${element.toUpperCase()}`);
});