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