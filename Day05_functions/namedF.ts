function display():void
{
    console.log("This is demo for the named Function newly creted")
}

display();

// named function with parameters

function display2(a:number, b:number):number
{
    let sum:number;
    sum = a+b;
    return sum;
}

console.log(display2(10, 20));
//9604781436 -- 


// function with rest parameters
// this function we can pass many number of parameters

function manynum(...nums:number[]):number
{
    let i;
    let sum:number=0;

    for(i=0; i<nums.length; i++)
    {
        sum = sum + nums[i];
    }

    return sum;
}

console.log("sum value is using rest parameters:",manynum(10, 20));
console.log("sum value is using rest parameters:",manynum(10, 20, 30));


function many2(...element:(number | string)[]):void
{

console.log(element.length);

}
many2(10,1,20,"test","test2");


// with optinal parameters

function opt(id:number,name:string, lname?:string)
{
    console.log("id:", id);
    console.log("name:", name);
    //console.log("Last Name:", lname);

    if(lname!== undefined)
    {
        console.log("Last Name:", lname);
    }

}


opt(1,"satwik","Achari");

// named functions with default parameters

function defpa(rate:number, di:number=0.25):void
{
   let disPr:number;
   disPr = rate * di;
   let discounted_price:number = rate - disPr;
   console.log("discounted price:",disPr);
   console.log("discounted Amount:",discounted_price);
   console.log(`test ${rate}`)
}

defpa(200);



let vr = function(id:number):void{
    console.log(`This is anonymous function: ${id}`)
}

vr(205);