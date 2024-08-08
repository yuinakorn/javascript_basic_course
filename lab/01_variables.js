// การประกาศตัวแปรใน JavaScript
// วิธีการใช้ var, let, และ const ใน JavaScript


// ==========================Var==========================

var year = "พ.ศ.2567";
var year = 2567;
console.log(year); 


// ==========================Let==========================

let age = "ยี่สิบ";
// let age = 20; // Uncaught SyntaxError: Identifier 'age' has already been declared
age = 20; 
console.log(age); 


function newAge() {
    let age = 30;
    console.log(age);
}

newAge(); 

// ==========================Const==========================

const IP = "192.168.1.11";
// IP = "new IP"; // Uncaught TypeError: Assignment to constant variable.
console.log(IP); 