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
})


// exmples for the map function 
// map creates a new array with the result of calling the function on every element of an array 
// It takes fucntion as a parameter
// Returns the same number of elements that we have in original array
// Syntax array.map(function(currentValue, index, array){})

// ex1: get squar of all the numbers in an array. Ex[1,2,3] then result should be [1, 4, 9]



let numbers:number[] =[1,2,3,4];

let sqnumbers = numbers.map(function(e1){return(e1*e1);});
console.log(sqnumbers);

let addNum=numbers.map(function(e1){return(e1+e1);});
console.log(addNum);

// using arrow function

let addNum2 = numbers.map((e1)=>{return(e1+e1);});
console.log(addNum2);

// if you have single return statement then {} and return statement are optional

let addnum3 = numbers.map((e1)=>e1*2);
console.log(addnum3);


// filter() - creates a new array with all the elements that pass/satisfy the function
// it takes the function as a parameter
// Returns wither same or fewr number of elements compared to original array
// Syntax array/filter(function(currentValue, index, array){})

// ex:1 get only even numbers from the given array 

let halNum = numbers.filter((num)=>{
    return(num%2===0);
})
console.log(halNum);


let hls = numbers.filter((e1)=>(e1%2!==0));
console.log(hls);


let hg = numbers.filter((e1)=>(e1>3));
console.log(hg);

let hg1 = numbers.filter((e1)=>{return(e1>2)});
console.log(hg1);

// some() ==> checks if any element is satiesfies the condition then it will return the true
// returs true or false if any one of the element passes the given condition
// Syntax: array.some(function(currentValue, index, array){});

let hasNe = numbers.some((e1)=>e1<0);
console.log(hasNe);
let hasPas = numbers.some((e1)=>e1>0);
console.log(hasPas);



// every function
// each and every element must satiesfy the condition

let eveN = numbers.every((e1)=>e1<0);

console.log(eveN);

let evn = numbers.every((e1)=>(e1%2==0));

console.log("All the numbers are even or not:",evn);

// every means all the elememts must statiesfy the condition 
// Some means any one of the element is matching the condition then it will true or false based on the condition
//
//  forEach() --> nothing will return
//  map() --> will return the array
// filter() --> will return the array
// reduce() --> will return the single value because of accumelator
// some & every() will return true or false 
