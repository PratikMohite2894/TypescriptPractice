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


// unkonwn type
// unknown type is a type that is not known at the time of writing the code
// it is useful when you want to define a type that is not known at the time of writing the code
// you can define the type of the unknown value at runtime

let notSure: unknown = 'a'

if(typeof notSure === 'string'){
    console.log(notSure.toUpperCase)
}else{
    console.log(notSure = "pratik Mohite")
}

//------------------------------------------------> never type <-------------------------------------------------------
/*
never type is a type that represents a value that never occurs
It is useful when you want to define a function that never returns a value
For example, a function that always throws an error or a function that has an infinite loop.

Use cases of never type:
1. A function that always throws an error
2. A function that has an infinite loop 
3. A function that never returns a value
*/
function infiniteLoop():never{
    while(true){
        console.log("This is an infinite loop");
    }
}

function throwError(message : string):never{
    throw new Error(message);
}
// throwError("Something went wrong");


//------------------------------------------------> void type <-------------------------------------------------------
/*
void type is a type that represents a value that is not returned by a function
It is useful when you want to define a function that does not return a value.
Use cases of void type:
1. A function that does not return a value
2. A function that is used for side effects
*/

// by defualt return type of void functio is undefined
function logMessage(message: string): void {
    console.log(message);
} // This will not throw an error, but it is not recommended to pass undefined to a function that expects a string

//-------------------------------------------------> type inference <-------------------------------------------------------
/*
Type inference is a feature of TypeScript that allows the compiler to automatically infer the type of a variable based on its value.
It is useful when you want to define a variable without explicitly defining its type.   
*/
let inferredString = "Hello, TypeScript!"; // TypeScript infers this as string
let inferredNumber = 42; // TypeScript infers this as number
let inferredBoolean = true; // TypeScript infers this as boolean

// inference means that typescript will automatically assign the type of the variable based on its value
// it is useful when you want to define a variable without explicitly defining its type

//-------------------------------------------------> type assertion <-------------------------------------------------------

// what is special type assertion in typescript

let userName = "Pratik Mohtie";
let userNameLength: number = userName.length;
console.log(userNameLength); // 12

let myName: any = "123";
let myNameCharCount: number = (myName as number).valueOf();
console.log(myNameCharCount); // 123

//--------------------------------------------------> union types <-------------------------------------------------------
/*
what is the union type in typescript
Union types allow you to define a variable that can hold multiple types of values.
It is useful when you want to define a variable that can hold multiple types of values.
Use cases of union types:
1. A variable that can hold multiple types of values
2. A function that can accept multiple types of arguments
3. A function that can return multiple types of values
*/
// this is a case of variable that can hold multiple types of values
let id: string | number | undefined | boolean;
id = 'abc';
id = 101
id = undefined


// function that can holds the union types and union type of parameters

function processId(id: string | number | boolean | undefined):any {
    if (typeof id === 'string') {
        return `String ID: ${id}`;
    } else if (typeof id === 'number') {
        return `Number ID: ${id}`;
    } else if (typeof id === 'boolean') {
        return `Boolean ID: ${id}`;
    } else {
        return 'Undefined ID';
    }
    
}

console.log(processId('abc')); // String ID: abc
console.log(processId(101)); // Number ID: 101  
console.log(processId(true)); // Boolean ID: true
console.log(processId(undefined)); // Undefined ID


// function with unio type of return 

function Response(flag : boolean):string | number | undefined{
   let response:string | number | undefined;
   response = flag?"sucess":404
   return response
}

console.log(Response(true)); // sucess
console.log(Response(false)); // 404

//------------------------------------------------> type narrowing <-------------------------------------------------------
// what is type narrowing in typescript
// Type narrowing is a feature of TypeScript that allows you to narrow down the type of a variable based on certain conditions.
// It is useful when you want to define a variable that can hold multiple types of values and you want to narrow down the type of the variable based on certain conditions.

function processValue(value: string | number | boolean): void {
    if (typeof value === 'string') {
        console.log(`String value: ${value}`);
    } else if (typeof value === 'number') {
        console.log(`Number value: ${value}`);
    } else if (typeof value === 'boolean') {
        console.log(`Boolean value: ${value}`);
    }
}

// use cases of type narrowing:
// 1. When you want to narrow down the type of a variable based on certain conditions
// 2. When you want to define a variable that can hold multiple types of values and you want to narrow down the type of the variable based on certain conditions

//------------------------------------------------> interfaces <-------------------------------------------------------

// in interfaces we can define the structure of an object
// it is useful when you want to define the structure of an object and you want to enforce
// you cannot define the function implementation in the interface
// you can only define the function signature in the interface type 
interface Employee{
    empId : number | string
    name : string ;
    age : number ;
    greet(message:string):void;
}

let employeeObj:Employee={
    empId: 101,
    name: "Pratik Mohite",
    age: 25,
    greet(message: string): void {
        console.log(`${this.name} says: ${message}`);
    }
}

employeeObj.greet("Hello, World!"); // Pratik Mohite says: Hello, World! 

// interfces with function types 

interface MathOperation {
    (a:number , b:number):number;
}

const add: MathOperation = (a,b) => a+b;
const substract : MathOperation = (a,b) => a-b;

// can i define multiple function in the function type interface ?
// answer is yes, you can define multiple functions in the function type interface like i have defined below
interface MathOperations {
    add: MathOperation;
    subtract: MathOperation;
}

const mathOps: MathOperations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};  
console.log(mathOps.add(10, 20)); // 30
console.log(mathOps.subtract(20, 10)); // 10

//-----------------------------------------------> type aliases <-------------------------------------------------------

// type aliases are used to create a new name for a type
// it is useful when you want to create a new name for a type and you want to use that name in your code
// it used to make the code more readable and maintainable 

// type AliasName  = typeDefinition | string | number; this is the syntax 

type User = {
    id: number;
    name: string;
    email: string;
};

let myData : User = {
    id: 101,
    name: "Pratik Mohite",
    email: "mohitepratik156@gmail.com",
   // work : "software developer"  // this will not work as the type is fixed and it does not allow extra properties
}

type Deparment = {
    dept_id : number;
    dept_name : string;
    role : string,
    getDeptDetails(): string;
}

// type EmployeeDetails = User & Deparment; // this is the syntax to combine two types
// type EmployeeDetails = User | Deparment; // this is the syntax to combine two types

type EmployeeDetails = User & Deparment; // this is the syntax to combine two types

let myEmployee : EmployeeDetails = {
    id: 9321499349,
    name: "Pratik Mohite",
    email: "mohitepratik156@gmail.com",
    dept_id : 101,
    dept_name : "Software Development",
    role : "software developer",
    getDeptDetails(): string {
        return `Department ID: ${this.dept_id}, Department Name: ${this.dept_name}, Role: ${this.role}`;
    }
}

// use of interface vs type alias
// 1. Interfaces are used to define the structure of an object, while type aliases are used to create a new name for a type.
// 2. Interfaces can be extended, while type aliases cannot be extended.        
// 3. Interfaces can be implemented by classes, while type aliases cannot be implemented by classes.

interface Vehicle {
    type : string;
    wheels: number;
    brand: string;
    model: string;
    year: number;
    start(): void;
}

interface Car extends Vehicle{
    trunkSize: number;
    abs : boolean;
    gearType : string | number;
}
interface Bike extends Vehicle{
    hasCarrier: boolean;
    bikeType: string;
}

let myVehicle : Car = {
    type: "Car",
    wheels: 4,
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    trunkSize: 500,
    abs: true,
    gearType: "Automatic",
    start(): void {
        console.log(`${this.brand} ${this.model} is starting.`);
    }
}

let myBike: Bike = {
    type: "Bike",
    wheels: 2,
    brand: "Yamaha",
    model: "FZ",
    year: 2021,
    hasCarrier: true,
    bikeType: "Sport",
    start(): void {
        console.log(`${this.brand} ${this.model} is starting.`);
    }
}

type Tree = {
    value = string ,
    children : Tree[];
}