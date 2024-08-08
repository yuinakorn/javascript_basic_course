// การใช้งาน Array ใน JavaScript
let cars = new Array('Toyota', 'Honda', 'Mazda');
console.log(cars);

let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Papaya'];
console.log(fruits);

let numbers = [1, 2, 3, 5, 4, 6];
console.log(numbers);


// array ที่มีข้อมูลหลายชนิด
let mix = ['Apple', 1, 'Banana', 2, 'Orange', 3];
console.log(mix);

// การเข้าถึงข้อมูลใน Array
console.log(fruits[0]);

// การเปลี่ยนข้อมูลใน Array
fruits[0] = 'Pineapple';
console.log(fruits);

// การเพิ่มข้อมูลใน Array
fruits[3] = 'Grape';
console.log(fruits);

// การเพิ่มข้อมูลใน Array ด้วย push()
fruits.push('Grape');
console.log(fruits);

// การลบข้อมูลใน Array
delete fruits[1];
console.log(fruits);

// การลบข้อมูลใน Array ด้วย pop()
fruits.pop();
console.log(fruits);

// การหาขนาดของ Array
console.log(fruits.length);

// การวนลูปข้อมูลใน Array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/* example เติม ลำดับเข้าไปหน้า Array
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}. ${fruits[i]}`);
}
*/

// การวนลูปข้อมูลใน Array ด้วย forEach()
fruits.forEach(function (fruit) {
    console.log(fruit);
});

// การวนลูปข้อมูลใน Array ด้วย for...of
for (let fruit of fruits) {
    console.log(fruit);
}

// การวนลูปข้อมูลใน Array ด้วย for...in
for (let index in fruits) {
    console.log(fruits[index]);
}
// let index คือตัวแปรที่เก็บค่าดัชนีของแต่ละองค์ประกอบใน array fruits ขณะที่ loop กำลังทำงาน.

// การตัดข้อมูลใน Array
console.log(fruits.slice(1, 3));

// การรวมข้อมูลใน Array
console.log(fruits.concat(numbers));

// การค้นหาข้อมูลใน Array
console.log(fruits.indexOf('Banana'));
// คืนค่าเป็น index ของข้อมูลที่ค้นหา ถ้าไม่พบค่าจะคืนค่าเป็น -1

// การตรวจสอบข้อมูลใน Array
console.log(fruits.includes('Banana'));
// True

// การเพิ่มข้อมูลใน Array ด้วย push()
fruits.push('Grape');
console.log(fruits);

// การเพิ่มข้อมูลเข้าไปหน้า Array ด้วย unshift()
fruits.unshift('Grape');
console.log(fruits);

// การลบข้อมูลใน Array ด้วย pop()
fruits.pop();
console.log(fruits);

// การลบข้อมูลหน้าสุด Array ด้วย shift()
fruits.shift();
console.log(fruits);

// การลบข้อมูลใน Array ด้วย splice()
fruits.splice(1, 1);
console.log(fruits);
// คำสั่ง splice คือการลบข้อมูลใน Array โดย ระบุ index ที่ต้องการลบ และ จำนวนข้อมูลที่ต้องการลบ

// Example /////////
// ค้นหาคำว่า Orange และลบออกจาก Array
let index = fruits.indexOf('Orange');
console.log("index: ",  index);
if (index > -1) {
    fruits.splice(index, 1); // คำสั่ง splice คือการลบข้อมูลใน Array โดย ระบุ index ที่ต้องการลบ และ จำนวนข้อมูลที่ต้องการลบ
}
console.log(fruits);
// End Example /////////



// การตรวจสอบข้อมูลใน Array ด้วย some()
console.log(fruits.some(fruit => fruit === 'Banana'));
// some() ต่างจาก includes() คือ some() สามารถใช้เงื่อนไขได้
// จะยกตัวอย่างให้ชัดเจนในตัวอย่าง numbers

// การตรวจสอบข้อมูลใน Array ด้วย every()
console.log(fruits.every(fruit => fruit === 'Banana'));

// การกรองข้อมูลใน Array ด้วย filter()
console.log(fruits.filter(fruit => fruit === 'Banana'));

// การแปลงข้อมูลใน Array ด้วย map()
console.log(fruits.map(fruit => fruit.toUpperCase()));

// ใช้ map() เติมลำดับไปข้างหน้า Array เช่น '1. Apple', '2. Banana', '3. Orange', '4. Mango', '5. Papaya'
console.log(fruits.map((fruit, index) => `${index + 1}. ${fruit}`));

/* 
1.	fruits.map((fruit, index) => ${index + 1}. ${fruit}):
	•	ฟังก์ชัน .map() ใช้ในการสร้าง array ใหม่โดยการเปลี่ยนแปลงค่าทุกค่าใน array ที่เรียกใช้.
	•	ในที่นี้ fruits เป็น array ของผลไม้ เช่น ['Apple', 'Banana', 'Orange', 'Mango', 'Papaya', 'Grape'].
	•	.map() จะส่งผ่านฟังก์ชัน callback ซึ่งในที่นี้คือ (fruit, index) => ${index + 1}. ${fruit}``.
	2.	ฟังก์ชัน callback (fruit, index) => ${index + 1}. ${fruit}``:
	•	fruit คือค่าของแต่ละองค์ประกอบใน array fruits.
	•	index คือดัชนีของแต่ละองค์ประกอบใน array (เริ่มจาก 0).
	•	ฟังก์ชันนี้จะสร้าง string ใหม่สำหรับแต่ละองค์ประกอบใน array โดยใช้รูปแบบ ${index + 1}. ${fruit}.
	•	${index + 1} คือการเพิ่ม 1 ให้กับดัชนีเพื่อเริ่มต้นที่ 1 แทนที่จะเป็น 0.
	•	${fruit} คือค่าของผลไม้ใน array.
	•	ผลลัพธ์จะเป็น string ในรูปแบบ “ดัชนีที่เพิ่มขึ้น. ชื่อผลไม้”.
*/



// การเรียงข้อมูลใน Array ด้วย sort()
console.log(numbers.sort()); 

// การเรียงข้อมูลใน Array แบบย้อนกลับด้วย reverse()
console.log(numbers.reverse());

// การเข้าถึงข้อมูลจากท้าย Array
console.log(numbers[numbers.length - 1]);

 

// การรวมข้อมูลใน Array ด้วย reduce()
console.log(numbers.reduce((sum, number) => sum + number, 0));
/* 
reduce จะทำการ accumulate หรือ การนำค่าใน array มารวมกันให้เหลือเพียงค่าเดียวก่อนที่จะ return
reduce จะรับ function 2 ตัวคือ callback function และค่าเริ่มต้นของการ accumulate
callback function สามารถรับค่าได้ 4 ตัวคือ accumulator, currentValue    ในเคสนี้ยังไม่กล่าวถึง currentIndex, array
accumulator คือค่าที่ถูก return จากครั้งที่แล้ว (ตัวแปรสะสม)
currentValue คือค่าของ array ใน index ปัจจุบัน (ค่า Array ปัจจุบัน)
0 คือค่าเริ่มต้นของการ accumulate (ค่าเร่ิมต้นของตัวแปรสะสม)

currentIndex คือ index ปัจจุบัน
array คือ array ที่เราใช้ reduce อยู่

*/

// การหาข้อมูลสูงสุดใน Array
console.log(numbers.reduce((max, number) => Math.max(max, number), 0));

// การหาข้อมูลต่ำสุดใน Array
console.log(numbers.reduce((min, number) => Math.min(min, number), 0));

// การหาข้อมูลที่มากกว่า 3 ใน Array
console.log(numbers.filter(number => number > 3));

// การหาข้อมูลที่ module 2 เท่ากับ 0 ใน Array
console.log(numbers.filter(number => number % 2 === 0));

// การหาข้อมูลที่มากกว่า 3 ใน Array ด้วย find()
console.log(numbers.find(number => number > 3));
// find() ต่างจาก filter() คือ find() จะหยุดหาข้อมูลเมื่อเจอข้อมูลที่ตรงกับเงื่อนไขและคืนค่าเป็นข้อมูลที่เจอ

// การหาข้อมูลที่น้อยกว่า 3 ใน Array ด้วย find()
console.log(numbers.find(number => number < 3));
// ?? คำถาม ผลลัพธ์จะออกมาอย่างไร ตอบ 1 เพราะ find() จะหยุดหาข้อมูลเมื่อเจอข้อมูลที่ตรงกับเงื่อนไขและคืนค่าเป็นข้อมูลที่เจอ

// การหาข้อมูลที่มากกว่า 3 ใน Array ด้วย findIndex()
console.log(numbers.findIndex(number => number > 3));  // 3

// การหาข้อมูลที่น้อยกว่า 3 ใน Array ด้วย findIndex()
console.log(numbers.findIndex(number => number < 3));  // 0

// การตรวจสอบข้อมูลใน Array ด้วย includes()
console.log(numbers.includes(3));   // true

// การตรวจสอบข้อมูลใน Array ด้วย some()
console.log(numbers.some(number => number < 5));    // true

// การตรวจสอบข้อมูลใน Array ด้วย every()
console.log(numbers.every(number => number < 5));   // false
// event() ต่างจาก some() คือ every() ต้องมีข้อมูลทุกตัวที่ตรงกับเงื่อนไข
// ยกตัวอย่างให้ชัดเจน
// ถ้าเราใช้ some() ใน Array ข้อมูลใดข้อมูลหนึ่งตรงกับเงื่อนไข จะคืนค่าเป็น true
// ถ้าเราใช้ every() ใน Array ข้อมูลทุกตัวต้องตรงกับเงื่อนไข จะคืนค่าเป็น true
