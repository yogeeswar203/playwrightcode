// Demo for the strings
let s1:string ="Hello world";

// below are the methods 
console.log(`Length of the string is:${s1.length}`)
console.log("Given word in lower case:",s1.toLocaleLowerCase());
console.log("Given word in Upper case:",s1.toUpperCase());
console.log("The word present at index:",s1.charAt(0));
console.log("The index of the given word is:",s1.indexOf('o'));


// Examples for the sub string
// s1.substring(startingIndex, (endingindex-1)) ending index will be -1
console.log("Printing the numbers from the given range:",s1.substring(0,5));


// includes methods returns true or false
console.log("Checking given character or not:",s1.includes('l'));

//startwith() and endswith() will return true or false

console.log("Starts with example: ",s1.startsWith("H"));
console.log("Ends with example:", s1.endsWith("i")); //ankdi;ejwejfewfjdjcjweoirwoperiwoeriopweiroiorppoewirpowierj

// replace function
console.log("Replaced string:",s1.replace("Hello","Test"));

// Split() method it break the string into multiple parts based on the delimeter
let word:string[] = s1.split(" ");
console.log("After spliting the words: ", word);
console.log("1st word of the given string: ", word[0]);
let s2:string = "yogi@gmail.com, xyz"
let word2:string[] = s2.split(" ");
// W
console.log("eMail:",word2[0]);
console.log("pswd:",word2[1]);


// trim(), trimStart(), trimEnd();
let s3:string = "   Start with  Space  "
console.log("Triming the spaces start and end at a time:",s3.trim());
console.log("Triming at start:", s3.trimStart());
console.log("Triming at end:",s3.trimEnd());


// concat() --> it will add 2 strings
console.log(s1.concat(s2));
console.log(s1+s2);
console.log(s1.concat(s2).concat(s3));





