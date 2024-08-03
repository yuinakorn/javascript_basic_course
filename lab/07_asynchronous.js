// การทำงานแบบ asynchronous

// 1. Callbacks
// Callbacks เป็นวิธีหนึ่งที่ใช้ในการจัดการกับการทำงานแบบ Asynchronous ใน JavaScript โดยการส่งฟังก์ชันเป็นพารามิเตอร์ไปให้กับฟังก์ชันอื่น

// ฟังก์ชันที่ใช้งาน callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 2000);
}

// เรียกใช้ฟังก์ชันพร้อมส่ง callback function
fetchData((data) => {
    console.log("Data received:", data);
});



// 2. Promises
// Promises เป็นอีกวิธีหนึ่งที่ทำให้การจัดการกับการทำงานแบบ Asynchronous ง่ายขึ้นและสามารถจัดการกับข้อผิดพลาดได้ดีขึ้น

// ฟังก์ชันที่คืนค่าเป็น Promise
function fetchData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Jane", age: 27 };
            resolve(data);
        }, 2000);
    });
}

// เรียกใช้ฟังก์ชันพร้อมกับการใช้ .then() และ .catch()
// โดย .then() จะทำงานเมื่อ Promise ทำงานสำเร็จ และ .catch() จะทำงานเมื่อ Promise มีข้อผิดพลาด
fetchData2()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });



// 3. Async/Await
// Async/Await เป็นการปรับปรุงจาก Promises ที่ทำให้โค้ดอ่านง่ายขึ้นและดูเป็นแบบ synchronous มากขึ้น

// ฟังก์ชันที่ใช้งาน async/await
async function fetchData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Helen", age: 43 };
            resolve(data);
        }, 2000);
    });
}

// ไม่ต้องรอ
function printHello() {
    console.log("Hello");
}

// ให้รอฟังก์ชัน getData() ทำงานเสร็จก่อน จึงจะทำงานฟังก์ชัน printHelloWait()
async function printHelloWait() {
    let data = await fetchData3();
    console.log("Hello Wait! + Data received:", data);
}

// ใช้ async/await ในการเรียกใช้ฟังก์ชัน
async function getData() {
    try {
        const data = await fetchData3();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();
printHelloWait();
printHello();

