//      QUESTION-1
function sayHello() {
    console.log("Hello, World!");
  }
  sayHello();
  
//      QUESTION-2
  function doubleNumber(num){
          return num*2
  }
  let result=doubleNumber(10)
  console.log(result)
  
//      QUESTION-3
  function addTwoNumbers(n1, n2) {
    return n1 + n2;
  }
  console.log(addTwoNumbers(40, 50));
  
//      QUESTION-4
  let doubleNumber = (num) => {
    return num * 2;
  };
  console.log(doubleNumber(10));
  
//      QUESTION-5
  function subtractTen(num) {
    return num - 10;
  }
  let result = subtractTen(40);
  console.log(result);
  
//      QUESTION-6
  function isGreaterThanFive(num) {
    if (num > 5) return true;
    else return false;
  }
  console.log(isGreaterThanFive(-10));
  
//      QUESTION-7
  function isBetweenOneAndTen(num) {
    if (num >= 1 && num <= 10) return true;
    else return false;
  }
  console.log(isGreaterThanFive(10));
  
//      QUESTION-8
 function isEven(num) {
    if (num % 2 == 0) return "Even";
    else return "Odd";
  }
  console.log(isEven(45));

//        QUESTION-9
   function checkAge(age) {
    age >= 18 ? console.log("Adult") : console.log("Minor");
  }
  //checkAge(prompt("Enter Age:"));
  
//        QUESTION-10
  function getDayType(day) {
    switch (day) {
      case 6:
      case 7:
        return "Weekend";
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return "Weekday";
      default:
        return "Invalid day";
    }
  }
  
  // Example usage:
  const day = 6; 
  const dayType = getDayType(day);
  console.log(`Day ${day} is a ${dayType}.`);
  
  getDayType(prompt("Enter day between 1-7 :"))
