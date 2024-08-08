// การใช้งาน String ใน JavaScript

let myName = 'Yui Nakorn';
console.log(myName);

let message = "I'm a web developer";
console.log(message);

let message2 = 'I\'m a web developer';
console.log(message2);

let message3 = `I'm a web developer`;
console.log(message3);

let message4 = `My name is ${myName}`;
console.log(message4);

let message5 = 'My name is ' + myName;
console.log(message5);

let message6 = 'My name is ' + myName + ' and I\'m a web developer';
console.log(message6);

let message7 = `My name is ${myName} and I'm a web developer`;
console.log(message7);


// การหาขนาดของ String
console.log(myName.length);


// substring() การตัดข้อมูลใน String
console.log(myName.substring(1, 3));

// การตัดข้อมูลใน String
console.log(myName.slice(1, 3));

// การรวมข้อมูลใน String
console.log(myName.concat(message));
// console.log(myName.concat(" ", message));

// การค้นหาข้อมูลใน String
console.log(myName.indexOf('Smith'));

// การตรวจสอบข้อมูลใน String
console.log(myName.includes('Smith'));

// การเปลี่ยนข้อมูลใน String ด้วย toUpperCase()
console.log(myName.toUpperCase());

// การเปลี่ยนข้อมูลใน String ด้วย toLowerCase()
console.log(myName.toLowerCase());

// การแทนที่ข้อมูลใน String ด้วย replace() แทนที่คำว่า Smith ด้วย นคร
console.log(myName.replace('Smith', 'William Smith'));

// การแยกข้อมูลใน String ด้วย split()
console.log(myName.split(' ')); 
// ผลลัพธ์คือ Array [ 'Jonh', 'Smith' ]

console.log(myName.split('')); 
// ผลลัพธ์คือ Array [ 'J', 'o', 'n', 'h', ' ', 'S', 'm', 'i', 't', 'h' ]


let splitName = [ 'J', 'o', 'n', 'h', ' ', 'S', 'm', 'i', 't', 'h' ];
console.log(splitName.join(''));


// การเรียงข้อมูลใน String ด้วย split(), sort() และ join()
console.log(myName.split('').sort().join(''));


// การใช้งาน Number ใน JavaScript

let num1 = -10 / 0;
console.log(num15);


let num2 = '10';
console.log(num2);

let num3 = Number(num2);
console.log(num3);


let num4 = 'Hello';
console.log(Number(num4));

let num5 = '10.5';
console.log(Number(num5));

// แปลงให้เป็นจำนวนเต็ม
let num6 = parseInt(num5);
console.log(num6);

// แปลงให้เป็นจำนวนจริง
let num7 = parseFloat(num5);
console.log(num7);

let num8 = 10;
console.log(num8.toString());

let num9 = 10.5;
console.log(num9.toString());

let num10 = 10.556456;
console.log(num10.toFixed(0));

let num11 = 10.556456;
console.log(num11.toFixed(1));

let num12 = 10.556456;
console.log(num12.toFixed(2));

