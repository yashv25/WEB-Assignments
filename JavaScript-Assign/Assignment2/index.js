//    QUESTION-1

let Firstname = prompt("Enter your First Name");
let Lastname = prompt("Enter your Last Name");

let Fullname = Firstname + Lastname ;
console.log(Fullname);

//     QUESTION-2
let a = prompt("Enter a no.");

if(a===0)
    console.log("Zero");
else if(a%2 == 0)
    console.log("Positive");
else
    console.log("Negative");

//     QUESTION-3
for(let i = 1;i<=10;i++)
    console.log(i);

//     QUESTION-4

function greet(name) {
    console.log("Hello "+name);
}
let Name = prompt("Enter your name");
greet(Name);

//     QUESTION-5
let arr = [10,20,30,40,50];
let sum = 0;
for(let i = 0; i<arr.length;i++){
    sum += arr[i];
}
console.log(sum);

