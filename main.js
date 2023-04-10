console.log("------------------\nNew Feature In ES6\n------------------");

//1. let and const introduced



//2. Arrow function 
// argument => expression;
// (arg1, arg2) => expression;
// (arguments) => {
//    return ;
// }

// function squareA(x){
//     return x*x;
// }
// const squareB = (x) => x*x;

// console.log("using traditional", squareA(3));
// console.log("using arrow", squareB(5));

// let a = [0,2,4,6,8,10];
// a.forEach(function(e){
//     console.log(e);
// });
// a.forEach(e=>console.log(e));



// 3. Multi Line String
// let address = `my address is 
// Nepal
// Chitwan,
// Khairahani -6`;
// console.log(address);



// 4. default parameter
// const sum = (x=1,y=3)=> x+y;
// let  s = sum();
// console.log(s);



// 5.templete literals
// let  x = 12;
// let  y = 45;

// let  str  = `value of x is ${x}
// value of y is ${y}
// and sum is ${x+y}`;
// console.log(str);



// 6. Destructuring Assignments:
// let  myarr = [22,55,65];

// // let  x = myarr[0];
// // let  y = myarr[1];

// let [x,y,z] = myarr;
// console.log(x);
// console.log(y);
// console.log(z);

// let  obj = {
//     name : "sujan rijal",
//     age : 24
// }
// let {name , age} = obj;
// console.log(`${name} and ${age}`);

// let  myArray = [1,2,3,4,5,6,7,8,9];
// let[a,b,...rest] = myArray;
// console.log(a);
// console.log(b);
// console.log(rest);

//-------------------------------------------------------

// 7. Enhanced object literals
// let  name  = "Ram", city = "MD";
// let  active =  "active";
// let student = {name,
//                city, 
//                [active]:true,
//                display(){
//                 console.log(`Name => ${this.name} and City => ${this.city}`);
//                         } 
//                 };
// console.log(student);
// student.display();
// //for example
// function creatObject(a,b,c){
//     return{a,b,c}
// }
// let ob1 = creatObject(2,4,6);

// console.log(ob1);


// 8. promiise in JS
// let  prom = new Promise((resolve, reject)=>{
//     // server-call -> asynchromnous work.
//     setTimeout(()=>{
//         let flag = false;
//     if(flag){
//         resolve();
//     }
//     else{
//         reject();
//     }
//     },3000)
// });

// prom.then(()=>{
//     console.log("promiise is resolved.");
// }).catch(()=>{
//     console.log("promise is rejected.");
// });


// console.log("first line after creatiing promise.")
// console.log("second line after creatiing promise.")
// console.log("third line after creatiing promise.")
// console.log("fourth line after creatiing promise.")



// 9. Classes
class student {
    constructor(firstName, lastName, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        console.log("object is created.");
    }

    display(){
        console.log(`${this.firstName} ${this.lastName} lives in ${this.city}`);
    }
}

let student1 = new  student("Sujan", "Rijal", "MD");
let student2 = new  student("Suman", "Rijal", "NSW");

student1.display();
student2.display();
