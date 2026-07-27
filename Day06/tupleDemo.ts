let person:[string, number, string, number, boolean] = ["test", 1, 'string2',12, true];
console.log(person);

for(let i=0; i<person.length;i++)
{
    console.log(person[i]);
}  


// Arrray Methods

let p1:number[] = [1,2,3,4,5,6]

// push method to insert elements at the end of the array
console.log("Before adding the numbers:",p1);
p1.push(7,8,9);
console.log("After adding the numbers:",p1);
let lastn= p1.pop();
console.log("after removing the last value:",p1);
console.log("removed number is:", lastn);

// shift and unshift
// shift will remove the 1st element in the array
// unshift will add the elememts at start of the arryay

let f1=p1.shift();
console.log(f1);
console.log("after applying shift method:", f1);
p1.unshift(10);
console.log(p1);
p1.unshift(11);
console.log(p1);

// concat --> it will add the one or more arrays

let a1:number[] = [1,2];
let a2:number[] = [3,4];
let a3=a1.concat(a2);
console.log(a3);
let a4=a3.slice(1,2);
console.log("after slicing the array:",a4);

let fruits:string[] = ['apple', 'banana', 'orange', 'carrot', 'watermelon'];
console.log('current elements in fruits array:', fruits)
let relements=fruits.splice(1,2);
console.log('After splice:',relements);
console.log("Main array after remove:",fruits)
fruits.splice(1,0,'mango','badam','test');
// fruits.splice(1,0,'mango','badam','test');
// 1 --> it will be the index of the start the splice operation
// 0 --> it will deletion count
// items -->the item values which we need to add the values in to the array

console.log("After adding elements:",fruits);


let test:number[] = [1,2,3,4,5];
test.splice(1,0,10,11);
console.log(test);


// indexOf

// if elem
console.log('index of 1 is:', test.indexOf(6));
console.log(fruits.indexOf('carrot',0));
// fruits.indexOf('carrot',0) --> carrot is search element and 0 index from where to search

// includes -->  if the value is present the it will return the true or false
console.log("Given value is present or not:",test.includes(1));
console.log("Given value is present or not:",test.includes(101));

// toString --> it will return all the values from array to string
let s1 = test.toString();
console.log("Converting the number into string:",s1);

let my:string[]=['a','c','h'];
let s2:string = my.toString();
console.log(s2);