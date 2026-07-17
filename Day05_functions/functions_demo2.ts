// demo for the call back function 

function demo1 (n1: number, n2:number, demo2:any):void{

    console.log("sum is:", n1+n2);
    demo2();

}

function demo2():void{
    console.log("This is the call back function")
}

// calling the demo 1 function which will trigger the demo2 also
demo1(10, 20, demo2);

// caling the demo 2 function sepearately 
demo2();


// demo with the arguments


function greet(name:string, msg:(messgae:string)=>void)
{
    console.log("Name of the player is: ", name)
    // calling the call back function
    msg("This is call back function")
}

function message(msg:string):void{
    console.log("This is from call back functin:",msg);
}
greet("Yogeeswar", message);

function message2(st:string, ms:(str:string)=>void)
{
    console.log("This is main function", st)
    ms("This is call back function by the second program")
}


function CSS(st:string):void
{
    console.log("This is call ball fun", st);
}

message2("Swatik", CSS);
