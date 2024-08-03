// บทเรียนเกี่ยวกับ datatype ใน javascript

// 1. ตัวอย่างของ datatype ใน javascript

// 1.1 ตัวอย่างของ String
let fname = "John";

// 1.2 ตัวอย่างของ Number
let age = 30;

// 1.3 ตัวอย่างของ Boolean
let isMarried = false;

// 1.4 ตัวอย่างของ Array
let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Papaya'];

// 1.5 ตัวอย่างของ Object
let person = {
    name: 'John',
    age: 30,
    isMarried: false
};

// 1.6 ตัวอย่างของ Function
function test() {
    console.log('Hello World');
}

// 1.7 ตัวอย่างของ Undefined
let x;

// 1.8 ตัวอย่างของ Null
let y = null;

// 1.9 ตัวอย่างของ Symbol
let z = Symbol('mySymbol');

// 2. การตรวจสอบ datatype ใน javascript
console.log(typeof fname); // string

console.log(typeof age); // number

console.log(typeof isMarried); // boolean

// 3. การเปลี่ยน datatype ใน javascript
let num = 20;
console.log(typeof num); // number

num = String(num);
console.log(typeof num); // string



let str = "30";
console.log(typeof str); // string

str = Number(str);
console.log(typeof str); // number

// 3.1 กรณีที่แปลงข้อมูลที่ไม่สามารถแปลงได้
let str2 = "Hello";
console.log(Number(str2)); // NaN



/* สอนถึงตรงนี้ */

// 4. การเปลี่ยน datatype ด้วยการใช้ constructor
let num2 = 30;
console.log(typeof num2); // number

num2 = new String(num2);
console.log(typeof num2); // object
console.log(num2.toString()); // 30

num2 = new Number(num2);
console.log(typeof num2); // object
console.log(num2.valueOf()); // 30

// 5. การเปลี่ยน datatype ด้วยการใช้ method
let num3 = 30;
console.log(typeof num3); // number

num3 = num3.toString(); // แปลงจาก number เป็น string
console.log(typeof num3); // string
console.log(num3); // 30

num3 = Number(num3);  // แปลงจาก string เป็น number
console.log(typeof num3); // number
console.log(num3); // 30
