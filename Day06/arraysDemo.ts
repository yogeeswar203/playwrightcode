// demo for the Arrays

let names:string[] = [];
names[0] = "test1";
names[1] = "test2";
names[2] = "test3";
names[3] = "test4";

let names2:string[] = ["sam", "ramu", "Gomu"];
console.log(`The length of the 1st array is: ${names.length}`);
console.log(`The length of the 2nd array is: ${names2.length}`);

console.log(names);

// using generic way like AYYARY

let array2:Array<string | number> = ['ra', 'ka', 1,2];
console.log(array2);

let array3:Array<any> = [1, "test", "Raha", true, null]
console.log(array3);
console.log(array3[0]);
console.log(array3[1]);
let i:number;


for(i=0; i<array2.length;i++)
{
    console.log(array2[i]);
}

// for in loop example
console.log("Printing the data from the array using for in Loop")
for(let i in array2)
{
    console.log(array2[i]);
}

console.log("Printing the datausing for of Loop")

for(let value of array3)
{
    console.log(value);
}


function search(el:number, arr:number[]):boolean
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]===el)
        {
            return true;
        }
    }
    return true;
}

let arr3:number[] = [1,2,3]

console.log("printing the data using the function")
console.log(search(1, arr3));