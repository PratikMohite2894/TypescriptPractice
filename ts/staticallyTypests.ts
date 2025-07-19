let a4: string ="Pratik Mohite"
a4 = 'Nikhil Mohhit'
console.log(a4);

function add3(a:number , b:number):number{
    return a+b;
}
console.log(add3(10, 20));
// console.log(add3(10, "20"));

// bsic types :

let num : number = 123_45_678_9
console.log(num);

let num1 :  bigint = 123456689n // bigint must end with n
console.log(num1);

let num2  = 123456689n // bigint must end with n
console.log(typeof num2);

let character:string='C';
console.log(typeof character)

let isTrue:boolean = true;
console.log(isTrue);


let numArray: number[] = [10,20,30,40]
console.log(numArray);

let val:undefined = undefined; // undefined type must be intialized with undefined
console.log(val);

let val3:null= null;


// the below object is any type of object

let obj:object={
    name:"Pratik Mohite",
    age: 25,
    isMarried: false,
    address: {
        city: "Pune",
        state: "Maharashtra"
    },
    rating:[10,20,30,40]
}

// if wan't to specify which type of the object it must be include then use the below  syntax

let obj2: {name : string , sirname : string , age:number} = {
    name: "Pratik",
    sirname: "Mohite",
    age: 25
}
console.log(obj2);

let obj3 = {...obj2 , age : 1234567890 , phone : 9321499349  };
console.log("below is my copied object")
console.log("below is my copied object", obj3);

// in this case if you wan't to add the more properties than it is not allowed in typescript

obj2 = {...obj2 , age : 1234567890 };
console.log("below is my copied object")
console.log("below is my copied object", obj3);

// any type 

// any can take any type of value
// it is not recommended to use any type as it defeats the purpose of typescript
// but it is useful when you are not sure about the type of the value
// bydefault value of any 
let numVal : any;
console.log(numVal); // undefined
numVal = 10;
numVal = "Pratik";
numVal = true;

// any type can be used in function parameters and return type
// it is not recommended to use any type as it defeats the purpose of typescript
function addAny(a:any , b:any):any{
    return a+b;
}

let numArray1:number[] = [10,20,30,40];
let charArray:string[] = ["Pratik", "Mohite", "Nikhil", "Mohite"];

charArray.forEach(val=>{console.log(val.length)})
numArray1.map(val=>{
    val = val*2;
    console.log(val);
})

charArray.forEach(val=>{
   val =  val.replace('p' , 'P')
   console.log(val);
})

// tuples in typescript
// tuples are fixed length array with fixed type of values  
// it is useful when you want to store fixed number of values with different types
let tuple1: [string, number, boolean] = ["Pratik", 25, true];
console.log(tuple1);


// in tupple we have to use the fixed type of values
let userData : [string , number , undefined] = ["Bhavesh", 25 , undefined];
console.log(userData);


// be default values in typescript are undefined
// if you want to use the value then you have to initialize it with a value
let user;
console.log(user); // undefined

let response:[number , string] = [200 , "Success"];
response.push(300); // this will work but not recommanded tupple as the tuple is fixed length
console.log(response); // [ 200, 'Success' ]
// use cases of tupple 
// 1. when you want to return multiple values from a function
function getUserData(): [string, number] {
    return ["Pratik", 25];
}
console.log(getUserData()); // [ 'Pratik', 25 ]
// 2. when you want to store multiple values in an array with different types

//------------------------------------------------> Enum <-------------------------------------------------------
// enum is a way to define a set of named constants
// it is useful when you want to define a set of values that are related to each other


// enum by default takes its values from 0
// you can also assign custom values to the enum
// if any value is not assigned then it will must define first
export enum Direction {
    Up,
    APP_NAME = 'my_app_name',
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

console.log(Direction.Up)

// why enums ?
// 1. it is useful when you want to define a set of values that are related to each other
// 2. it is useful when you want to define a set of values that are related 

// Difference between enum and constant
// 1. enum is a way to define a set of named constants
// 2. constants are used to define a single value that cannot be change
// 3. enums are memory efficient as they are stored in memory as a single value
// 4. constants are stored in memory as a single value when we have multiple constants it takes more memory

