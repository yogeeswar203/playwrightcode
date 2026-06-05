// demo for the call back functions

function demo1(n1:number, n2:number, demo2:any)
{
    console.log("The sum is used the demo1 function: ",n1+n2);
    demo2();
}

function demo2(){
    console.log("This is call back function")
}

demo1(10, 20, demo2);
demo2();

let msg3=(n1:number, n2:number):void=>
{
    console.log("This message 3:",n1*n2);
}

msg3(20, 15);