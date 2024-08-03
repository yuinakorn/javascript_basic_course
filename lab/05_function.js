// บทเรียนเกี่ยวกับ Function ใน javascript

// 1. การสร้าง Function ใน javascript

function first() {
    console.log('Hello World');
}

first();



// 2. การสร้าง Function ที่มีการรับค่า

function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('John Smith');



// 3. การสร้าง Function ที่มีการส่งค่ากลับ

function calBmi(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    return bmi;
}

let weight = 63;
let height = 1.68;
let bmi = calBmi(weight, height).toFixed(2);

console.log("BMI: " + bmi);



// 4. การสร้าง Function ที่มีการรับค่าและส่งค่ากลับ แบบมีค่าเริ่มต้น

function calBmi2(weight = 63, height = 1.68) {
    let bmi = weight / Math.pow(height, 2);
    return bmi;
}

let bmi2 = calBmi2().toFixed(2);

console.log("BMI: " + bmi2);



// 5. การสร้าง Function แบบ Arrow Function
// โครงสร้างของ Arrow Function
// const functionName = () => {}

// const functionName = (parameter1, parameter2, ..., parameterN) => { 
//     // โค้ดที่ต้องการให้ทำงาน
// }

const calBmi3 = (weight, height) => {
    let bmi = weight / Math.pow(height, 2);
    return bmi;
}

let weight3 = 63;
let height3 = 1.68;
let bmi3 = calBmi3(weight3, height3).toFixed(2);

console.log("BMI: " + bmi3);
// console.log("BMI:", calBmi3(weight3, height3).toFixed(2));



// 6. การสร้าง Function แบบ Arrow Function แบบสั้น (ใช้ในกรณีที่มีโค้ดที่ไม่ซับซ้อน)

const calBmi4 = (weight, height) => weight / Math.pow(height, 2);

let weight4 = 63;
let height4 = 1.68;
let bmi4 = calBmi4(weight4, height4).toFixed(2);

console.log("BMI: " + bmi4);
// console.log("BMI:", calBmi4(weight4, height4).toFixed(2));



// 7. การสร้าง Function แบบ Arrow Function แบบสั้น แบบมีค่าเริ่มต้น

const calBmi5 = (weight = 63, height = 1.68) => weight / Math.pow(height, 2);

let bmi5 = calBmi5().toFixed(2);

console.log("BMI: " + bmi5);




// 8. การสร้าง Function แบบ Arrow Function แบบสั้น แบบมีค่าเริ่มต้น แบบมีการส่งค่ากลับ แบบมีการใช้งานแบบ Object

const calBmi6 = ({ weight = 63, height = 1.68 }) => {
    let bmi = weight / Math.pow(height, 2);
    return bmi;
}

let bmi7 = calBmi6({}).toFixed(2);

console.log("BMI: " + bmi7);



// 9. การสร้าง Function แบบ Arrow Function แบบมีค่าเริ่มต้น 
// แบบมีการส่งค่ากลับ แบบมีการใช้งานแบบ Object โดยมีพารามิเตอร์เริ่มต้น {}
const calBmi7 = ({ weight = 63, height = 1.68 } = {}) => {
    let bmi = weight / Math.pow(height, 2);
    return bmi;
}

let bmi9 = calBmi7().toFixed(2);

console.log("BMI: " + bmi9);

